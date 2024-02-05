/* eslint-disable no-unused-vars */
import React from 'react';
import { about } from '../data/aboutData';

function About() {
  return (
    <section id="about" className="pt-4 pb-20">
      <div className="container">
        <div className="flex flex-wrap justify-center text-center px-4 lg:px-12">
          <h1 className="font-bold text-black text-4xl mb-3 lg:mb-5 lg:text-6xl">
            {about.title}
          </h1>
          <p className="font-semibold text-black text-xl mb-3">
            {about.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;