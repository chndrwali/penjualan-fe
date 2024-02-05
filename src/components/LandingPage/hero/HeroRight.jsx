/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

function HeroRight({ hero }) {
  const imageVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: 'easeInOut' } },
  };

  return (
    <motion.div
      className="w-full px-4 lg:w-1/2"
      variants={imageVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="relative w-full mt-10 lg:mt-0 lg:right-0">
        <img
          src={hero.image}
          className="absolute scale-[45%] top-1/3 right-[12%] translate-x-1/2 md:top-[40%] md:scale-50 lg:scale-[65%]"
          alt="Robot"
        />
        <motion.video
          autoPlay
          loop
          muted
          playsInline
          className="w-[85%] h-auto rounded-xl shadow-xl"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <source src={hero.video} type="video/webm" />
        </motion.video>
      </div>
    </motion.div>
  );
}

export default HeroRight;