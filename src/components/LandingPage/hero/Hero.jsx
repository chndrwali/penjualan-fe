/* eslint-disable no-unused-vars */
import React from 'react';
import HeroLeft from './HeroLeft';
import HeroRight from './HeroRight';

import { hero } from '../data/landingpageData';

function Hero() {
  return (
    <section
      id="hero"
      className="pt-10 pb-36"
    >
      <div className="container">
        <div className="flex flex-wrap">
          <HeroLeft hero={hero} />
          <HeroRight hero={hero} />
        </div>
      </div>
    </section>
  );
}

export default Hero;