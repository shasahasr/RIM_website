import React from 'react';

export default function Footer() {
  return (
    <footer className="section bd-container border-t border-gray-200/30 dark:border-gray-800/30 pt-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
        <div className="text-center md:text-left">
          <a href="#home" className="block mb-4">
            <img 
              src="/assets/img/xylo-logo.png" 
              alt="Xylo logo" 
              className="h-10 md:h-12 lg:h-14 w-auto mx-auto md:mx-0"
            />
          </a>
          <span className="block text-base mb-8 text-text-light dark:text-text-dark">Inventory Simplified.</span>
          <div className="flex items-center justify-center md:justify-start gap-6">
            <a href="https://www.facebook.com/profile.php?id=61558002881860" target="_blank" rel="noopener noreferrer" className="text-2xl text-title-light dark:text-title-dark hover:text-primary transition-all duration-300 hover:scale-110 inline-block"><i className="bx bxl-facebook"></i></a>
            <a href="https://www.instagram.com/buyxylo/" target="_blank" rel="noopener noreferrer" className="text-2xl text-title-light dark:text-title-dark hover:text-primary transition-all duration-300 hover:scale-110 inline-block"><i className="bx bxl-instagram"></i></a>
          </div>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-lg text-title-light dark:text-title-dark mb-8 font-normal">Quick Links</h3>
          <ul className="space-y-4">
            <li><a href="#home" className="inline-block text-text-light dark:text-text-dark hover:text-primary transition-colors">Home</a></li>
            <li><a href="#about" className="inline-block text-text-light dark:text-text-dark hover:text-primary transition-colors">About</a></li>
            <li><a href="#services" className="inline-block text-text-light dark:text-text-dark hover:text-primary transition-colors">Services</a></li>
            <li><a href="#clients" className="inline-block text-text-light dark:text-text-dark hover:text-primary transition-colors">Clients</a></li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-lg text-title-light dark:text-title-dark mb-8 font-normal">Support</h3>
          <ul className="space-y-4">
            <li><a href="#contact" className="inline-block text-text-light dark:text-text-dark hover:text-primary transition-colors">Contact Us</a></li>
            <li><a href="#" className="inline-block text-text-light dark:text-text-dark hover:text-primary transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="inline-block text-text-light dark:text-text-dark hover:text-primary transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <p className="text-center text-sm text-text-lighter mt-20 pt-8 border-t border-gray-200/30 dark:border-gray-800/30">&#169; 2025 Xylo. All rights reserved</p>
    </footer>
  );
}
