import React from "react";
import { SlideshowLightbox } from "lightbox.js-react";
import homeImage from "../assets/house party-amico.png";
import "lightbox.js-react/dist/index.css";
const Gallery = () => {
  return (
    <div className="pt-32">
      <div className=" ">
        <div className="grid gap-2.5 lg:pb-16 pb-10">
          <h2 className="w-full text-center text-gray-900 text-3xl sm:text-4xl font-bold font-Poppins ">
            Our Gallery
          </h2>
          <div className="w-full text-center text-gray-600 text-lg  font-Poppins leading-8">
            Step into a realm where art comes to life.
          </div>
        </div>

        <SlideshowLightbox className="container grid-cols-1 grid md:grid-cols-3 gap-4 mx-auto">
          <img
            className="w-full rounded"
            src="https://unnisrentals.com/images/isotope/rental9.png"
          />
          <img
            className="w-full rounded"
            src="https://unnisrentals.com/images/isotope/714x540.png"
          />
          <img
            className="w-full rounded"
            src="https://unnisrentals.com/images/isotope/rental14.png"
          />
          <img
            className="w-full rounded"
            src="https://unnisrentals.com/images/isotope/rental10.png"
          />
          <img
            className="w-full rounded"
            src="https://unnisrentals.com/images/isotope/rental6.png"
          />
          <img
            className="w-full rounded"
            src="https://unnisrentals.com/images/isotope/rental5.png"
          />
        </SlideshowLightbox>
      </div>
    </div>
  );
};

export default Gallery;
