import React from 'react';
import Reveal from './Reveal';

export default function Clients() {
  return (
    <section className="section bd-container" id="clients">
      <div className="bd-grid grid-cols-1 md:grid-cols-2 items-center gap-x-28">
        <Reveal>
          <div className="text-center md:text-left">
            <span className="section-subtitle text-left pt-14">Current Client</span>
            <h2 className="section-title text-left">Tiesta Tea</h2>
            <p className="mb-10 text-text-light dark:text-text-dark">
              Currently working with Tiesta Tea, we are retro-fitting our boxes to fit underneath
              their dispensers in stores all around the nation! We are super excited to continue
              working with the team.
            </p>
            <div className="mb-8">
              <a href="https://tiestatea.com/">
                <img src="/assets/img/explore.png" alt="Tiesta Tea company logo" loading="lazy" className="w-[120px] mr-2" />
              </a>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <img src="/assets/img/grouppicxylo.JPG" alt="Xylo team working with Tiesta Tea partnership" loading="lazy" className="w-[230px] md:w-[380px] justify-self-center order-2 md:order-first" />
        </Reveal>
      </div>
    </section>
  );
}
