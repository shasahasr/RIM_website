import React from 'react';

export default function Header({ theme, toggleTheme, menuOpen, setMenuOpen, activeSection, isScrolled }) {
  return (
    <header className={`w-full fixed top-0 left-0 z-fixed bg-body-light dark:bg-body-dark transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''}`} id="header">
      <nav className="max-w-5xl h-12 md:h-[4.5rem] flex justify-between items-center w-[calc(100%-2rem)] mx-auto">
        <a href="#" className="text-title-light dark:text-title-dark font-medium hover:text-primary transition-colors">XYLO</a>

        <div className={`fixed top-[-100%] left-0 w-full pt-6 pb-4 text-center bg-body-light dark:bg-body-dark transition-all duration-400 shadow-md rounded-b-2xl z-fixed md:static md:top-0 md:w-auto md:p-0 md:bg-transparent md:shadow-none md:flex ${menuOpen ? 'top-[3rem]' : ''}`} id="nav-menu">
          <ul className="md:flex md:items-center">
            <li className="mb-4 md:mb-0 md:ml-10">
              <a href="#home" className={`text-title-light dark:text-title-dark font-medium hover:text-primary transition-colors ${activeSection === 'home' ? 'text-primary' : ''}`} onClick={() => setMenuOpen(false)}>Home</a>
            </li>
            <li className="mb-4 md:mb-0 md:ml-10">
              <a href="#about" className={`text-title-light dark:text-title-dark font-medium hover:text-primary transition-colors ${activeSection === 'about' ? 'text-primary' : ''}`} onClick={() => setMenuOpen(false)}>About</a>
            </li>
            <li className="mb-4 md:mb-0 md:ml-10">
              <a href="#services" className={`text-title-light dark:text-title-dark font-medium hover:text-primary transition-colors ${activeSection === 'services' ? 'text-primary' : ''}`} onClick={() => setMenuOpen(false)}>Services</a>
            </li>
            <li className="mb-4 md:mb-0 md:ml-10">
              <a href="#clients" className={`text-title-light dark:text-title-dark font-medium hover:text-primary transition-colors ${activeSection === 'clients' ? 'text-primary' : ''}`} onClick={() => setMenuOpen(false)}>Clients</a>
            </li>
            <li className="mb-4 md:mb-0 md:ml-10">
              <a href="#contact" className={`text-title-light dark:text-title-dark font-medium hover:text-primary transition-colors ${activeSection === 'contact' ? 'text-primary' : ''}`} onClick={() => setMenuOpen(false)}>Contact Us</a>
            </li>

            <li className="md:ml-4">
              <i className={`bx ${theme === 'dark' ? 'bx-sun' : 'bx-moon'} text-xl cursor-pointer text-title-light dark:text-title-dark hover:text-primary transition-colors absolute right-4 top-7 md:static`} id="theme-button" onClick={toggleTheme}></i>
            </li>
          </ul>
        </div>

        <div className="text-xl cursor-pointer text-title-light dark:text-title-dark md:hidden" id="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <i className="bx bx-menu"></i>
        </div>
      </nav>
    </header>
  );
}
