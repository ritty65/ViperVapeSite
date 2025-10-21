import React from 'react';
import About from '../components/About';

const AboutPage: React.FC = () => {
  return (
    <section className="relative py-24 bg-viper-gray overflow-hidden">
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-viper-dark to-transparent opacity-50"></div>
      <About />
    </section>
  );
};

export default AboutPage;
