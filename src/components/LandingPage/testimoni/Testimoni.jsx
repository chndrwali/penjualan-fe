/* eslint-disable react/prop-types */
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { testimoniData } from '../data/aboutData';

const Testimoni = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === testimoniData.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? testimoniData.length - 1 : prevSlide - 1));
  };

  return (
    <div className="relative">
      <FaChevronLeft className="absolute top-1/2 left-2 transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700" onClick={prevSlide} />
      <FaChevronRight className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700" onClick={nextSlide} />
      {testimoniData.map((testimoni, index) => (
        <motion.div
          className={`absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentSlide ? 1 : 0 }}
        >
          <img src={testimoni.photo} alt="Profile" className="w-24 h-24 rounded-full mb-4" />
          <p className="text-center text-gray-800">{testimoni.quote}</p>
          <p className="text-center font-bold mt-2">{testimoni.name}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Testimoni;
