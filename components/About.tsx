import React from 'react';

const About: React.FC = () => {
  return (
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-teko font-bold text-white mb-4 uppercase">The Viper Vapes Ethos</h2>
          <div className="w-24 h-1 bg-viper-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 mb-4 leading-relaxed">
            Born from a passion for perfection, Viper Vapes was founded on the principle that every vaper deserves a premium, reliable, and flavorful experience. We meticulously source the finest materials and ingredients to craft devices and e-liquids that stand apart from the rest.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Our commitment is to innovation, quality, and our community. We're not just a shop; we're a destination for enthusiasts who demand the best. Join us and discover the Viper difference.
          </p>
        </div>
      </div>
  );
};

export default About;
