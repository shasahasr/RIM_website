import React from 'react';

export default function Footer() {
  return (
    <footer className="section bd-container">
      <div className="bd-grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-y-8">
        <div className="text-center md:text-left">
          <a href="#" className="text-xl text-primary font-semibold">Xylo</a>
          <span className="block text-sm my-1 mb-6 text-text-light dark:text-text-dark">Inventory Simplified.</span>
          <div>
            <a href="https://www.facebook.com/profile.php?id=61558002881860" className="text-2xl text-title-light dark:text-title-dark mr-4 hover:text-primary transition-colors"><i className="bx bxl-facebook"></i></a>
            <a href="https://www.instagram.com/buyxylo/" className="text-2xl text-title-light dark:text-title-dark hover:text-primary transition-colors"><i className="bx bxl-instagram"></i></a>
          </div>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-xl text-title-light dark:text-title-dark mb-4 font-medium">Quick Links</h3>
          <ul>
            <li><a href="#home" className="inline-block text-text-light dark:text-text-dark mb-2 hover:text-primary transition-colors">Home</a></li>
            <li><a href="#about" className="inline-block text-text-light dark:text-text-dark mb-2 hover:text-primary transition-colors">About</a></li>
            <li><a href="#services" className="inline-block text-text-light dark:text-text-dark mb-2 hover:text-primary transition-colors">Services</a></li>
            <li><a href="#clients" className="inline-block text-text-light dark:text-text-dark mb-2 hover:text-primary transition-colors">Clients</a></li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-xl text-title-light dark:text-title-dark mb-4 font-medium">Support</h3>
          <ul>
            <li><a href="#contact" className="inline-block text-text-light dark:text-text-dark mb-2 hover:text-primary transition-colors">Contact Us</a></li>
            <li><a href="#" className="inline-block text-text-light dark:text-text-dark mb-2 hover:text-primary transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="inline-block text-text-light dark:text-text-dark mb-2 hover:text-primary transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <p className="text-center text-sm text-text-lighter mt-14">&#169; 2025 Xylo. All rights reserved</p>
    </footer>
  );
}
