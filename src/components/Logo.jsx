import React from 'react';

/**
 * Brand lockup: the gradient "X" mark paired with the RIM Fixtures wordmark.
 * The wordmark is what actually communicates the company name — the mark alone
 * (a holdover glyph) does not.
 */
export default function Logo({ className = '', markClass = 'h-9 w-9 md:h-10 md:w-10', wordClass = '', showTagline = false }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <img
        src="/assets/img/rimfixtures-logo.png"
        alt=""
        aria-hidden="true"
        className={`${markClass} object-contain shrink-0`}
      />
      <span className="flex flex-col leading-none">
        <span className={`font-semibold tracking-tight text-title-light dark:text-title-dark ${wordClass}`}>
          RIM <span className="text-gradient">Fixtures</span>
        </span>
        {showTagline && (
          <span className="text-[0.65rem] uppercase tracking-[0.22em] text-text-lighter mt-1">
            Inventory Simplified
          </span>
        )}
      </span>
    </span>
  );
}
