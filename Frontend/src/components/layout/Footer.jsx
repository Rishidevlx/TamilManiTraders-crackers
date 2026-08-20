import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaFacebook } from 'react-icons/fa';
import logo from '../../assets/logo-removebg-preview.png';

const Footer = () => {
  const [contactDetails, setContactDetails] = useState({
    address: '138, Srivilliputhur Street',
    phone: '93639 53616',
    email: 'hari953616@gmail.com'
  });

  const [footerData, setFooterData] = useState({
    categories: [],
    socials: [
      { id: 'whatsapp', platform: 'WhatsApp', url: '', isActive: true },
      { id: 'phone', platform: 'Phone Call', url: '', isActive: true },
      { id: 'mail', platform: 'Mail', url: '', isActive: true },
      { id: 'facebook', platform: 'Facebook', url: '', isActive: true }
    ]
  });

  const [logoUrl, setLogoUrl] = useState(logo);

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + '/api/cms/home')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          if (data.data.general_settings?.logo_url) {
            setLogoUrl(data.data.general_settings.logo_url);
          }
          if (data.data.contact_details) {
            setContactDetails(data.data.contact_details);
          }
          if (data.data.footer_cms) {
            setFooterData(prev => ({
              ...prev,
              categories: data.data.footer_cms.categories || prev.categories,
              socials: data.data.footer_cms.socials && data.data.footer_cms.socials.length > 0 ? data.data.footer_cms.socials : prev.socials
            }));
          }
        }
      })
      .catch(err => console.error('Error fetching contact details:', err));
  }, []);

  // formatting the address to remove newlines for inline display
  const inlineAddress = contactDetails.address.replace(/\n/g, ', ');

  return (
    <footer className="bg-footer text-black py-16 px-6 lg:px-20 font-body">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        
        {/* Logo Column */}
        <div className="w-full lg:w-full flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 relative z-10">
          <Link to="/" className="inline-block transition-transform hover:scale-105 duration-300">
            <img src={logoUrl} alt="Tamil Mani Traders" className="h-32 md:h-40 w-auto object-contain drop-shadow-lg" />
          </Link>
        </div>

        {/* Dynamic Categories (Max 2 columns) */}
        {footerData.categories.slice(0, 2).map((category) => (
          <div key={category.id} className="col-span-1">
            <h3 className="text-black font-heading font-bold text-lg mb-6 uppercase tracking-wider">{category.title}</h3>
            <ul className="space-y-4 text-sm">
              {category.links.map((link) => (
                <li key={link.id}>
                  <Link to={link.url} className="hover:text-brand hover:translate-x-1 inline-block transition-transform duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Useful Links (Static) */}
        <div className="col-span-1">
          <h3 className="text-black font-heading font-bold text-lg mb-6 uppercase tracking-wider">USEFUL LINKS</h3>
          <ul className="space-y-4 text-sm grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
            <li><Link to="/" className="hover:text-brand hover:translate-x-1 inline-block transition-transform duration-300">Home</Link></li>
            <li><Link to="/shop" className="hover:text-brand hover:translate-x-1 inline-block transition-transform duration-300">Shop</Link></li>
            <li><Link to="/about" className="hover:text-brand hover:translate-x-1 inline-block transition-transform duration-300">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-brand hover:translate-x-1 inline-block transition-transform duration-300">Contact Us</Link></li>
            <li><Link to="/wishlist" className="hover:text-brand hover:translate-x-1 inline-block transition-transform duration-300">Wishlist</Link></li>
            <li><Link to="/cart" className="hover:text-brand hover:translate-x-1 inline-block transition-transform duration-300">Cart</Link></li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1 flex flex-col items-start lg:items-start">
          <h3 className="text-black font-heading font-bold text-lg mb-4 uppercase tracking-wider">Join our newsletter!</h3>
          <p className="text-sm text-gray-800 mb-4">
            Will be used in accordance with our <Link to="/privacy-policy" className="text-brand hover:underline">Privacy Policy</Link>
          </p>
          <form className="w-full flex flex-col gap-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full px-4 py-3 rounded-full bg-transparent border border-black/30 focus:outline-none focus:border-brand text-black placeholder-gray-600"
              required
            />
            <button 
              type="submit"
              className="w-full px-6 py-3 rounded-full bg-brand text-white font-bold hover:bg-red-700 transition-colors shadow-lg hover:shadow-brand/50"
            >
              Subscribe
            </button>
          </form>

          {/* Dynamic Social Links */}
          <div className="flex gap-4 mt-6">
            {footerData.socials.map((social) => {
              if (!social.isActive) return null;
              
              let Icon = null;
              let iconColor = '';
              switch (social.id) {
                case 'whatsapp': Icon = FaWhatsapp; iconColor = 'text-[#25D366]'; break;
                case 'phone': Icon = FaPhoneAlt; iconColor = 'text-[#007bff]'; break;
                case 'mail': Icon = FaEnvelope; iconColor = 'text-[#F8B400]'; break;
                case 'facebook': Icon = FaFacebook; iconColor = 'text-[#1877F2]'; break;
                default: break;
              }

              return Icon ? (
                <a 
                  key={social.id}
                  href={social.url || '#'} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-white flex items-center justify-center ${iconColor} hover:bg-brand hover:text-white transition-all hover:-translate-y-1 shadow-md`}
                  title={social.platform}
                >
                  <Icon className="text-lg" />
                </a>
              ) : null;
            })}
          </div>
        </div>
      </div>
      
      {/* Bottom Footer Info */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-black/20 flex flex-col md:flex-row items-center justify-between text-xs text-gray-800 font-medium">
        <p>&copy; {new Date().getFullYear()} Tamil Mani Traders. All Rights Reserved.</p>
        <p className="mt-2 md:mt-0">{inlineAddress} | {contactDetails.phone} | {contactDetails.email}</p>
      </div>
    </footer>
  );
};

export default Footer;
