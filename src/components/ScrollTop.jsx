import React from 'react';
import { IconChevronUp } from './icons/index';

export default function ScrollTop({ showScrollTop }) {
  return (
    <a
      href="#"
      className={`fixed right-4 bottom-[-20%] flex justify-center items-center p-1 bg-primary/50 rounded-md z-tooltip transition-all duration-400 hover:bg-primary-alt invisible ${showScrollTop ? 'visible bottom-6' : ''}`}
      id="scroll-top"
      onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
      aria-label="Scroll to top"
    >
      <IconChevronUp className="w-6 h-6 text-white" />
    </a>
  );
}
