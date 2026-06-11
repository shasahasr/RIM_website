import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG, STATES } from '../utils/constants';
import Reveal from './Reveal';

function sanitizeInput(str) {
  return str.replace(/[<>]/g, '').trim();
}

export default function Contact({ setPopupMessage, setShowPopup, setPopupVariant }) {
  const formRef = useRef();
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = (name, value) => {
    switch (name) {
      case 'name':
        return value.trim().length < 2 ? 'Name must be at least 2 characters' : '';
      case 'business_name':
        return value.trim().length < 2 ? 'Business name is required' : '';
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Please enter a valid email';
      case 'message':
        return value.trim().length < 10 ? 'Message must be at least 10 characters' : '';
      default:
        return '';
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validate(name, value) }));
  };

  const getInputBorderClass = (fieldName) => {
    if (touched[fieldName] && errors[fieldName]) {
      return 'border-red-400 dark:border-red-500';
    }
    if (touched[fieldName] && !errors[fieldName]) {
      return 'border-green-400 dark:border-green-500';
    }
    return 'border-gray-200 dark:border-gray-700';
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const name = sanitizeInput(formData.get('name'));
    const businessName = sanitizeInput(formData.get('business_name'));
    const message = sanitizeInput(formData.get('message'));

    if (name.length > 100 || businessName.length > 200 || message.length > 2000) {
      setPopupMessage('Input too long. Please shorten your input.');
      setPopupVariant('error');
      setShowPopup(true);
      return;
    }

    // Validate all fields
    const fields = { name, business_name: businessName, email: formData.get('email'), message };
    const newErrors = {};
    let hasError = false;
    for (const [key, val] of Object.entries(fields)) {
      const err = validate(key, val);
      if (err) {
        newErrors[key] = err;
        hasError = true;
      }
    }
    if (hasError) {
      setErrors(newErrors);
      setTouched({ name: true, business_name: true, email: true, message: true });
      return;
    }

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
      setPopupVariant('success');
      setShowPopup(true);
      e.target.reset();
      setErrors({});
      setTouched({});
    }, (error) => {
      setPopupMessage('Failed to send message. Please try again later.');
      setPopupVariant('error');
      setShowPopup(true);
      console.error(error);
    })
    .finally(() => {
      btn.textContent = originalText;
      btn.disabled = false;
    });
  };

  const inputBaseClass = "w-full p-5 rounded-2xl border-2 bg-body-light dark:bg-body-dark text-text-light dark:text-text-dark font-body text-lg outline-none transition-all duration-300 focus:border-primary focus:ring-0 hover:border-gray-300 dark:hover:border-gray-600";

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
          <form id="contact-form" ref={formRef} onSubmit={sendEmail} noValidate className="grid gap-8 bg-container-light dark:bg-container-dark p-10 md:p-16 rounded-3xl">
            <input type="hidden" name="brand_name" value="RIM Fixtures" />
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
                className={`${inputBaseClass} ${getInputBorderClass('name')}`}
                whileFocus={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400 }}
                onBlur={handleBlur}
              />
              {touched.name && errors.name && (
                <p className="text-red-500 text-sm mt-2">{errors.name}</p>
              )}
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
                className={`${inputBaseClass} ${getInputBorderClass('business_name')}`}
                whileFocus={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400 }}
                onBlur={handleBlur}
              />
              {touched.business_name && errors.business_name && (
                <p className="text-red-500 text-sm mt-2">{errors.business_name}</p>
              )}
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
                className={`${inputBaseClass} cursor-pointer border-gray-200 dark:border-gray-700`}
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
                className={`${inputBaseClass} ${getInputBorderClass('email')}`}
                whileFocus={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400 }}
                onBlur={handleBlur}
              />
              {touched.email && errors.email && (
                <p className="text-red-500 text-sm mt-2">{errors.email}</p>
              )}
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
                className={`${inputBaseClass} min-h-[160px] resize-y ${getInputBorderClass('message')}`}
                whileFocus={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400 }}
                onBlur={handleBlur}
              />
              {touched.message && errors.message && (
                <p className="text-red-500 text-sm mt-2">{errors.message}</p>
              )}
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
