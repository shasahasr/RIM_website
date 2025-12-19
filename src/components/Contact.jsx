import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG, STATES } from '../utils/constants';
import Reveal from './Reveal';

export default function Contact({ setPopupMessage, setShowPopup }) {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    const originalText = btn.textContent;
    btn.textContent = 'Sending...';
    btn.disabled = true;

    emailjs.sendForm(
      EMAILJS_CONFIG.serviceID,
      EMAILJS_CONFIG.templateID,
      formRef.current,
      EMAILJS_CONFIG.publicKey
    )
    .then(() => {
      setPopupMessage('Message sent successfully!');
      setShowPopup(true);
      e.target.reset();
    }, (error) => {
      setPopupMessage('Failed to send message. Please try again later.');
      setShowPopup(true);
      console.error(error);
    })
    .finally(() => {
      btn.textContent = originalText;
      btn.disabled = false;
    });
  };

  return (
    <section className="section bd-container mt-5" id="contact">
      <Reveal>
        <div className="bd-grid text-center">
          <div className="mb-6">
            <span className="section-subtitle">Let's talk</span>
            <h2 className="section-title">Contact Us</h2>
            <p className="mb-6 text-text-light dark:text-text-dark">
              If you would like us to work on your inventory, send us a message!
            </p>
          </div>
        </div>
      </Reveal>
      <Reveal delay={0.2}>
        <div className="max-w-2xl mx-auto">
          <form id="contact-form" ref={formRef} onSubmit={sendEmail} className="grid gap-6 bg-container-light dark:bg-container-dark p-10 rounded-3xl shadow-soft dark:shadow-soft-dark">
            {/* Name */}
            <div>
            <label htmlFor="name" className="block text-left font-medium text-title-light dark:text-title-dark mb-2 text-sm">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Full Name" required className="w-full p-4 rounded-xl border border-text-lighter bg-body-light dark:bg-body-dark text-text-light dark:text-text-dark font-body text-base outline-none transition-all duration-300 focus:border-primary focus:ring-4 focus:ring-primary-light" />
          </div>

          {/* Business Name */}
          <div>
            <label htmlFor="bname" className="block text-left font-medium text-title-light dark:text-title-dark mb-2 text-sm">Business</label>
            <input type="text" id="bname" name="business_name" placeholder="Your Business's Name" required className="w-full p-4 rounded-xl border border-text-lighter bg-body-light dark:bg-body-dark text-text-light dark:text-text-dark font-body text-base outline-none transition-all duration-300 focus:border-primary focus:ring-4 focus:ring-primary-light" />
          </div>

          {/* State */}
          <div>
            <label htmlFor="state" className="block text-left font-medium text-title-light dark:text-title-dark mb-2 text-sm">State</label>
            <select id="state" name="state" required className="w-full p-4 rounded-xl border border-text-lighter bg-body-light dark:bg-body-dark text-text-light dark:text-text-dark font-body text-base outline-none transition-all duration-300 focus:border-primary focus:ring-4 focus:ring-primary-light">
              {STATES.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-left font-medium text-title-light dark:text-title-dark mb-2 text-sm">Email</label>
            <input type="email" id="email" name="email" placeholder="example@example.com" required className="w-full p-4 rounded-xl border border-text-lighter bg-body-light dark:bg-body-dark text-text-light dark:text-text-dark font-body text-base outline-none transition-all duration-300 focus:border-primary focus:ring-4 focus:ring-primary-light" />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-left font-medium text-title-light dark:text-title-dark mb-2 text-sm">Message</label>
            <textarea id="message" name="message" placeholder="Write your message here..." required className="w-full p-4 rounded-xl border border-text-lighter bg-body-light dark:bg-body-dark text-text-light dark:text-text-dark font-body text-base outline-none transition-all duration-300 focus:border-primary focus:ring-4 focus:ring-primary-light min-h-[120px] resize-y"></textarea>
          </div>

          {/* Submit Button */}
          <div className="justify-self-center mt-4">
            <button type="submit" className="button">Submit</button>
          </div>
        </form>
      </div>
      </Reveal>
    </section>
  );
}
