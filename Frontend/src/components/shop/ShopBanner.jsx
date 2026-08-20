import React from 'react';

const ShopBanner = () => {
  return (
    <div 
      className="relative w-full h-32 sm:h-48 md:h-64 lg:h-80 flex items-center justify-center bg-brand overflow-hidden"
      style={{
        backgroundImage: 'url("/Banner/Shop page banner.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Empty banner as requested */}
    </div>
  );
};

export default ShopBanner;
