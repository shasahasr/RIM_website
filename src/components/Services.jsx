import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';
import { ScaleIcon, NotificationIcon, RetroFitIcon } from './Icons';
import { useReducedMotion } from '../hooks/useReducedMotion';

function ServiceCard({ delay, icon: Icon, title, description }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Reveal delay={delay} direction="up">
      <motion.div
        className="group relative bg-container-light dark:bg-container-dark p-10 lg:p-12 rounded-3xl h-full flex flex-col shadow-soft dark:shadow-soft-dark hover:shadow-hover dark:hover:shadow-hover-dark transition-all duration-500 border border-transparent hover:border-primary/20 overflow-hidden"
        whileHover={prefersReducedMotion ? {} : { y: -12, transition: { type: "spring", stiffness: 300 } }}
        initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
        whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.6 }}
      >
        {/* Gradient wash on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true"
          style={{ background: 'radial-gradient(120% 80% at 100% 0%, rgba(37,99,235,0.07), transparent 60%)' }}
        />
        <div className="relative mb-8 w-16 h-16 lg:w-18 lg:h-18 rounded-2xl brand-gradient-bg flex items-center justify-center shadow-button"
          style={{ width: '4rem', height: '4rem' }}
        >
          <Icon className="w-8 h-8 lg:w-9 lg:h-9 text-white" />
        </div>
        <h3 className="relative text-2xl lg:text-3xl text-title-light dark:text-title-dark mb-5 font-light tracking-tight">
          {title}
        </h3>
        <p className="relative text-text-light dark:text-text-dark text-lg leading-relaxed flex-grow">
          {description}
        </p>
      </motion.div>
    </Reveal>
  );
}

export default function Services() {
  return (
    <section className="section bd-container" id="services">
      <Reveal direction="fade">
        <div className="text-center mb-20">
          <motion.span
            className="section-subtitle mb-6 block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Offering
          </motion.span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl text-title-light dark:text-title-dark font-light tracking-tight leading-tight mb-6">
            What we <span className="text-gradient">deliver</span>
          </h2>
          <p className="text-text-light dark:text-text-dark text-xl leading-relaxed max-w-2xl mx-auto">
            Precision hardware, flexible alerts, and a fit made for your setup — everything
            you need to never run out unexpectedly again.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        <ServiceCard
          delay={0.1}
          icon={ScaleIcon}
          title="RIM Fixtures Inventory Scales"
          description="Our patent-pending design ensures quality, and confidence that your items will be tracked accurately."
        />
        <ServiceCard
          delay={0.2}
          icon={NotificationIcon}
          title="Choice of Notification"
          description="Whether it be our app, your email, or straight to your phone's messages, we can cater to your individual notification needs."
        />
        <ServiceCard
          delay={0.3}
          icon={RetroFitIcon}
          title="Retro-fit Solutions"
          description="Based on your dispensers, boxes, or bins, we will retro-fit our product to fit yours. Hassle-free."
        />
      </div>
    </section>
  );
}
