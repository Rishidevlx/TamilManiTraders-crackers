import React, { useState, useEffect } from 'react';
import { FiSearch, FiShoppingCart, FiMenu, FiHeart } from 'react-icons/fi';
import { FaBolt, FaStar, FaPhoneAlt, FaEnvelope, FaDownload } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';
import logo from '../../assets/logo-removebg-preview.png';
import CartSidebar from '../cart/CartSidebar';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [allProducts, setAllProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const location = useLocation();
  const { wishlistCount } = useWishlist();
  const { cartCount, cartTotal, isCartOpen, setIsCartOpen, setSidebarTab } = useCart();

  // Dynamic Marquee, Logo, and Pricelist
  const [marqueeText, setMarqueeText] = useState('🎉 HUGE DIWALI SALE IS LIVE! GET FLAT 50% DISCOUNT ON ALL CRACKERS 🔥');
  const [logoUrl, setLogoUrl] = useState(logo);
  const [pricelistUrl, setPricelistUrl] = useState('/price-list.pdf');
  const [contactDetails, setContactDetails] = useState({
    address: 'SH 183, Kallamanaickerpatti, near alangulam 626131,\nvirudhunagar , Tamil Nadu , India',
    phone: '+91 99947 03605',
    email: 'tamilmanitraderss@gmail.com'
  });

  // Fetch all products for search
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_URL + '/api/products');
        const data = await response.json();
        if (data.success) {
          setAllProducts(data.data.filter(p => p.status === 'active'));
        }
      } catch (err) {
        console.error('Failed to fetch products for search:', err);
      }
    };
    fetchProducts();
  }, []);

  // Handle Search Input
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
    } else {
      const lowerCaseQuery = searchQuery.toLowerCase();
      const filtered = allProducts.filter(p =>
        p.name.toLowerCase().includes(lowerCaseQuery) ||
        (p.category_name && p.category_name.toLowerCase().includes(lowerCaseQuery))
      ).slice(0, 5); // top 5 suggestions
      setSearchResults(filtered);
    }
  }, [searchQuery, allProducts]);

  useEffect(() => {
    const fetchCMS = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_URL + '/api/cms/home');
        const data = await response.json();
        if (data.success) {
          if (data.data.marquee_text) {
            setMarqueeText(data.data.marquee_text);
          }
          if (data.data.general_settings?.logo_url) {
            setLogoUrl(data.data.general_settings.logo_url);
          }
          if (data.data.general_settings?.pricelist_url) {
            setPricelistUrl(data.data.general_settings.pricelist_url);
          }
          if (data.data.general_settings?.favicon_url) {
            const favicon = document.getElementById('favicon');
            if (favicon) {
              favicon.href = data.data.general_settings.favicon_url;
            }
          }
          if (data.data.contact_details) {
            setContactDetails(data.data.contact_details);
          }
        }
      } catch (err) {
        console.error('Failed to fetch marquee:', err);
      }
    };
    fetchCMS();
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <div className="relative w-full z-50 flex flex-col font-body shadow-md bg-white">

        {/* Header 1 (Top Bar - Red) */}
        <div className="bg-brand text-white text-xs md:text-sm py-3 px-4 hidden md:flex justify-center w-full">
          <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
            <div className="font-bold tracking-wider uppercase">Tamil Mani Traders</div>
            <div className="hidden lg:block text-white/90 text-xs text-center leading-relaxed whitespace-pre-line max-w-md">
              {contactDetails.address}
            </div>
            <div className="flex items-center gap-4 text-xs font-semibold">
              <div className="flex items-center gap-1"><FaPhoneAlt /> {contactDetails.phone}</div>
              <div className="flex items-center gap-1"><FaEnvelope /> {contactDetails.email}</div>
            </div>
          </div>
        </div>

        {/* Middle Row - Search & Logo (Desktop & Tablet) */}
        <div className="bg-white py-2 lg:py-4 min-h-[80px] lg:min-h-[100px] flex items-center shadow-sm relative z-40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex justify-between items-center relative">

              {/* Mobile Menu Button */}
              <div className="flex items-center lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-gray-700 hover:text-brand focus:outline-none p-2"
                >
                  <FiMenu className="h-6 w-6" />
                </button>
              </div>

              {/* Left: Search Bar */}
              <div className="hidden lg:block relative w-80 xl:w-96">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search crackers..."
                    className="w-full bg-white border border-gray-300 rounded py-2.5 pl-4 pr-10 outline-none focus:border-brand focus:ring-1 focus:ring-brand/30 transition-all text-sm font-medium text-gray-700 placeholder-gray-400"
                  />
                  <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>

                {/* Search Dropdown */}
                {searchQuery.trim() !== '' && (
                  <div className="absolute left-0 top-full mt-2 w-full bg-white shadow-2xl rounded-lg border border-gray-100 overflow-hidden z-50 animate-fade-in">
                    <div className="max-h-80 overflow-y-auto">
                      {searchResults.length > 0 ? (
                        <div className="py-2">
                          {searchResults.map(product => (
                            <Link
                              key={product.id}
                              to={`/product/${product.id}`}
                              onClick={() => setSearchQuery('')}
                              className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0"
                            >
                              <img
                                src={product.main_image || 'https://via.placeholder.com/50'}
                                alt={product.name}
                                className="w-10 h-10 object-cover rounded shadow-sm border border-gray-100"
                              />
                              <div className="flex-1">
                                <h4 className="text-sm font-bold text-gray-800 line-clamp-1">{product.name}</h4>
                                <p className="text-xs text-brand font-semibold">₹{Number(product.price || 0).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <div className="p-4 text-center text-sm text-gray-500 font-medium">
                          No products found.
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Centered Logo (Absolute) */}
              <div className="flex-shrink-0 flex items-center justify-center absolute left-1/2 -translate-x-1/2 pointer-events-none lg:pointer-events-auto">
                <Link to="/" className="flex items-center pointer-events-auto py-2">
                  <img src={logoUrl} alt="Tamil Mani Traders" className="h-14 md:h-16 lg:h-20 w-auto object-contain drop-shadow-sm hover:scale-105 transition-transform duration-300" />
                </Link>
              </div>

              {/* Right: Wishlist & Cart */}
              <div className="flex items-center space-x-6 z-10 ml-auto lg:ml-0">
                {/* Wishlist Button */}
                <button
                  onClick={() => {
                    setSidebarTab('wishlist');
                    setIsCartOpen(true);
                  }}
                  className="text-brand hover:text-red-700 transition-colors relative group transition-transform duration-300 hover:scale-110 flex items-center justify-center p-2 bg-brand/10 rounded-full cursor-pointer"
                >
                  <FiHeart className="h-5 w-5 md:h-6 md:w-6" />
                  {wishlistCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-footer text-black text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center shadow-sm">
                      {wishlistCount}
                    </span>
                  )}
                </button>

                {/* Cart Button */}
                <button
                  onClick={() => {
                    setSidebarTab('cart');
                    setIsCartOpen(true);
                  }}
                  className="flex items-center gap-2 bg-brand text-white hover:bg-red-700 px-4 py-2 rounded transition-colors group cursor-pointer border-none outline-none shadow-sm"
                >
                  <FiShoppingCart className="h-5 w-5 md:h-6 md:w-6 transition-transform duration-300 group-hover:scale-110" />
                  <span className="text-sm font-bold leading-none hidden sm:block">₹{cartTotal.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Header 3 (Bottom Bar - Yellow) */}
        <div className="bg-footer text-black py-3 hidden lg:block border-b-2 border-brand/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">

            {/* Left Spacer */}
            <div className="flex-1"></div>

            {/* Center Nav Links */}
            <div className="flex items-center justify-center gap-8 flex-shrink-0">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-bold transition-all duration-300 hover:text-brand uppercase tracking-wide ${location.pathname === link.path ? 'text-brand border-b-2 border-brand' : 'text-black'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right Button */}
            <div className="flex-1 flex justify-end">
              <a href={pricelistUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-bold text-sm bg-black text-white px-5 py-2 rounded-full hover:bg-brand transition-colors shadow-sm">
                <FaDownload /> Download Pricelist
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown & Search */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden bg-white border-t border-gray-100 ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 py-3 bg-gray-50">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search crackers..."
                className="w-full bg-white border border-gray-300 rounded py-2 pl-4 pr-10 outline-none focus:border-brand"
              />
              <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
          </div>
          <div className="px-4 py-2 space-y-1 shadow-inner bg-white">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-semibold uppercase ${location.pathname === link.path
                    ? 'bg-footer/50 text-brand border-l-4 border-brand'
                    : 'text-gray-800 hover:bg-gray-50'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <a href={pricelistUrl} target="_blank" rel="noopener noreferrer" className="block px-4 py-3 rounded-lg text-base font-semibold uppercase text-brand hover:bg-gray-50 flex items-center gap-2 mt-2 border border-brand">
              <FaDownload /> Download Pricelist
            </a>
          </div>
        </div>
      </div>



      {/* Cart Sidebar Component */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;
