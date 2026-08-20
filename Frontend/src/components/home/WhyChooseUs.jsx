import React from 'react';
import { Link } from 'react-router-dom';

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 bg-brand font-body overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side: Image */}
          <div className="w-full lg:w-1/2 relative group">
            {/* Decorative background behind image */}
            <div className="absolute inset-0 bg-white/10 rounded-2xl transform rotate-3 scale-105 transition-transform duration-500 group-hover:rotate-6"></div>
            <img 
              src="/Banner/Home page section Bg.png" 
              alt="Wholesale Dealers in Sivakasi" 
              className="relative z-10 w-full h-auto object-contain rounded-2xl drop-shadow-2xl transition-transform duration-500 group-hover:-translate-y-2"
            />
          </div>

          {/* Right Side: SEO Content */}
          <div className="w-full lg:w-1/2 text-white">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold uppercase leading-tight mb-6 drop-shadow-sm">
              Wholesale Dealers in <span className="text-footer">Sivakasi</span>
            </h2>
            
            <div className="space-y-6 text-white/90 text-sm md:text-base leading-relaxed font-medium">
              <p>
                <strong className="text-white text-lg">Tamil Mani Traders</strong> is your trusted partner for the best 
                <strong> online crackers shopping in Sivakasi</strong>. We provide a wide variety of premium firecrackers including 
                one sound crackers, sparklers, fancy rockets, flower pots, ground chakkaras, and multi-shot aerials.
              </p>
              
              <p>
                We guarantee unbeatable <strong>wholesale prices</strong>, fast delivery, and the highest safety standards for all your 
                festival celebrations. Buy crackers online directly from Sivakasi's top dealer and experience premium quality 
                without breaking the bank.
              </p>

              <div className="pt-4">
                <Link to="/shop" className="inline-block bg-footer text-brand font-heading uppercase font-bold px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  Spread the Festive Cheer!
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
