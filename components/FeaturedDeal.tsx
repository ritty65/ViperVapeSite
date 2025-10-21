import React, { useState, useEffect } from 'react';

const FeaturedDeal: React.FC = () => {
  const calculateTimeLeft = () => {
    // Set a future date for the countdown
    const year = new Date().getFullYear();
    const difference = +new Date(`12/31/${year}`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = Object.entries(timeLeft).map(([interval, value]) => (
    <div key={interval} className="text-center bg-viper-dark/30 p-2 rounded-lg w-20">
      <div className="text-4xl font-teko bg-clip-text text-transparent bg-gradient-to-b from-viper-gold to-viper-gold-dark">
        {String(value as number).padStart(2, '0')}
      </div>
      <div className="text-xs uppercase text-gray-400">{interval}</div>
    </div>
  ));

  return (
    <div className="container mx-auto px-6">
        <div className="bg-viper-gray rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 border-2 border-viper-gold/30 shadow-2xl shadow-viper-gold/5">
          <div className="md:w-1/2">
            {/* Placeholder for an actual product image */}
            <img 
              src="https://images.unsplash.com/photo-1614821516789-3d231a4a4b13?q=80&w=2070&auto=format&fit=crop" 
              alt="Viper X Pro Kit Deal" 
              className="rounded-lg shadow-lg w-full aspect-video object-cover"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <span className="text-viper-gold font-bold tracking-widest">DEAL OF THE WEEK</span>
            <h2 className="text-4xl lg:text-5xl font-teko font-bold text-white my-4">Viper X Pro Kit</h2>
            <p className="text-gray-400 mb-6">
              Get the ultimate vaping powerhouse at an unbeatable price. Includes the Viper X mod, Serpent Tank, and two mesh coils. Limited time offer!
            </p>
            <div className="flex justify-center md:justify-start gap-4 mb-8">
              {timerComponents.length ? timerComponents : <span>Deal has ended!</span>}
            </div>
            <a href="#/menu" className="bg-viper-gold text-viper-dark font-bold text-lg py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 glow-gold-hover">
              Claim Deal Now
            </a>
          </div>
        </div>
      </div>
  );
};

export default FeaturedDeal;
