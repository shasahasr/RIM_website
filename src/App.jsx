import React, { useState } from 'react';
import { useTheme } from './hooks/useTheme';
import { useScrollActive } from './hooks/useScrollActive';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';
import Popup from './components/Popup';

function App() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const { activeSection, isScrolled, showScrollTop } = useScrollActive();

  return (
    <>
      <ScrollTop showScrollTop={showScrollTop} />
      <Header 
        theme={theme} 
        toggleTheme={toggleTheme} 
        menuOpen={menuOpen} 
        setMenuOpen={setMenuOpen}
        activeSection={activeSection}
        isScrolled={isScrolled}
      />
      <main className="l-main">
        <Home />
        <About />
        <Services />
        <Clients />
        <Contact 
          setPopupMessage={setPopupMessage} 
          setShowPopup={setShowPopup} 
        />
      </main>
      <Footer />
      <Popup 
        showPopup={showPopup} 
        popupMessage={popupMessage} 
        setShowPopup={setShowPopup} 
      />
    </>
  );
}

export default App;
