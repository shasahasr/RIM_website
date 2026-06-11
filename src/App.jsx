import React, { lazy, Suspense, useState } from 'react';
import { useTheme } from './hooks/useTheme';
import { useScrollActive } from './hooks/useScrollActive';

import Header from './components/Header';
import Home from './components/Home';
import ScrollTop from './components/ScrollTop';
import Popup from './components/Popup';

const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Clients = lazy(() => import('./components/Clients'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const AssignFlavor = lazy(() => import('./components/AssignFlavor'));

function MarketingSite() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [popupVariant, setPopupVariant] = useState('success');
  const { activeSection, isScrolled, showScrollTop } = useScrollActive();

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm"
      >
        Skip to main content
      </a>
      <ScrollTop showScrollTop={showScrollTop} />
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        activeSection={activeSection}
        isScrolled={isScrolled}
      />
      <main className="l-main" id="main-content">
        <Home />
        <Suspense fallback={<div className="min-h-[50vh]" />}>
          <About />
          <Services />
          <Clients />
          <Contact
            setPopupMessage={setPopupMessage}
            setShowPopup={setShowPopup}
            setPopupVariant={setPopupVariant}
          />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <Popup
        showPopup={showPopup}
        popupMessage={popupMessage}
        setShowPopup={setShowPopup}
        variant={popupVariant}
      />
    </>
  );
}

function App() {
  const isAssignPage =
    typeof window !== 'undefined' && window.location.pathname === '/assign';

  if (isAssignPage) {
    return (
      <Suspense fallback={<div className="min-h-screen bg-body-light dark:bg-body-dark" />}>
        <AssignFlavor />
      </Suspense>
    );
  }

  return <MarketingSite />;
}

export default App;
