/* eslint-disable no-unused-vars */
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { about } from '../data/aboutData';
import { Blockquote } from 'flowbite-react';

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: 'easeInOut' } },
  };

  const titleVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { delay: 0.5, duration: 1.0, ease: 'easeInOut' } },
  };

  const subtitleVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { delay: 0.5, duration: 1.0, ease: 'easeInOut' } },
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
          className="flex flex-wrap justify-center px-4 lg:px-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="font-bold text-black underline text-4xl mb-3 lg:mb-5 lg:text-6xl cursor-pointer"
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
            className=" text-gray-500 text-xl mb-3"
            variants={subtitleVariants}
            initial="hidden"
            animate="visible"
          >
            {about.subtitle}
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
        <motion.p 
        className="text-xl mb-3 text-gray-500 dark:text-gray-400"
        variants={subtitleVariants}
            initial="hidden"
            animate="visible"
        >
        {about.desc}
        </motion.p>
        <Blockquote className="mb-3">
          <motion.p 
          className="text-xl font-semibold italic text-gray-900"
          variants={subtitleVariants}
            initial="hidden"
            animate="visible"
          >
            {'"'} Kami percaya bahwa <a className='underline decoration-red-500'>kualitas layanan</a>  adalah kunci keberhasilan kami. Dengan pendekatan yang fokus pada <a className='underline decoration-red-500'>kebutuhan pelanggan</a>, kami selalu berupaya untuk memberikan <a className='underline decoration-red-500'>pengalaman yang memuaskan</a> kepada setiap pelanggan kami. Kami berusaha untuk terus meningkatkan layanan kami melalui pengembangan proyek-proyek penting, pengurangan kerja berulang, dan penerapan perubahan yang efektif untuk memastikan kepuasan pelanggan yang berkelanjutan. {'"'}
          </motion.p>
        </Blockquote>
      </div>
      <motion.p 
      className="text-xl mb-3 text-gray-500 "
      variants={subtitleVariants}
      initial="hidden"
      animate="visible">
      {about.subdesc}
      </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default About;
