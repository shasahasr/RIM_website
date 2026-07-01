import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';
import { useReducedMotion } from '../hooks/useReducedMotion';

const stats = [
  { value: 'Real-time', label: 'Depletion alerts' },
  { value: 'Retro-fit', label: 'To any bin or shelf' },
  { value: 'Nationwide', label: 'Deployment' },
];

function ProductMockup({ prefersReducedMotion }) {
  const float = prefersReducedMotion
    ? {}
    : { y: [0, -12, 0], transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' } };

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Glow behind the card */}
      <div className="absolute -inset-6 brand-gradient-bg opacity-30 blur-3xl rounded-full" aria-hidden="true" />

      {/* Main device / scale card */}
      <motion.div
        className="relative rounded-3xl bg-container-light dark:bg-container-dark border border-gray-200/70 dark:border-gray-700/50 shadow-hover dark:shadow-hover-dark p-7"
        animate={float}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan" />
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-text-lighter">Bin 04 · Live</span>
          </div>
          <span className="text-xs font-medium text-green-500">Connected</span>
        </div>

        {/* Weight readout */}
        <div className="mb-2 text-sm text-text-light dark:text-text-dark">Remaining stock</div>
        <div className="flex items-end gap-2 mb-6">
          <span className="text-5xl font-bold text-title-light dark:text-title-dark tracking-tight">18</span>
          <span className="text-lg text-text-lighter mb-1.5">%</span>
        </div>

        {/* Progress bar */}
        <div className="h-3 w-full rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden mb-6">
          <motion.div
            className="h-full rounded-full brand-gradient-bg"
            initial={prefersReducedMotion ? false : { width: '80%' }}
            animate={prefersReducedMotion ? { width: '18%' } : { width: ['80%', '18%', '18%'] }}
            transition={prefersReducedMotion ? {} : { duration: 4, times: [0, 0.5, 1], repeat: Infinity, repeatDelay: 1 }}
          />
        </div>

        {/* Product row */}
        <div className="flex items-center justify-between text-sm">
          <span className="text-text-light dark:text-text-dark">Maui Mango · Tiesta Tea</span>
          <span className="font-medium text-title-light dark:text-title-dark">3.2 lb</span>
        </div>
      </motion.div>

      {/* Floating notification card */}
      <motion.div
        className="absolute -bottom-8 -left-6 sm:-left-10 w-64 rounded-2xl glass border border-gray-200/70 dark:border-gray-700/50 shadow-hover dark:shadow-hover-dark p-4 flex items-start gap-3"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        animate={prefersReducedMotion ? {} : { opacity: [0, 1, 1, 0], y: [20, 0, 0, 20] }}
        transition={prefersReducedMotion ? {} : { duration: 5, times: [0, 0.15, 0.85, 1], repeat: Infinity, repeatDelay: 1 }}
      >
        <div className="w-9 h-9 rounded-xl brand-gradient-bg flex items-center justify-center shrink-0">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 10-12 0v3.2a2 2 0 01-.6 1.4L4 17h5m6 0v1a3 3 0 11-6 0v-1" />
          </svg>
        </div>
        <div>
          <p className="text-sm font-semibold text-title-light dark:text-title-dark">Low stock alert</p>
          <p className="text-xs text-text-light dark:text-text-dark mt-0.5">Bin 04 hit 20% — time to restock.</p>
        </div>
      </motion.div>
    </div>
  );
}

export default function Home() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20 md:pt-24" id="home">
      {/* Layered background */}
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden="true" />
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(60% 50% at 15% 20%, rgba(6,182,212,0.16), transparent 60%), radial-gradient(50% 50% at 85% 15%, rgba(124,58,237,0.16), transparent 60%), radial-gradient(60% 60% at 80% 90%, rgba(37,99,235,0.14), transparent 60%)',
        }}
      />

      <div className="bd-container w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <Reveal direction="fade" delay={0}>
              <span className="eyebrow mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Smart inventory management
              </span>
            </Reveal>

            <Reveal delay={0.15} direction="up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-title-light dark:text-title-dark mb-6 tracking-tight leading-[1.05]">
                Inventory that <span className="text-gradient">counts itself.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.3} direction="up">
              <p className="text-lg md:text-xl text-text-light dark:text-text-dark mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                RIM Fixtures builds smart inventory scales that quietly track your stock and
                notify you the moment it runs low — retro-fitted to the bins, boxes, and
                dispensers you already use.
              </p>
            </Reveal>

            <Reveal delay={0.45} direction="up">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
                <motion.a
                  href="#services"
                  className="button-gradient"
                  whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  Explore what we do
                </motion.a>
                <motion.a
                  href="#contact"
                  className="button-ghost"
                  whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  Get in touch
                </motion.a>
              </div>
            </Reveal>

            {/* Trust stats */}
            <Reveal delay={0.6} direction="up">
              <div className="mt-14 grid grid-cols-3 gap-3 sm:gap-6 max-w-lg mx-auto lg:mx-0">
                {stats.map((s) => (
                  <div key={s.label} className="text-center lg:text-left">
                    <div className="text-base sm:text-xl md:text-2xl font-semibold text-gradient">{s.value}</div>
                    <div className="text-xs md:text-sm text-text-lighter mt-1 leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Visual */}
          <Reveal direction="left" delay={0.3}>
            <ProductMockup prefersReducedMotion={prefersReducedMotion} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
