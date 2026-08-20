import React from 'react';
import Hero from '../components/home/Hero';
import Categories from '../components/home/Categories';
import FeaturedProducts from '../components/home/FeaturedProducts';
import HomeMarquee from '../components/home/HomeMarquee';
import HomeAbout from '../components/home/HomeAbout';
import WhyChooseUs from '../components/home/WhyChooseUs';

const Home = () => {
  return (
    <main className="home-page font-body">
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
