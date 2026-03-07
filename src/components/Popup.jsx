import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Popup({ showPopup, popupMessage, setShowPopup, variant = 'success' }) {
  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => setShowPopup(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showPopup, setShowPopup]);

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') setShowPopup(false); };
    if (showPopup) {
      document.addEventListener('keydown', handleEsc);
      return () => document.removeEventListener('keydown', handleEsc);
    }
  }, [showPopup, setShowPopup]);

  const isSuccess = variant === 'success';

  return (
    <AnimatePresence>
      {showPopup && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[150]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPopup(false)}
          />
          <motion.div
            role="alert"
            aria-live="assertive"
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-container-light dark:bg-container-dark p-10 rounded-3xl shadow-hover dark:shadow-hover-dark z-[200] text-center max-w-md w-[calc(100%-2rem)]"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${isSuccess ? 'bg-green-100 dark:bg-green-900/30' : 'bg-red-100 dark:bg-red-900/30'}`}>
              {isSuccess ? (
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </div>
            <p className="mb-8 text-title-light dark:text-title-dark font-medium text-lg">{popupMessage}</p>
            <button
              className="bg-primary text-white py-3 px-8 rounded-xl cursor-pointer transition-all duration-300 hover:bg-primary-alt hover:-translate-y-0.5"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
