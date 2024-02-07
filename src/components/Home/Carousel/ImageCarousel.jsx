import { useState } from 'react';
import { images } from '../data/homeData';

function ImageCarousel () {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-1 flex flex-col justify-between">
        <div className="mb-4">
          <img
            src={images[(currentIndex - 1 + images.length) % images.length]}
            alt="Previous"
            className="w-full h-auto"
          />
        </div>
        <div>
          <img
            src={images[(currentIndex + 1) % images.length]}
            alt="Next"
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="col-span-1">
        <img src={images[currentIndex]} alt="Main" className="w-full h-auto" />
      </div>
      <div className="col-span-1 flex flex-col justify-between">
        <div className="mt-4">
          <img
            src={images[(currentIndex + 2) % images.length]}
            alt="Next"
            className="w-full h-auto"
          />
        </div>
        <div>
          <img
            src={images[(currentIndex - 2 + images.length) % images.length]}
            alt="Previous"
            className="w-full h-auto"
          />
        </div>
      </div>
      <button onClick={prevImage} className="col-span-1 text-center py-2 bg-gray-300">
        Previous
      </button>
      <button onClick={nextImage} className="col-span-1 text-center py-2 bg-gray-300">
        Next
      </button>
    </div>
  );
}

export default ImageCarousel;
