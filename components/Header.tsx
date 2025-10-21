import React, { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Home', href: '#/' },
  { name: 'Menu', href: '#/menu' },
  { name: 'Deals', href: '#/deals' },
  { name: 'About', href: '#/about' },
  { name: 'Contact', href: '#/contact' },
];

interface NavLinksProps {
  className?: string;
  onLinkClick: () => void;
}

const NavLinksComponent: React.FC<NavLinksProps> = ({ className, onLinkClick }) => (
   <>
      {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={onLinkClick}
            className={className}
          >
            {link.name}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-viper-gold transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
  </>
)

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-viper-dark/80 backdrop-blur-lg border-b border-viper-gold/20' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#/" className="flex items-center space-x-2 z-50">
          <img src="/ViperLogo.png" alt="Viper Vapes Logo" className="h-10 w-10 object-contain" />
          <span className="text-2xl font-teko font-bold text-white tracking-widest uppercase">Viper Vapes</span>
        </a>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
            <NavLinksComponent onLinkClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-viper-gold font-semibold transition-colors duration-300 tracking-wider relative group text-lg" />
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden z-50">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden absolute top-0 left-0 w-full h-screen bg-viper-dark flex flex-col items-center justify-center space-y-8">
           <NavLinksComponent onLinkClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-viper-gold font-semibold transition-colors duration-300 tracking-wider relative group text-3xl font-teko" />
        </nav>
      )}
    </header>
  );
};

export default Header;
