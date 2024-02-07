/* eslint-disable no-unused-vars */
import React from "react";
import { Carousel } from "flowbite-react";

function ImgCrsl() {
    return (
        <div className=" bg-gray-800 h-56 sm:h-64 xl:h-50 2xl:h-96">
      <Carousel pauseOnHover>
        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      </Carousel>
    </div>
    )
}

export default ImgCrsl;