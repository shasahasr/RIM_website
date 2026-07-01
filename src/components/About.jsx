import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

const highlights = [
  'Patent-pending inventory-scale hardware',
  'Alerts by app, email, or text — your choice',
  'Retro-fitted to the equipment you already own',
];

export default function About() {
  return (
    <section className="section bd-container" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <Reveal direction="right" delay={0}>
          <motion.div
            className="order-2 lg:order-1 relative"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Gradient frame glow */}
            <div className="absolute -inset-3 brand-gradient-bg opacity-20 blur-2xl rounded-[2rem]" aria-hidden="true" />
            <motion.img
              src="/assets/img/inventory.jpg"
              alt="Warehouse inventory management system"
              loading="lazy"
              className="relative w-full rounded-3xl shadow-2xl"
              whileHover={{
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { duration: 0.3 }
              }}
            />
          </motion.div>
        </Reveal>
        <Reveal direction="left" delay={0.2}>
          <div className="order-1 lg:order-2">
            <motion.span
              className="section-subtitle text-left mb-6 block"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              About us
            </motion.span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl text-title-light dark:text-title-dark mb-8 font-light tracking-tight leading-tight text-left">
              We take stock, <span className="text-gradient">so you don't have to</span>
            </h2>
            <motion.p
              className="mb-8 text-text-light dark:text-text-dark text-xl leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              RIM Fixtures pairs high-end weighing technology with a smart notification
              system, so businesses know the instant their inventory runs low — every
              solution retro-fitted to their exact setup.
            </motion.p>

            <ul className="mb-10 space-y-4">
              {highlights.map((item, i) => (
                <motion.li
                  key={item}
                  className="flex items-start gap-3 text-lg text-text-light dark:text-text-dark"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <span className="mt-1 shrink-0 w-6 h-6 rounded-full brand-gradient-bg flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            <motion.a
              href="#services"
              className="button-gradient inline-flex"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Explore our services
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
