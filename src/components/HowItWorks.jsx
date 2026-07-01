import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';
import { useReducedMotion } from '../hooks/useReducedMotion';

const steps = [
  {
    number: '01',
    title: 'We retro-fit the scale',
    description:
      'Our patent-pending inventory scales are custom-fitted to your existing bins, boxes, and dispensers — no new hardware to design around.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M4 7h16M4 12h16M4 17h10M18 15l3 3m0 0l-3 3m3-3H14" />
    ),
  },
  {
    number: '02',
    title: 'It tracks stock continuously',
    description:
      'The scale weighs product in real time and knows exactly how much is left — accurately, quietly, and around the clock.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 13a9 9 0 1118 0M12 13V7M12 13l4 3" />
    ),
  },
  {
    number: '03',
    title: 'You get notified',
    description:
      'The moment stock runs low, an alert lands wherever you want it — our app, your email, or straight to your phone.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 10-12 0v3.2a2 2 0 01-.6 1.4L4 17h5m6 0v1a3 3 0 11-6 0v-1" />
    ),
  },
];

export default function HowItWorks() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section bd-container" id="how-it-works">
      <Reveal direction="fade">
        <div className="text-center mb-20">
          <span className="section-subtitle mb-6">How it works</span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl text-title-light dark:text-title-dark font-light tracking-tight leading-tight">
            From shelf to <span className="text-gradient">alert</span>, in three steps
          </h2>
        </div>
      </Reveal>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {/* Connecting line on desktop */}
        <div className="hidden md:block absolute top-9 left-[16%] right-[16%] h-px bg-gradient-to-r from-brand-cyan/40 via-brand-blue/40 to-brand-purple/40" aria-hidden="true" />

        {steps.map((step, i) => (
          <Reveal key={step.number} delay={0.1 * (i + 1)} direction="up">
            <motion.div
              className="relative text-center md:text-left"
              whileHover={prefersReducedMotion ? {} : { y: -6 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="relative z-10 mx-auto md:mx-0 mb-7 w-18 h-18 rounded-2xl brand-gradient-bg flex items-center justify-center shadow-button"
                style={{ width: '4.5rem', height: '4.5rem' }}
              >
                <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  {step.icon}
                </svg>
              </div>
              <div className="text-sm font-semibold tracking-[0.2em] text-text-lighter mb-3">STEP {step.number}</div>
              <h3 className="text-2xl lg:text-3xl text-title-light dark:text-title-dark mb-4 font-light tracking-tight">
                {step.title}
              </h3>
              <p className="text-text-light dark:text-text-dark text-lg leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
