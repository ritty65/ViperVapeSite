import React, { useState, useEffect } from 'react';
import AgeVerificationModal from './components/AgeVerificationModal';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import DealsPage from './pages/DealsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// Define routes as a map for cleaner, more scalable routing logic
const routes: { [key: string]: React.ReactElement } = {
  '#/': <HomePage />,
  '#/menu': <MenuPage />,
  '#/deals': <DealsPage />,
  '#/about': <AboutPage />,
  '#/contact': <ContactPage />,
};

const App: React.FC = () => {
  const [isAgeVerified, setIsAgeVerified] = useState<boolean>(false);
  const [showApp, setShowApp] = useState<boolean>(false);
  
  // Helper to get the current route from the URL hash
  const getRoute = () => window.location.hash || '#/';
  
  const [route, setRoute] = useState<string>(getRoute());

  useEffect(() => {
    const ageVerified = sessionStorage.getItem('ageVerified') === 'true';
    if (ageVerified) {
      setIsAgeVerified(true);
      setShowApp(true);
    }
    
    const handleHashChange = () => {
      setRoute(getRoute());
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleAgeVerification = () => {
    sessionStorage.setItem('ageVerified', 'true');
    setIsAgeVerified(true);
    setTimeout(() => setShowApp(true), 100); 
  };
  
  // Determine the current page using the routes map, with a fallback to the home page
  const currentPage = routes[route] || routes['#/'];

  return (
    <>
      <AgeVerificationModal isOpen={!isAgeVerified} onVerify={handleAgeVerification} />
      
      {showApp && (
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {currentPage}
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;