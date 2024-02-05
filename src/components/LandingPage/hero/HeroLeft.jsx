/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

function HeroLeft({ hero }) {
  const textVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 1.5, ease: 'easeInOut' } },
  };

  return (
    <motion.div
      className="w-full self-center px-4 lg:pl-4 lg:pr-8 lg:w-1/2"
      variants={textVariants}
      initial="hidden"
      animate="visible"
    >
      <h1 className="font-bold text-brown-500 text-4xl mb-4 lg:text-6xl">
        <TypeAnimation sequence={['Kusen kayu kami menjamin ketahanan luar biasa', 2000, 'Kusen kayu kami menyajikan kualitas unggul', 2000, 'Kusen kayu kami memukau dengan keindahan estetis', 2000]} repeat={Infinity} />
      </h1>
      <h2 className="font-semibold text-dark text-xl mb-3 lg:text-3xl">{hero.subtitle}</h2>
      <motion.p
        className="font-medium text-dark text-base mb-10 leading-relaxed lg:text-lg"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        {hero.desc}
      </motion.p>
      <Link
        to="/masuk"
        className="text-white text-xl font-medium bg-earth-500 rounded px-7 py-3 hover:shadow-xl hover:opacity-80 transition duration-300 ease-out"
        title="Tombol masuk"
        aria-label="Tombol masuk"
      >
        {hero.cta}
      </Link>
    </motion.div>
  );
}

export default HeroLeft;