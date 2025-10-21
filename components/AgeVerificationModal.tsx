import React from 'react';

interface AgeVerificationModalProps {
  isOpen: boolean;
  onVerify: () => void;
}

const AgeVerificationModal: React.FC<AgeVerificationModalProps> = ({ isOpen, onVerify }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div className="bg-viper-dark border border-viper-cyan/30 rounded-lg shadow-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-4xl font-teko text-viper-cyan mb-2 uppercase" style={{ textShadow: '0 0 5px var(--primary-color)'}}>Welcome to Viper Vapes</h1>
        <p className="text-gray-300 mb-6 font-poppins">Please confirm you are of legal smoking age in your jurisdiction to enter.</p>
        <div className="space-y-4 font-poppins">
          <button
            onClick={onVerify}
            className="w-full bg-viper-cyan text-viper-dark font-bold py-3 px-6 rounded-lg text-lg transition-all duration-300 hover:brightness-110 transform hover:-translate-y-1"
            style={{boxShadow: '0 0 15px var(--primary-color)'}}
          >
            I Am of Legal Age
          </button>
          <a
            href="https://www.google.com"
            className="w-full block bg-transparent border border-gray-600 text-gray-400 py-3 px-6 rounded-lg transition-colors duration-300 hover:bg-gray-800 hover:text-white"
          >
            Exit
          </a>
        </div>
        <p className="text-xs text-gray-500 mt-6 font-poppins">
          This website contains products intended for adult smokers. By entering this site, you are certifying that you are of legal smoking age.
        </p>
      </div>
    </div>
  );
};

export default AgeVerificationModal;
