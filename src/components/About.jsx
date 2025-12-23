import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

export default function About() {
  return (
    <section className="section bd-container" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <Reveal direction="right" delay={0}>
          <motion.div 
            className="order-2 lg:order-1"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.img 
              src="/assets/img/inventory.jpg" 
              alt="Warehouse inventory management system" 
              loading="lazy" 
              className="w-full rounded-3xl shadow-2xl"
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
              We help you simplify<br />your inventory
            </h2>
            <motion.p 
              className="mb-10 text-text-light dark:text-text-dark text-xl leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Using the highest-end technology, we send businesses notifications when their
              inventory has depleted, retro-fitted to their custom needs.
            </motion.p>
            <motion.a 
              href="#services" 
              className="button inline-block"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Explore
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
