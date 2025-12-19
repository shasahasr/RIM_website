import React from 'react';
import Reveal from './Reveal';
import { ScaleIcon, NotificationIcon, RetroFitIcon } from './Icons';

export default function Services() {
  return (
    <section className="section bd-container" id="services">
      <Reveal>
        <span className="section-subtitle">Offering</span>
        <h2 className="section-title">Our amazing services</h2>
      </Reveal>

      <div className="bd-grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-10 mt-12">
        <Reveal delay={0.1}>
          <div className="text-center bg-container-light dark:bg-container-dark p-10 rounded-[1.25rem] shadow-soft dark:shadow-soft-dark transition-all duration-300 hover:-translate-y-1 hover:shadow-hover dark:hover:shadow-hover-dark h-full">
            <ScaleIcon className="w-16 h-16 fill-primary mb-4 mx-auto" />
            <h3 className="text-lg md:text-xl text-title-light dark:text-title-dark mb-2 font-medium">Our XyloBalance Scales</h3>
            <p className="p-0 text-text-light dark:text-text-dark">
              Our patent-pending design ensures quality, and confidence that your items will be
              tracked accurately.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="text-center bg-container-light dark:bg-container-dark p-10 rounded-[1.25rem] shadow-soft dark:shadow-soft-dark transition-all duration-300 hover:-translate-y-1 hover:shadow-hover dark:hover:shadow-hover-dark h-full">
            <NotificationIcon className="w-16 h-16 fill-primary mb-4 mx-auto -mt-1.5" />
            <h3 className="text-lg md:text-xl text-title-light dark:text-title-dark mb-2 font-medium">Choice of Notification</h3>
            <p className="p-0 text-text-light dark:text-text-dark">
              Whether it be our app, your email, or straight to your phone's messages, we can cater
              to your individual notification needs.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="text-center bg-container-light dark:bg-container-dark p-10 rounded-[1.25rem] shadow-soft dark:shadow-soft-dark transition-all duration-300 hover:-translate-y-1 hover:shadow-hover dark:hover:shadow-hover-dark h-full">
            <RetroFitIcon className="w-16 h-16 fill-primary mb-4 mx-auto" />
            <h3 className="text-lg md:text-xl text-title-light dark:text-title-dark mb-2 font-medium">Retro-fit Solutions</h3>
            <p className="p-0 text-text-light dark:text-text-dark">
              Based on your dispensers, boxes, or bins, we will retro-fit our product to fit yours.
              Hassle-free.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
