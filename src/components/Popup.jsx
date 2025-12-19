import React from 'react';

export default function Popup({ showPopup, popupMessage, setShowPopup }) {
  if (!showPopup) return null;
  
  return (
    <div id="popup-message" className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-container-light dark:bg-container-dark p-8 rounded-2xl shadow-hover dark:shadow-hover-dark z-fixed text-center border border-primary-light">
      <p id="popup-text" className="mb-6 text-title-light dark:text-title-dark font-medium">{popupMessage}</p>
      <button id="popup-close" className="bg-primary text-white py-2 px-6 rounded-lg cursor-pointer transition-colors hover:bg-primary-alt" onClick={() => setShowPopup(false)}>Close</button>
    </div>
  );
}
