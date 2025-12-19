import React from 'react';
import Reveal from './Reveal';

export default function Home() {
  return (
    <section className="h-[calc(100vh-3rem)] md:h-screen content-center" id="home">
      <div className="bd-container bd-grid grid-cols-1 md:grid-cols-2 items-center h-full md:h-[640px]">
        <Reveal>
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl text-primary mb-2 font-bold">Xylo</h1>
            <h2 className="text-2xl md:text-4xl text-title-light dark:text-title-dark mb-8 font-medium">Simplify your<br />inventory.</h2>
            <a href="#services" className="button">View Services</a>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <img src="/assets/img/xylo-logo.png" alt="Xylo company logo" className="w-[300px] md:w-[500px] justify-self-center md:order-1" />
        </Reveal>
      </div>
    </section>
  );
}
