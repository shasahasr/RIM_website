import React from 'react';

export default function ScrollTop({ showScrollTop }) {
  return (
    <a href="#" className={`fixed right-4 bottom-[-20%] flex justify-center items-center p-1 bg-primary/50 rounded-md z-tooltip transition-all duration-400 hover:bg-primary-alt invisible ${showScrollTop ? 'visible bottom-6' : ''}`} id="scroll-top" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }}>
      <i className="bx bx-chevron-up text-2xl text-white"></i>
    </a>
  );
}
