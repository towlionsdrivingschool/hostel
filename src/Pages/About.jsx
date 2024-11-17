import React from "react";
import PageTitle from "../Components/PageTitle";
import homeImageSe2 from "../assets/Kids Studying from Home-amico.png";
import Card from "../Components/Card";
const About = () => {
  return (
    <div>
      <PageTitle
        title="
About Us"
      />
      <div className=" mt-20 bg-slate-900" id="about">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[800px] gap-10">
            <div className="flex flex-col justify-center gap-7 max-sm:text-left  text-center md:text-left   ">
              <div className="space-y-5 pt-16 sm:pt-0 pb-6">
                <h1 className="text-3xl sm:text-4xl font-bold font-Poppins text-white">
                  About Us
                </h1>
                <p className="leading-8 tracking-wide text-white font-Poppins">
                  Welcome to Kakaruparapil Ladies Hostel, located in the heart
                  of Alapuzha. We pride ourselves on providing a safe,
                  comfortable, and welcoming environment for women. Our hostel
                  is designed to cater to the needs of our residents, offering
                  modern amenities and a supportive . Join us and experience the
                  best in hospitality and care for ladies.
                </p>

                <button className=" text-black font-Poppins font-medium       bg-white rounded-[9px] px-9 py-3">
                  <a target="_blank" rel="noopener noreferrer">
                    Locate Us
                  </a>
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center ">
              <img
                src={homeImageSe2}
                alt=""
                className="w-[80%] md:w-[600px] object-cover "
              />
            </div>
          </div>
        </div>
      </div>
      <Card />
    </div>
  );
};

export default About;
