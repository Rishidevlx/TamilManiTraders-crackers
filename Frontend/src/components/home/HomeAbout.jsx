import React from 'react';

const HomeAbout = () => {
  return (
    <div className="relative w-full py-16 md:py-24 bg-white flex items-center justify-center overflow-hidden border-t-4 border-brand">
      
      {/* Left Image - Absolutely positioned to the left edge */}
      <img 
        src="/Banner/Home page left bg.png" 
        alt="Left Decorative" 
        className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[20%] xl:w-[25%] h-auto object-contain drop-shadow-md" 
      />

      {/* Center Content */}
      <div className="relative z-10 w-full max-w-2xl text-center px-4">
        <h2 className="text-3xl md:text-4xl font-heading tracking-wider mb-6 text-brand uppercase drop-shadow-sm">
          Online Crackers in Sivakasi
        </h2>
        
        <div className="text-base md:text-lg font-body leading-relaxed text-gray-700 space-y-4 text-left md:text-center">
          <p className="font-bold text-brand uppercase tracking-wide">
            Tamilmani Traders - Premium Sivakasi Crackers
          </p>
          <p>
            We are a leading wholesale supplier of authentic <strong>Sivakasi crackers</strong> and premium fireworks, serving customers across Tamil Nadu and South India. With over 5+ years of trusted experience in the Sivakasi wholesale market, <strong>Tamilmani Traders</strong> provides high-quality, safe, and ISI-certified products at competitive wholesale prices.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 text-left max-w-md mx-auto mt-4">
            <h3 className="font-bold text-gray-900 mb-2">Our Services:</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm md:text-base">
              <li>Bulk Fireworks Supply for Corporate & Retail</li>
              <li>Exclusive Family & Kids Combo Packs</li>
              <li>Safe & Secure Doorstep Delivery across South India</li>
            </ul>
          </div>
          <p className="font-semibold text-brand mt-4">
            Contact us today for bulk orders and wholesale enquiries to make your celebrations brighter!
          </p>
        </div>

        <div className="mt-8">
          <button className="bg-brand text-white px-8 py-3 rounded-full font-bold hover:bg-footer hover:text-brand transition-colors duration-300 shadow-lg">
            KNOW MORE ABOUT US
          </button>
        </div>
      </div>

      {/* Right Image - Absolutely positioned to the right edge */}
      <img 
        src="/Banner/Home page right bg image.png" 
        alt="Right Decorative" 
        className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[20%] xl:w-[25%] h-auto object-contain drop-shadow-md" 
      />
      
    </div>
  );
};

export default HomeAbout;
