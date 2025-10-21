import React from 'react';

const DealsPage: React.FC = () => {
  return (
    <section 
      className="py-20 bg-viper-dark flex items-center justify-center text-center"
      // Set min-height to roughly viewport height minus header/footer
      style={{ minHeight: 'calc(100vh - 180px)' }}
    >
      <div className="container mx-auto px-6">
        <h1 
          className="text-6xl md:text-8xl font-teko font-bold text-viper-gold mb-4 uppercase glow-gold animate-slide-in-up"
        >
          Deals
        </h1>
        <div 
            className="w-24 h-1 bg-viper-gold mx-auto mb-8 animate-slide-in-up"
            style={{ animationDelay: '0.2s' }}
        ></div>
        <p 
            className="text-3xl md:text-5xl font-teko text-gray-200 animate-slide-in-up"
            style={{ animationDelay: '0.4s' }}
        >
          Coming Soon
        </p>
         <p 
            className="text-lg text-gray-400 mt-4 max-w-xl mx-auto animate-slide-in-up"
            style={{ animationDelay: '0.6s' }}
        >
            Get ready for exclusive offers and unbeatable prices. Check back soon for our weekly deals!
        </p>
      </div>
    </section>
  );
};

export default DealsPage;
