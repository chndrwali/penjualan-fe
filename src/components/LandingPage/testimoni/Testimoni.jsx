/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { testimoniData } from '../data/aboutData';

const Testimoni = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const { photo, quote, name, position } = testimoniData[currentSlide];
  
    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide === testimoniData.length - 1 ? 0 : prevSlide + 1));
    };
  
    const prevSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide === 0 ? testimoniData.length - 1 : prevSlide - 1));
    };
  
    return (
      <section className="bg-white">
        <div className="max-w-6xl px-6 py-10 mx-auto">
          <p className="text-xl font-medium text-brown-500">Testimonial</p>
  
          <h1 className="mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl ">
            Apa yang klien katakan
          </h1>
  
          <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
            <div className="absolute w-full bg-brown-500 -z-10 md:h-96 rounded-2xl"></div>
  
            <div className="w-full p-6 bg-brown-500 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
              <img className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" src={photo} alt="client photo" />
  
              <div className="mt-2 md:mx-6">
                <div>
                  <p className="text-xl font-medium tracking-tight text-white">{name}</p>
                  <p className="text-blue-200">{position}</p>
                </div>
  
                <p className="mt-4 text-lg leading-relaxed text-white md:text-xl">{quote}</p>
  
                <div className="flex items-center justify-between mt-6 md:justify-start">
                  <button title="left arrow" className="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:bg-blue-400" onClick={prevSlide}>
                    <FaChevronLeft />
                  </button>
  
                  <button title="right arrow" className="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 md:mx-6 hover:bg-blue-400" onClick={nextSlide}>
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
    );
  };
  
  export default Testimoni;