import React from 'react';

export default function Header({ theme, toggleTheme, menuOpen, setMenuOpen, activeSection, isScrolled }) {
  const navLinks = ['about', 'services', 'clients', 'contact'];

  return (
    <header 
      className={`w-full fixed top-0 left-0 z-[100] bg-body-light dark:bg-body-dark ${isScrolled ? 'border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm' : ''}`} 
      id="header"
      style={{
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        willChange: 'transform'
      }}
    >
      <nav className="max-w-7xl h-14 md:h-16 lg:h-20 flex justify-between items-center w-[calc(100%-4rem)] mx-auto">
        {/* Logo */}
        <a 
          href="#home" 
          className="flex items-center hover:opacity-80 transition-opacity"
        >
          <img 
            src="/assets/img/xylo-logo.png" 
            alt="Xylo logo" 
            className="h-[68px] md:h-[95px] lg:h-[122px] w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((section) => (
            <a 
              key={section}
              href={`#${section}`} 
              className={`text-title-light dark:text-title-dark font-normal hover:text-primary transition-colors text-base capitalize ${activeSection === section ? 'text-primary' : ''}`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
          
          <button
            className="flex items-center justify-center w-10 h-10 text-2xl cursor-pointer text-title-light dark:text-title-dark hover:text-primary transition-colors"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <i className={`bx ${theme === 'dark' ? 'bx-sun' : 'bx-moon'}`} />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="text-2xl cursor-pointer text-title-light dark:text-title-dark md:hidden flex items-center justify-center w-10 h-10" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <i className={`bx ${menuOpen ? 'bx-x' : 'bx-menu'}`} />
        </button>

        {/* Mobile Navigation */}
        <div 
          className={`fixed left-0 w-full pt-8 pb-6 text-center bg-body-light dark:bg-body-dark transition-all duration-500 rounded-b-3xl shadow-lg md:hidden ${menuOpen ? 'top-[3.5rem] opacity-100 pointer-events-auto' : 'top-[-100%] opacity-0 pointer-events-none'}`}
          style={{
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            zIndex: 90
          }}
        >
          {/* Mobile menu logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src="/assets/img/xylo-logo.png" 
              alt="Xylo logo" 
              className="h-12 w-auto"
            />
          </div>
          
          <ul className="space-y-6">
            {navLinks.map((section) => (
              <li key={section}>
                <a 
                  href={`#${section}`} 
                  className={`text-title-light dark:text-title-dark font-normal hover:text-primary transition-colors text-base capitalize ${activeSection === section ? 'text-primary' : ''}`} 
                  onClick={() => setMenuOpen(false)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
            
            <li className="flex items-center justify-center pt-4">
              <button
                className="flex items-center justify-center w-10 h-10 text-2xl cursor-pointer text-title-light dark:text-title-dark hover:text-primary transition-colors"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                <i className={`bx ${theme === 'dark' ? 'bx-sun' : 'bx-moon'}`} />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
