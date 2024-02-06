import { motion } from 'framer-motion';
import HeroLeft from './HeroLeft';
import HeroRight from './HeroRight';
import { hero } from '../data/landingpageData';

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <motion.section
      id="hero"
      className="pt-10 pb-36"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container">
        <motion.div
          className="flex flex-wrap"
          variants={containerVariants}
        >
          <HeroLeft hero={hero} />
          <HeroRight hero={hero} />
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Hero;