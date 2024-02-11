import { useState } from "react";
import { images } from "../data/homeData";

const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => prevIndex - 1);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div className="relative flex flex-col justify-center items-center">
      <div className="flex overflow-hidden w-full h-full">
        {images.map((image, index) => (
          <div
            key={image}
            className={`w-full h-full flex-shrink-0 ${
              index === activeIndex ? "block" : "hidden"
            }`}
          >
            <img src={image} alt="" className="object-cover w-full h-full" />
          </div>
        ))}
      </div>
      <div className="flex absolute top-0 left-0 w-full h-full justify-between items-center">
        <button
          className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
          onClick={handlePrev}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
          onClick={handleNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;