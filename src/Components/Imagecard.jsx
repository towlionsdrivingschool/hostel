import React from "react";
import homeImageSe from "../assets/4288106.jpg";
import homeImageSe2 from "../assets/Kids Studying from Home-amico.png";
import homeImageSe3 from "../assets/Home screen-pana.png";
const Imagecard = () => {
  return (
    <div className="container">
      {/* imagecard text section */}

      <div className="flex max-sm:flex-col max-sm:justify-center items-center justify-between">
        <p className="text-2xl md:text-3xl text-black font-bold font-Poppins">
          Unmissable Highlights Featured <br /> Content You Can't ignore
        </p>
        <button className="text-white font-Poppins font-medium  max-md:hidden    bg-black rounded-[6px] px-6 py-2">
          More Resoues
        </button>
      </div>
      {/* imagecard botton section */}

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 pt-7 mt-5   mb-5 pb-8">
        <div className="bg-black md:w-70   text-white rounded-[18px] p-4 ">
          <img src={homeImageSe} className="  object-cover rounded-xl " />
          <h1 className="text-white text-[20px] font-Poppins pt-3 font-medium">
            Featured Content Showcase Discover What is Treending
          </h1>
          <p className="text-white pt-3 pb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
            quis.
          </p>
          <button className=" text-black font-Poppins font-medium       bg-white rounded-[9px] px-3 py-2">
            More Resoues
          </button>
        </div>
        <div className=" border border-black md:w-70   text-white rounded-[18px] p-4 ">
          <img src={homeImageSe2} className=" object-cover rounded-xl " />
          <h1 className="text-black text-[20px] font-Poppins pt-3 font-medium">
            Featured Content Showcase Discover What is Treending
          </h1>
          <p className="text-black pt-3 pb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
            quis.
          </p>
          <button className=" text-white font-Poppins font-medium       bg-black rounded-[9px] px-3 py-2">
            More Resoues
          </button>
        </div>
        <div className=" border border-black md:w-70   text-white rounded-[18px] p-4 ">
          <img src={homeImageSe3} className=" object-cover rounded-xl " />
          <h1 className="text-black text-[20px] font-Poppins pt-3 font-medium">
            Featured Content Showcase Discover What is Treending
          </h1>
          <p className="text-black pt-3 pb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
            quis.
          </p>
          <button className=" text-white font-Poppins font-medium       bg-black rounded-[9px] px-3 py-2">
            More Resoues
          </button>
        </div>
      </div>
    </div>
  );
};

export default Imagecard;
