import React, { useEffect } from 'react';
import { Element } from 'react-scroll';

import Hero from './components/Hero';
import SectionTwo from './components/SectionTwo';
import OpeningHours from './components/OpeningHours';
import Style from './components/Style';
import ThreeColumnLayout from './components/ThreeColumnLayout';
import TeamOne from './components/TeamOne';
import TeamTwo from './components/TeamTwo';
import TeamThree from './components/TeamThree';
import Pricing from './components/Pricing';
import InstagramPosts from './components/InstagramPosts';
import Contact from './components/Contact';
import Footer from './components/Footer';


const App = () => {

   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <Element name="about">
        <SectionTwo />
        <OpeningHours />
        <Style />
        <ThreeColumnLayout />
        <TeamOne />
        <TeamTwo />
        <TeamThree />
      </Element>

      <Element name="pricing">
        <Pricing />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>

      <Footer />
     
    </>
  );
};

export default App;
