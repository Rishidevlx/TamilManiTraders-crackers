import React from 'react';
import SEO from '../components/seo/SEO';
import Hero from '../components/home/Hero';
import Categories from '../components/home/Categories';
import FeaturedProducts from '../components/home/FeaturedProducts';
import HomeMarquee from '../components/home/HomeMarquee';
import HomeAbout from '../components/home/HomeAbout';
import WhyChooseUs from '../components/home/WhyChooseUs';

const Home = () => {
  return (
    <main className="home-page font-body">
      <SEO 
        title="Sivakasi Crackers | Tamilmani Traders - Buy Fireworks Online"
        description="Buy premium quality Sivakasi crackers online at genuine wholesale prices from Tamil Mani Traders. Get safe delivery, exclusive combo offers, and eco-friendly green crackers."
        keywords="sivakasi crackers, buy crackers online, best crackers shop in sivakasi, tamil mani traders, wholesale crackers, diwali firecrackers"
        url="https://tamilmanitraders.in/"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Tamil Mani Traders",
          "description": "Premium quality Sivakasi crackers shop offering wholesale prices and online delivery.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "S.No. 456/2C1B, D.No. 2/266, ALANGULAM",
            "addressLocality": "Vembakottai (Tk), Virudhunagar (Dt)",
            "addressRegion": "Tamil Nadu",
            "postalCode": "626131",
            "addressCountry": "IN"
          },
          "telephone": "+919994703605",
          "url": "https://tamilmanitraders.in",
          "areaServed": [
            "Sivakasi",
            "Tamil Nadu",
            "South India",
            "North India",
            "All Over India"
          ]
        }}
      />
      <Hero />
      <Categories />
      <WhyChooseUs />
      <FeaturedProducts />
      <HomeMarquee />
      <HomeAbout />
    </main>
  );
};

export default Home;
