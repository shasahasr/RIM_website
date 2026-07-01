import React, { useEffect } from 'react';
import { IconSun, IconMoon, IconMenu, IconClose } from './icons/index';
import Logo from './Logo';

export default function Header({ theme, toggleTheme, menuOpen, setMenuOpen, activeSection, isScrolled }) {
  const navLinks = ['about', 'services', 'clients', 'contact'];

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
    <header
      className={`w-full fixed top-0 left-0 z-[100] transition-all duration-300 ${isScrolled ? 'glass border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm' : 'bg-transparent'}`}
      id="header"
      style={{
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        willChange: 'transform'
      }}
    >
      <nav className="max-w-7xl h-16 md:h-20 flex justify-between items-center w-[calc(100%-4rem)] mx-auto">
        {/* Logo lockup */}
        <a
          href="#home"
          className="flex items-center hover:opacity-80 transition-opacity"
          aria-label="RIM Fixtures home"
        >
          <Logo wordClass="text-xl md:text-2xl" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-9">
          {navLinks.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`relative text-title-light dark:text-title-dark font-normal hover:text-primary transition-colors text-base capitalize after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:rounded-full after:bg-primary after:transition-all after:duration-300 ${activeSection === section ? 'text-primary after:w-full' : 'after:w-0'}`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}

          <button
            className="flex items-center justify-center w-10 h-10 cursor-pointer text-title-light dark:text-title-dark hover:text-primary transition-colors"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <IconSun className="w-6 h-6" /> : <IconMoon className="w-6 h-6" />}
          </button>

          <a
            href="#contact"
            className="button-gradient !py-2.5 !px-6 !text-base !rounded-xl"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="cursor-pointer text-title-light dark:text-title-dark md:hidden flex items-center justify-center w-10 h-10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <IconClose className="w-6 h-6" /> : <IconMenu className="w-6 h-6" />}
        </button>
      </nav>
    </header>

    {/* Mobile backdrop — sibling of header so it is not clipped by the header's paint containment */}
    {menuOpen && (
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[80] md:hidden"
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
    )}

    {/* Mobile Navigation */}
    <div
      className={`fixed left-0 w-full pt-8 pb-6 text-center bg-body-light dark:bg-body-dark transition-all duration-500 rounded-b-3xl shadow-lg md:hidden z-[90] ${menuOpen ? 'top-16 opacity-100 pointer-events-auto' : 'top-[-100%] opacity-0 pointer-events-none'}`}
    >
          {/* Mobile menu logo */}
          <div className="mb-8 flex justify-center">
            <Logo wordClass="text-2xl" />
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
                className="flex items-center justify-center w-10 h-10 cursor-pointer text-title-light dark:text-title-dark hover:text-primary transition-colors"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <IconSun className="w-6 h-6" /> : <IconMoon className="w-6 h-6" />}
              </button>
            </li>
          </ul>
    </div>
    </>
  );
}
