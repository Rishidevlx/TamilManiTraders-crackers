const PDFDocument = require('pdfkit-table');
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');
const https = require('https');
require('dotenv').config();

// Initialize Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const formatCurrency = (amount) => {
  return Number(amount).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};

const fetchImage = (url) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      const data = [];
      res.on('data', (chunk) => data.push(chunk));
      res.on('end', () => resolve(Buffer.concat(data)));
    }).on('error', (e) => reject(e));
  });
};

const generateInvoice = async (enquiryData) => {
  return new Promise(async (resolve, reject) => {
    try {
      // Pre-fetch images
      const itemsWithImages = [];
      if (enquiryData.cart_data && Array.isArray(enquiryData.cart_data)) {
        for (let item of enquiryData.cart_data) {
          let imgBuffer = null;
          if (item.image && item.image.startsWith('http')) {
            try {
               imgBuffer = await fetchImage(item.image);
            } catch (e) {
               console.error("Failed to load image for", item.name);
            }
          }
          itemsWithImages.push({ ...item, imgBuffer });
        }
      }

      const doc = new PDFDocument({ margin: 50, size: 'A4', bufferPages: true });

      let buffers = [];
      doc.on('data', buffers.push.bind(buffers));
      doc.on('end', () => {
        let pdfData = Buffer.concat(buffers);
        
        // Upload to Cloudinary using upload_stream
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            resource_type: 'raw',
            folder: 'invoices',
            public_id: `invoice_${enquiryData.enquiry_no}`,
            format: 'pdf',
          },
          (error, result) => {
            if (error) {
              console.error('Cloudinary Upload Error:', error);
              reject(error);
            } else {
              resolve(result.secure_url);
            }
          }
        );

        uploadStream.end(pdfData);
      });

      const logoPath = path.join(__dirname, '../../Frontend/public/Logo/logo-removebg-preview.png');
      const hasLogo = fs.existsSync(logoPath);

      // --- Draw PDF Content ---

      // Add Watermark
      if (hasLogo) {
        doc.save();
        doc.opacity(0.08);
        doc.image(logoPath, 150, 300, { width: 300 });
        doc.restore();
      }
      
      // Top Left: Logo / Brand Name
      if (hasLogo) {
         doc.image(logoPath, 50, 40, { height: 90 }); // Increased size
      } else {
         doc.fontSize(24).fillColor('#C70E17').text('TAMIL MANI TRADERS', 50, 50, { bold: true });
      }
      // Shop description
      doc.fontSize(10).fillColor('#333333').text('Premium Fireworks & Crackers', 50, 135);

      // Top Right: INVOICE details
      doc.fontSize(10).fillColor('#000000').text(`INVOICE NO: ${enquiryData.enquiry_no}`, 350, 50, { align: 'right', width: 200 });
      doc.text(`DATE: ${new Date().toLocaleDateString('en-IN')}`, 350, 65, { align: 'right', width: 200 });

      // ISSUED TO:
      doc.moveDown(5);
      doc.fontSize(12).fillColor('#000000').font("Helvetica-Bold").text('ISSUED TO:', 50, 165, { underline: true });
      doc.moveDown(0.8);
      doc.fontSize(11).text(enquiryData.customer_name || 'Valued Customer');
      doc.moveDown(0.4);
      doc.font("Helvetica").text(`Ph: +91 ${enquiryData.mobile_number}`);
      doc.moveDown(0.4);
      if (enquiryData.address) {
        doc.text(enquiryData.address);
        doc.moveDown(0.4);
      }
      if (enquiryData.city) doc.text(`${enquiryData.city} - ${enquiryData.pincode}`);

      doc.moveDown(3);

      // Table Setup
      const table = {
        title: "Order Details",
        headers: [
          { 
            label: "PRODUCT", property: "desc", width: 250, 
            renderer: (value, indexColumn, indexRow, row, rectRow, rectCell) => {
              if (row.imgBuffer && rectCell.y > 50) { // Only draw if actually rendering (y > 50 to avoid dummy pass top-left drawing)
                 try {
                    doc.image(row.imgBuffer, rectCell.x + 5, rectCell.y + 3, { width: 25, height: 25 });
                 } catch(e) {}
              }
              return value; 
            }
          },
          { label: "UNIT PRICE", property: "price", width: 80, renderer: null },
          { label: "QTY", property: "qty", width: 60, renderer: null },
          { label: "TOTAL", property: "total", width: 90, renderer: null }
        ],
        datas: []
      };

      let subtotal = 0;
      let totalItems = 0;
      let originalSubtotal = 0;

      itemsWithImages.forEach(item => {
        const itemTotal = item.price * item.quantity;
        const originalPrice = item.originalPrice || item.price;
        const itemOriginalTotal = originalPrice * item.quantity;
        
        subtotal += itemTotal;
        originalSubtotal += itemOriginalTotal;
        totalItems += item.quantity;

        // Use spaces to indent text if there's an image
        const indent = item.imgBuffer ? '            ' : '';

        table.datas.push({
          desc: indent + `${item.name}${item.unit ? ' (per ' + item.unit + ')' : ''}`,
          price: `Rs. ${formatCurrency(item.price)}`,
          qty: item.quantity.toString(),
          total: `Rs. ${formatCurrency(itemTotal)}`,
          imgBuffer: item.imgBuffer
        });
      });

      doc.table(table, {
        prepareHeader: () => doc.font("Helvetica-Bold").fontSize(10),
        prepareRow: (row, indexColumn, indexRow, rectRow, rectCell) => {
          doc.font("Helvetica").fontSize(10);
        },
        padding: 5
      });

      // Total Section
      doc.moveDown(1);
      
      // Box for summary
      const summaryY = doc.y;
      doc.rect(380, summaryY, 165, 35).fill('#C70E17');
      doc.fillColor('#FFFFFF').font("Helvetica-Bold").fontSize(12);
      doc.text(`Overall Total: Rs. ${formatCurrency(subtotal)}`, 390, summaryY + 12);
      
      doc.fillColor('#000000').font("Helvetica");

      doc.y = summaryY + 50;
      doc.moveDown(1);

      // You Save section
      let savedAmount = originalSubtotal - subtotal;
      if (savedAmount < 0) savedAmount = 0;

      const boxY = doc.y;
      doc.rect(50, boxY, 495, 30).dash(2, {space: 2}).stroke('#C70E17');
      doc.undash(); // Important to reset dashed lines
      
      // Left side: Total Items
      doc.fillColor('#000000').font("Helvetica").text(`Total Items: `, 65, boxY + 10, { continued: true })
         .fillColor('#C70E17').font("Helvetica-Bold").text(`${totalItems}`);
         
      // Right side: You Save
      doc.fillColor('#000000').font("Helvetica").text(`You Save: `, 350, boxY + 10, { continued: true })
         .fillColor('#008000').font("Helvetica-Bold").text(`Rs. ${formatCurrency(savedAmount)}`);
      
      doc.fillColor('#000000').font("Helvetica");
      doc.moveDown(5);

      // Footer Shop Details
      doc.fontSize(12).font("Helvetica-Bold").fillColor('#C70E17').text('TAMIL MANI TRADERS (From)', { align: 'right' });
      doc.fontSize(9).font("Helvetica").fillColor('#333333').text('Phone: +91 8248834928', { align: 'right' }); 
      doc.text('Email: info@tamilmanitraders.com', { align: 'right' });
      doc.text('Address: Sivakasi, Tamil Nadu, India', { align: 'right' });

      // Add Borders to all pages
      const pages = doc.bufferedPageRange();
      for (let i = 0; i < pages.count; i++) {
        doc.switchToPage(i);
        // Attractive Header Banner (Thin line)
        doc.rect(0, 0, 600, 5).fill('#C70E17');
        doc.rect(0, 5, 600, 2).fill('#f1a81e');
        
        // Attractive Footer Banner
        doc.rect(0, 835, 600, 2).fill('#f1a81e');
        doc.rect(0, 837, 600, 5).fill('#C70E17');
      }

      doc.end();

    } catch (err) {
      reject(err);
    }
  });
};

module.exports = generateInvoice;
