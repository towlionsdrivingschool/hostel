import React, { useEffect, useRef } from "react";

import homeImage from "../assets/homeImage.png";
import video from "../assets/Video.mp4";
import Imagecard from "../Components/Imagecard";

import About from "./About";
import Card from "../Components/Card";
import PageTitle from "../Components/PageTitle";
import AboutSection from "../Components/AboutSection";
import Testimonials from "../Components/Testimonials";
import { NavLink } from "react-router-dom";
const Home = () => {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);
  return (
    <>
      <div className=" container   ">
        <PageTitle title="Home" />
        <div className="grid grid-cols-1 md:grid-cols-2 max-md:mt-20 mt-40 md:min-h-[400px] gap-10">
          <div className="flex flex-col justify-center gap-3 md:pr-8 xl:pr-44 text-center md:text-left pt-20 md:pt-0 px-10 sm:px-0">
            <h1
              data-aos="fade-up"
              className="md:text-4xl text-[26px] text-black font-bold font-Poppins"
            >
              Not just a hostel, a way <br /> of life
            </h1>
            <p
              data-aos="fade-up"
              className="text-1xl md:text-3xl font-Poppins text-black leading-7"
            >
              One of the best ladies hostels in <br />
              Pulinkunnoo College Approved Hostel
            </p>
            <div className="space-x-4">
              <button
                data-aos="fade-up"
                data-aos-delay="1500"
                onClick={() => {
                  AOS.refreshHard();
                }}
                className="text-white font-Poppins font-medium     bg-black rounded-[6px] px-6 py-2"
              >
                <a href="tel:+917594025753">Call Now</a>
              </button>
              <button
                data-aos="fade-up"
                data-aos-delay="1500"
                onClick={() => {
                  AOS.refreshHard();
                }}
                className="text-white font-Poppins font-medium  max-sm:hidden   bg-black rounded-[6px] px-6 py-2"
              >
                <NavLink to="/contact">Contact Us</NavLink>
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center ">
            {/* <video
              className="w-[80%] md:w-[600px]"
              playsInline
              loop
              muted
              alt="All the devices"
              src={video}
              ref={videoEl}
            />{" "} */}
         
            <img
              data-aos="fade-up"
              data-aos-delay="1500"
              src={homeImage}
              alt=""
              className="w-[80%] md:w-[600px] object-cover "
            />
          </div>
        </div>
      </div>

      <section>{/* <Imagecard /> */}</section>

      <AboutSection />
      <Testimonials />
    </>
  );
};

export default Home;
