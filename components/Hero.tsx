import React from 'react';
import { ViperLogo } from './icons';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-viper-dark">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-viper-dark"></div>
      
      <div className="relative z-10 p-6 flex flex-col items-center animate-slide-in-up">
        <video 
  className="w-full max-w-4xl mb-6 rounded-lg shadow-lg" 
  src="/FinalAd.mp4" 
  controls
  playsInline
>
  Your browser does not support the video tag.
</video>
        <h1 className="text-5xl md:text-7xl font-teko font-black uppercase tracking-wider text-shadow-gold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-viper-gold-dark to-viper-gold">
            Unleash The
          </span>
          <span className="text-white"> Flavor</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mt-4 mb-8">
          Experience the pinnacle of vaping with our premium selection of devices, e-liquids, and accessories.
        </p>
        <a
          href="#/menu"
          className="bg-viper-gold text-viper-dark font-bold text-xl py-4 px-10 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:shadow-viper-gold/30 glow-gold-hover"
        >
          Explore The Menu
        </a>
      </div>
      <style>{`
        .bg-grid-pattern {
          background-image: linear-gradient(rgba(255, 215, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 215, 0, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .text-shadow-gold {
          text-shadow: 0 0 15px rgba(255, 215, 0, 0.3);
        }
      `}</style>
    </section>
  );
};

export default Hero;
