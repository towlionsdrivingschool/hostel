import React from "react";
import PageTitle from "../Components/PageTitle";
import homeImageSe2 from "../assets/Kids Studying from Home-amico.png";
import Card from "../Components/Card";
const AboutSection = () => {
  return (
    <div>
      <div>
        <div
          className=" mt-1 bg-slate-900 sm:min-h-[600px] sm:grid sm:place-items-center duration-300"
          id="about"
        >
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
              <div>
                <div className="space-y-5 pt-16 sm:pt-0 pb-6">
                  <h1 className="text-3xl sm:text-4xl font-bold font-Poppins text-white">
                    About Us
                  </h1>
                  <p className="leading-8 tracking-wide text-white font-Poppins">
                    Welcome to Kakaruparapil Ladies Hostel, located in the heart
                    of Alapuzha. We pride ourselves on providing a safe,
                    comfortable, and welcoming environment for women. Our hostel
                    is designed to cater to the needs of our residents, offering
                    modern amenities and a supportive . Join us and experience
                    the best in hospitality and care for ladies.
                  </p>

                  <button className=" text-black font-Poppins font-medium       bg-white rounded-[9px] px-9 py-3">
                    <a target="_blank" rel="noopener noreferrer">
                      Locate Us
                    </a>
                  </button>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-delay="1200">
                <img
                  src={homeImageSe2}
                  alt=""
                  className="sm:scale-125 sm:-translate-x-11 rounded-full max-h-[430px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
                />
              </div>
            </div>
          </div>
        </div>
        <Card />
      </div>
    </div>
  );
};

export default AboutSection;
