/* eslint-disable no-unused-vars */
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { about } from '../data/aboutData';

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: 'easeInOut' } },
  };

  const titleVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { delay: 0.5, duration: 1.5, ease: 'easeInOut' } },
  };

  const subtitleVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { delay: 0.5, duration: 1.5, ease: 'easeInOut' } },
  };

  const controls = useAnimation();

  const handleHover = () => {
    controls.start({ scale: 1.1 });
  };

  const handleHoverEnd = () => {
    controls.start({ scale: 1 });
  };

  return (
    <motion.section
      id="about"
      className="pt-4 pb-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container">
        <motion.div
          className="flex flex-wrap justify-center text-center px-4 lg:px-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="font-bold text-black text-4xl mb-3 lg:mb-5 lg:text-6xl cursor-pointer"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.1, color: '#FF4500' }}
            transition={{ duration: 0.3 }}
            onHoverStart={handleHover}
            onHoverEnd={handleHoverEnd}
          >
            {about.title}
          </motion.h1>
          <motion.p
            className="font-semibold text-black text-xl mb-3"
            variants={subtitleVariants}
            initial="hidden"
            animate="visible"
          >
            {about.subtitle}
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default About;
