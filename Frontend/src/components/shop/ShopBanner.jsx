import React, { useState, useEffect } from 'react';

const ShopBanner = () => {
  const [banners, setBanners] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Fetch banners from CMS (Same as Home page)
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_URL + '/api/cms/home');
        const data = await response.json();
        if (data.success && data.data.hero_banners && data.data.hero_banners.length > 0) {
          setBanners(data.data.hero_banners);
        } else {
          setBanners(['/Banner/Shop page banner.jpg']); // Fallback
        }
      } catch (err) {
        console.error('Error fetching banners:', err);
        setBanners(['/Banner/Shop page banner.jpg']); // Fallback on error
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
    <div className="relative w-full bg-brand overflow-hidden">
      {/* Invisible placeholder to dynamically set container height based on image size */}
      {banners.length > 0 && (
        <img src={banners[0]} alt="placeholder" className="w-full h-auto invisible pointer-events-none" />
      )}

      {banners.map((img, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <img 
            src={img} 
            alt={`Shop Banner ${index + 1}`} 
            className="w-full h-full object-contain object-center"
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
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white w-6 md:w-8' : 'bg-white/50 hover:bg-white'}`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShopBanner;
