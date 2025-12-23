import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
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
    <section className="section bd-container" id="contact">
      <Reveal>
        <div className="text-center mb-20">
          <span className="section-subtitle mb-6">Get in touch</span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl text-title-light dark:text-title-dark font-light tracking-tight leading-tight mb-8">
            Contact Us
          </h2>
          <p className="text-text-light dark:text-text-dark text-xl leading-relaxed max-w-2xl mx-auto">
            If you would like us to work on your inventory, send us a message!
          </p>
        </div>
      </Reveal>
      <Reveal delay={0.2} direction="up">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form id="contact-form" ref={formRef} onSubmit={sendEmail} className="grid gap-8 bg-container-light dark:bg-container-dark p-10 md:p-16 rounded-3xl">
            {/* Name */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <label htmlFor="name" className="block text-left font-medium text-title-light dark:text-title-dark mb-3 text-base">Name</label>
              <motion.input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Your Full Name" 
                required 
                className="w-full p-5 rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-body-light dark:bg-body-dark text-text-light dark:text-text-dark font-body text-lg outline-none transition-all duration-300 focus:border-primary focus:ring-0 hover:border-gray-300 dark:hover:border-gray-600"
                whileFocus={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400 }}
              />
            </motion.div>

            {/* Business Name */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <label htmlFor="bname" className="block text-left font-medium text-title-light dark:text-title-dark mb-3 text-base">Business</label>
              <motion.input 
                type="text" 
                id="bname" 
                name="business_name" 
                placeholder="Your Business's Name" 
                required 
                className="w-full p-5 rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-body-light dark:bg-body-dark text-text-light dark:text-text-dark font-body text-lg outline-none transition-all duration-300 focus:border-primary focus:ring-0 hover:border-gray-300 dark:hover:border-gray-600"
                whileFocus={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400 }}
              />
            </motion.div>

            {/* State */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <label htmlFor="state" className="block text-left font-medium text-title-light dark:text-title-dark mb-3 text-base">State</label>
              <motion.select 
                id="state" 
                name="state" 
                required 
                className="w-full p-5 rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-body-light dark:bg-body-dark text-text-light dark:text-text-dark font-body text-lg outline-none transition-all duration-300 focus:border-primary focus:ring-0 hover:border-gray-300 dark:hover:border-gray-600 cursor-pointer"
                whileFocus={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {STATES.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </motion.select>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <label htmlFor="email" className="block text-left font-medium text-title-light dark:text-title-dark mb-3 text-base">Email</label>
              <motion.input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="example@example.com" 
                required 
                className="w-full p-5 rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-body-light dark:bg-body-dark text-text-light dark:text-text-dark font-body text-lg outline-none transition-all duration-300 focus:border-primary focus:ring-0 hover:border-gray-300 dark:hover:border-gray-600"
                whileFocus={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400 }}
              />
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <label htmlFor="message" className="block text-left font-medium text-title-light dark:text-title-dark mb-3 text-base">Message</label>
              <motion.textarea 
                id="message" 
                name="message" 
                placeholder="Write your message here..." 
                required 
                className="w-full p-5 rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-body-light dark:bg-body-dark text-text-light dark:text-text-dark font-body text-lg outline-none transition-all duration-300 focus:border-primary focus:ring-0 hover:border-gray-300 dark:hover:border-gray-600 min-h-[160px] resize-y"
                whileFocus={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400 }}
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div 
              className="justify-self-start mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <motion.button 
                type="submit" 
                className="button text-lg px-10 py-5"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Submit
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </Reveal>
    </section>
  );
}
