/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
      <h1 className="font-bold font-mono text-4xl mb-4 lg:text-5xl">
        <span
          className="bg-gradient-to-r from-brown-500 via-coffee-400 to-earth-500 bg-clip-text text-transparent"
          style={{ WebkitTextFillColor: 'transparent' }}
        >
          Kusen kayu kami menjamin ketahanan luar biasa
        </span>
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
        className="text-white after:content-['_↗'] text-xl font-medium bg-earth-500 rounded px-7 py-3 hover:shadow-xl hover:opacity-80 transition duration-300 ease-out"
        title="Tombol masuk"
        aria-label="Tombol masuk"
      >
        {hero.cta}
      </Link>
    </motion.div>
  );
}

export default HeroLeft;
