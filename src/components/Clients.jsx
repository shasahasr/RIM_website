import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function Clients() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section bd-container" id="clients">
      <Reveal direction="fade">
        <div className="text-center mb-20">
          <span className="section-subtitle mb-6">Partnership</span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl text-title-light dark:text-title-dark font-light tracking-tight leading-tight">
            Current Client
          </h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <Reveal delay={0.1} direction="right">
          <motion.div
            className="order-2 lg:order-1"
            whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.img
              src="/assets/img/grouppicxylo.JPG"
              alt="Xylo team working with Tiesta Tea partnership"
              loading="lazy"
              className="w-full rounded-3xl shadow-2xl"
              whileHover={prefersReducedMotion ? {} : {
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { duration: 0.3 }
              }}
            />
          </motion.div>
        </Reveal>
        <Reveal delay={0.2} direction="left">
          <div className="order-1 lg:order-2">
            <motion.h3
              className="text-5xl md:text-6xl lg:text-7xl text-title-light dark:text-title-dark mb-8 font-light tracking-tight leading-tight"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Tiesta Tea
            </motion.h3>
            <motion.p
              className="mb-10 text-text-light dark:text-text-dark text-xl leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Currently working with Tiesta Tea, we are retro-fitting our boxes to fit underneath
              their dispensers in stores all around the nation! We are super excited to continue
              working with the team.
            </motion.p>
            <motion.a
              href="https://tiestatea.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-8 py-4 bg-container-light dark:bg-container-dark border-2 border-gray-200 dark:border-gray-700 rounded-2xl font-medium text-lg text-title-light dark:text-title-dark group"
              whileHover={prefersReducedMotion ? {} : { scale: 1.05, borderColor: "rgb(16, 185, 129)", y: -2 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span>Visit Tiesta Tea</span>
              {prefersReducedMotion ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              ) : (
                <motion.svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              )}
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
