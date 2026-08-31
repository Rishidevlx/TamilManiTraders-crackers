import React from 'react';
import SEO from '../components/seo/SEO';
import { FaPhoneAlt, FaBoxOpen, FaPercent, FaHandshake, FaQuoteLeft, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import FAQ from '../components/about/FAQ';

const About = () => {
  return (
    <div className="font-body text-black bg-primary min-h-screen">
      <SEO 
        title="About Us | Tamil Mani Traders - Sivakasi Crackers"
        description="Learn about Tamil Mani Traders, the most trusted crackers shop in Sivakasi since 2000. Discover our core values, safe packaging, and commitment to quality fireworks."
        keywords="about tamil mani traders, crackers shop in sivakasi, sivakasi fireworks company, online crackers shopping sivakasi, subhas chandra bose sivakasi"
        url="https://tamilmanitraders.com/about"
      />
      
      {/* 1. Banner Section */}
      <section 
        className="relative h-64 md:h-80 bg-cover bg-center flex items-center"
        style={{ backgroundImage: 'url("/Banner/about page banner.jpg")' }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 lg:px-16 flex flex-col md:flex-row justify-between items-center z-10 relative">
          <h1 className="text-3xl md:text-4xl font-heading text-white uppercase mb-4 md:mb-0 drop-shadow-md">
            About Tamil Mani Traders
          </h1>
          <div className="text-white text-sm md:text-base font-body">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-200">About Us</span>
          </div>
        </div>
      </section>

      {/* 2. Intro Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-16 flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <img 
              src="/Banner/about us image.webp" 
              alt="Tamil Mani Traders Family Celebration" 
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-heading text-brand mb-6 uppercase">
              Online Crackers Shopping Sivakasi
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Founded in 2020, <strong>Tamil Mani Traders</strong> has been serving the Sivakasi community and fireworks lovers for over 5+ years. Located in the heart of the fireworks capital, we specialize as a leading <strong>fireworks supplier in Sivakasi</strong> for wholesale fireworks and online crackers shopping.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our mission is to provide premium quality products sourced directly from top <strong>fireworks manufacturer Sivakasi</strong> units, with excellent customer service and unbeatable wholesale prices. As one of the <strong>best traders in Sivakasi</strong>, we have built lasting trust with thousands of happy customers across the <strong>Sivakasi wholesale market</strong> and South India, ensuring every Diwali is safe, spectacular, and memorable.
            </p>
            <div className="flex gap-4">
              <Link to="/shop" className="bg-brand text-white px-8 py-3 rounded-full font-heading uppercase text-lg hover:bg-footer transition-colors shadow-lg">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why Choose Us Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 lg:px-16 text-center">
          <p className="text-gray-500 italic mb-2">Core values</p>
          <h2 className="text-3xl md:text-4xl font-heading text-black mb-12 uppercase">
            Why Choose Us?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border-2 border-brand flex items-center justify-center text-brand text-2xl mb-4 hover:bg-brand hover:text-white transition-colors">
                <FaPhoneAlt />
              </div>
              <h3 className="font-heading text-xl mb-2 uppercase">Outstanding Support</h3>
              <p className="text-sm text-gray-600 text-center">We are here to assist you 24/7 with any queries.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border-2 border-brand flex items-center justify-center text-brand text-2xl mb-4 hover:bg-brand hover:text-white transition-colors">
                <FaBoxOpen />
              </div>
              <h3 className="font-heading text-xl mb-2 uppercase">Secure Packaging</h3>
              <p className="text-sm text-gray-600 text-center">Safest packaging to ensure damage-free delivery.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border-2 border-brand flex items-center justify-center text-brand text-2xl mb-4 hover:bg-brand hover:text-white transition-colors">
                <FaPercent />
              </div>
              <h3 className="font-heading text-xl mb-2 uppercase">Up To 90% Discount</h3>
              <p className="text-sm text-gray-600 text-center">Unbeatable wholesale prices directly from Sivakasi.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border-2 border-brand flex items-center justify-center text-brand text-2xl mb-4 hover:bg-brand hover:text-white transition-colors">
                <FaHandshake />
              </div>
              <h3 className="font-heading text-xl mb-2 uppercase">Trustworthy Service</h3>
              <p className="text-sm text-gray-600 text-center">Quality assured crackers for your bright celebrations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founder Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading text-black uppercase">
              Meet the Founder
            </h2>
            <div className="w-24 h-1 bg-brand mx-auto mt-4 rounded"></div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-12 bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src="/Founder Subash.jpeg" 
                  alt="Subhas Chandra Bose - Founder" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Subhas Chandra Bose</h3>
              <p className="text-brand font-semibold uppercase tracking-wider text-sm mb-6">
                Founder – Tamil Mani Traders
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Behind every trusted business is a vision built on quality, commitment, and customer satisfaction. Subhas Chandra Bose, the Founder of Tamil Mani Traders, is dedicated to creating a trusted destination for quality fireworks and crackers.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                With a strong focus on quality products, customer satisfaction, and reliable service, Tamil Mani Traders aims to make every celebration more memorable and joyful. From traditional crackers to exciting fireworks, the goal is to offer customers a dependable shopping experience with products selected with care.
              </p>
              <p className="text-gray-700 leading-relaxed italic font-medium">
                "At Tamil Mani Traders, we believe that celebrations are not just about fireworks — they are about creating happy moments, lasting memories, and bringing families together."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Crackers Online Shopping (Diya Section) */}
      <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
        {/* Decorative background elements can go here */}
        <div className="container mx-auto px-4 lg:px-16 flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 flex justify-center">
            <img 
              src="/diwali_diya.png" 
              alt="Joy of Deepavali Diya" 
              className="w-full max-w-md h-auto object-contain drop-shadow-2xl"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-heading text-black mb-6 uppercase">
              Crackers Online Shopping
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Crackers Online Shopping</strong> is increasing nowadays, and you can conveniently book Diwali crackers from the comfort of your home using your mobile phone, making your <strong>online crackers shopping</strong> experience hassle-free.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Tamil Mani Traders</strong> is a leading <strong>crackers online shopping in Sivakasi</strong>, offering a wide range of high-quality <strong>online crackers sivakasi</strong> at unbeatable prices with amazing discounts. We bring you an extensive collection of fireworks sourced directly from Sivakasi's top manufacturers.
            </p>
            <p className="text-gray-700 font-semibold mb-8">
              Order Now for the Ultimate Sivakasi Experience!
            </p>
            <Link to="/pricelist" className="bg-brand text-white px-10 py-3 rounded-full font-heading uppercase text-lg hover:bg-footer transition-colors shadow-lg">
              Pricelist
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section for AEO */}
      <FAQ />

      {/* 5. Testimonials Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-gray-500 italic mb-2">Happy Customer</p>
            <h2 className="text-3xl md:text-4xl font-heading text-black uppercase">
              Testimonials
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center relative pt-12">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 text-gray-300 text-4xl">
                <FaQuoteLeft />
              </div>
              <p className="text-gray-600 text-sm mb-6 flex-grow">
                "I recently ordered from Tamil Mani Traders, and I must say they offer the best online crackers shopping site in Sivakasi. The quality was amazing, and the prices were much lower than others. Best site for anyone looking for online crackers shopping!"
              </p>
              <div className="flex text-yellow-400 mb-4">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-xl">
                  R
                </div>
                <h4 className="font-heading text-lg">Raja</h4>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center relative pt-12">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 text-gray-300 text-4xl">
                <FaQuoteLeft />
              </div>
              <p className="text-gray-600 text-sm mb-6 flex-grow">
                "Super happy with my first crackers online shopping from Tamil Mani Traders. The website was very user-friendly easy to navigate, and the delivery was right on time. Got an amazing deal with an online crackers discount. Will buy again next year!"
              </p>
              <div className="flex text-yellow-400 mb-4">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl">
                  M
                </div>
                <h4 className="font-heading text-lg">Meena</h4>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center relative pt-12">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 text-gray-300 text-4xl">
                <FaQuoteLeft />
              </div>
              <p className="text-gray-600 text-sm mb-6 flex-grow">
                "Very happy with my online crackers shopping sivakasi order. Tamil Mani Traders was customer friendly, and the delivery was right on time. Got an best online crackers shopping sivakasi with good quality and good packaging. Referred many of my friends also."
              </p>
              <div className="flex text-yellow-400 mb-4">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center font-bold text-xl">
                  P
                </div>
                <h4 className="font-heading text-lg">Pooja</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
