import React from 'react';
import Reveal from './Reveal';

export default function About() {
  return (
    <section className="section bd-container" id="about">
      <div className="bd-grid grid-cols-1 md:grid-cols-2 items-center gap-x-28">
        <Reveal>
          <div className="text-center md:text-left">
            <span className="section-subtitle text-left">About us</span>
            <h2 className="section-title text-left">
              We help you simplify <br />
              your inventory
            </h2>
            <p className="mb-6 text-text-light dark:text-text-dark">
              Using the highest-end technology, we send businesses notifications when their
              inventory has depleted, retro-fitted to their custom needs.
            </p>
            <a href="#services" className="button">Explore</a>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <img src="/assets/img/inventory.jpg" alt="Warehouse inventory management system" loading="lazy" className="w-[280px] md:w-[380px] rounded-lg justify-self-center md:order-first" />
        </Reveal>
      </div>
    </section>
  );
}
