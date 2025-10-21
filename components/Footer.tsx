import React from 'react';
import { ViperLogo, TwitterIcon, InstagramIcon, FacebookIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer id="contact-footer" className="bg-viper-dark border-t border-viper-gold/20 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Column 1: Logo & Socials */}
          <div>
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <ViperLogo className="h-10 w-10 text-viper-gold" />
              <span className="text-2xl font-teko font-bold text-white uppercase tracking-widest">VIPER VAPES</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              The apex of premium vaping.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-400 hover:text-viper-gold transition-colors"><TwitterIcon className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-viper-gold transition-colors"><InstagramIcon className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-viper-gold transition-colors"><FacebookIcon className="h-6 w-6" /></a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-bold text-white text-lg mb-4 tracking-wider uppercase">Quick Links</h3>
            <ul>
              <li className="mb-2"><a href="#/" className="text-gray-400 hover:text-viper-gold transition-colors">Home</a></li>
              <li className="mb-2"><a href="#/menu" className="text-gray-400 hover:text-viper-gold transition-colors">Menu</a></li>
              <li className="mb-2"><a href="#/deals" className="text-gray-400 hover:text-viper-gold transition-colors">Deals</a></li>
              <li className="mb-2"><a href="#/about" className="text-gray-400 hover:text-viper-gold transition-colors">About Us</a></li>
              <li className="mb-2"><a href="#/contact" className="text-gray-400 hover:text-viper-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
             <h3 className="font-bold text-white text-lg mb-4 tracking-wider uppercase">Contact Us</h3>
             <ul className="text-gray-400">
                <li className="mb-2">123 Venom Road, Serpent City</li>
                <li className="mb-2">Email: support@vipervapes.shop</li>
                <li className="mb-2">Phone: (555) 123-4567</li>
             </ul>
          </div>
        </div>

        <div className="text-center text-gray-500 border-t border-gray-800 mt-12 pt-6 text-sm">
          &copy; {new Date().getFullYear()} vipervapes.shop. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
