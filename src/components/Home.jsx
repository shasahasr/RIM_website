import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function Home() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden" id="home">
      {/* Animated background gradient */}
      {!prefersReducedMotion && (
        <motion.div
          className="absolute inset-0 opacity-30 dark:opacity-10"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(37, 99, 235, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(37, 99, 235, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 80%, rgba(37, 99, 235, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(37, 99, 235, 0.1) 0%, transparent 50%)',
            ]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      )}

      <div className="bd-container w-full relative z-10">
        <div className="flex flex-col items-center justify-center text-center min-h-[80vh]">
          <Reveal direction="fade" delay={0}>
            <motion.div
              className="mb-6"
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-primary font-semibold">Inventory Management</span>
            </motion.div>
          </Reveal>

          <Reveal delay={0.2} direction="scale">
            <motion.h1
              className="text-7xl md:text-9xl lg:text-[12rem] font-bold text-title-light dark:text-title-dark mb-6 tracking-tight leading-none"
              whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              RIM Fixtures
            </motion.h1>
          </Reveal>

          <Reveal delay={0.4} direction="up">
            <motion.h2
              className="text-4xl md:text-6xl lg:text-7xl text-title-light dark:text-title-dark mb-12 font-light tracking-tight leading-tight max-w-4xl mx-auto"
              whileHover={prefersReducedMotion ? {} : { scale: 1.01 }}
            >
              Simplify your<br />inventory.
            </motion.h2>
          </Reveal>

          <Reveal delay={0.6} direction="up">
            <motion.div
              className="flex flex-col sm:flex-row gap-4 items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.a
                href="#services"
                className="button text-lg px-10 py-5"
                whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -2 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                View Services
              </motion.a>
              <motion.a
                href="#about"
                className="text-lg text-text-light dark:text-text-dark hover:text-primary transition-colors font-medium flex items-center gap-2"
                whileHover={prefersReducedMotion ? {} : { x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Learn more
                {prefersReducedMotion ? (
                  <span>&rarr;</span>
                ) : (
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    &rarr;
                  </motion.span>
                )}
              </motion.a>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
