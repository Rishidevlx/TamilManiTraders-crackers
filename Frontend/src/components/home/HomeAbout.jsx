import React from 'react';

const HomeAbout = () => {
  return (
    <div className="relative w-full py-16 md:py-24 bg-white flex items-center justify-center overflow-hidden border-t-4 border-brand">
      
      {/* Left Image - Absolutely positioned to the left edge */}
      <img 
        src="public\Banner\Home page left bg.png" 
        alt="Left Decorative" 
        className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[20%] xl:w-[25%] h-auto object-contain drop-shadow-md" 
      />

      {/* Center Content */}
      <div className="relative z-10 w-full max-w-2xl text-center px-4">
        <h2 className="text-3xl md:text-4xl font-heading tracking-wider mb-6 text-brand uppercase drop-shadow-sm">
          Online Crackers in Sivakasi
        </h2>
        
        <p className="text-base md:text-lg font-body leading-relaxed text-gray-700">
          <span className="font-bold text-brand">Tamil Mani Traders</span> is a leading Online Crackers shop in Sivakasi. We are top Online Crackers in Sivakasi for more than 25 years of experience in Online crackers in sivakasi. With our Top-Rated Customer service, good packaging and proper delivery of online crackers we now have more than 25,000+ happy customers.
        </p>

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
