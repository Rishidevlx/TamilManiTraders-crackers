import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import defaultBanner from '../../assets/images/banners/crackers1.png'; // Fallback

const Hero = () => {
  const [banners, setBanners] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Fetch banners from CMS
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_URL + '/api/cms/home');
        const data = await response.json();
        if (data.success && data.data.hero_banners) {
          const parsedBanners = data.data.hero_banners;
          if (Array.isArray(parsedBanners) && parsedBanners.length > 0) {
            setBanners(parsedBanners);
          } else {
            setBanners([defaultBanner]); // Fallback if empty array
          }
        } else {
          setBanners([defaultBanner]); // Fallback if not found
        }
      } catch (err) {
        console.error('Error fetching banners:', err);
        setBanners([defaultBanner]); // Fallback on error
      }
    };
    
    fetchBanners();
  }, []);

  // Auto-play slider
  useEffect(() => {
    if (banners.length <= 1) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [banners.length]);

  return (
    <div className="flex flex-col bg-white w-full">
      
      {/* Slider Images */}
      <div className="relative aspect-[16/9] sm:h-[35vh] md:h-[50vh] lg:h-[65vh] w-full overflow-hidden bg-gray-50">
        {banners.map((img, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <img 
              src={img} 
              alt={`Hero Banner ${index + 1}`} 
              className="w-full h-full object-contain md:object-cover object-center"
            />
          </div>
        ))}

        {/* Slider Controls */}
        {banners.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2 md:gap-3">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${index === currentSlide ? 'bg-brand w-6 md:w-8' : 'bg-white/50 hover:bg-white'}`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        )}
      </div>

      {/* Content Section Below Slider */}
      <div className="py-12 md:py-16 px-6 max-w-4xl mx-auto text-center flex flex-col items-center justify-center bg-white">
        <span className="inline-block py-1 px-4 rounded-full bg-brand/10 border border-brand/20 text-brand font-bold text-xs md:text-sm mb-4">
          Premium Quality Crackers
        </span>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-4 leading-tight text-gray-900 uppercase">
          <span className="text-brand">TAMILMANI TRADERS</span> <br className="md:hidden" /> SIVAKASI CRACKERS
        </h1>
        <p className="text-gray-600 mb-8 max-w-2xl text-sm md:text-lg">
          Buy authentic Sivakasi Crackers directly from Tamilmani Traders. 
          Light up your celebrations with Sivakasi's finest standard fireworks at genuine wholesale prices.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            to="/shop" 
            className="bg-brand hover:bg-footer hover:text-black text-white font-bold py-3 md:py-4 px-8 md:px-10 rounded-full shadow-lg transition-all flex items-center gap-2 transform hover:-translate-y-1 uppercase tracking-wider text-sm md:text-base"
          >
            Shop Now <FiArrowRight />
          </Link>
          <a 
            href={`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/products/pricelist/download`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white border-2 border-brand text-brand hover:bg-brand hover:text-white font-bold py-3 md:py-4 px-8 md:px-10 rounded-full shadow-lg transition-all transform hover:-translate-y-1 uppercase tracking-wider text-sm md:text-base"
          >
            Download Pricelist
          </a>
        </div>
      </div>

    </div>
  );
};

export default Hero;
