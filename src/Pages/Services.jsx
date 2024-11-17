import React from "react";
import PageTitle from "../Components/PageTitle";
import { ImSpoonKnife } from "react-icons/im";
import { IoWaterOutline } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { GiWaterGallon } from "react-icons/gi";
import { TbSunElectricity } from "react-icons/tb";
import { FaWifi } from "react-icons/fa6";
const Services = () => {
  return (
    <div classNameName="container">
      <PageTitle title="Facilities" />

      <div className="container">
        <div className=" pt-32 ">
          <div className="relative w-full text-center lg:text-left">
            <h2 className=" text-2xl sm:text-4xl text-black font-bold font-Poppins  leading-[2.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-md lg:mx-0">
              Our Facilities
            </h2>
          </div>
        </div>
        <section className="py-3  ">
          <div>
            <div className="flex justify-center items-center  gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
              <div className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-black">
                <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                  <ImSpoonKnife />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
                  Homely Food
                </h4>
                <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                  we believe in providing nutritious and delicious meals that
                  remind you of home.
                </p>
              </div>

              <div className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-black">
                <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                  <FaBath />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
                  Attached Restroom
                </h4>
                <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                  Each room comes with an attached restroom, offering you
                  privacy and convenience.
                </p>
              </div>
              <div className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-black">
                <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                  <IoWaterOutline />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
                  24 Hrs Water Facility
                </h4>
                <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                  We provide a constant supply of water, so you never have to
                  worry about interruptions.
                </p>
              </div>
              <div className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-black">
                <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                  <TbSunElectricity />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
                  Electricity
                </h4>
                <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                  Uninterrupted power supply.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <div className="flex justify-center items-center  gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
              <div className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-black">
                <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                  <GiWaterGallon />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
                  RO Drinking Water
                </h4>
                <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                  We provide clean and clear water for all, all time!
                </p>
              </div>

              <div className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-black">
                <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                  <FaWifi />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
                  Complimentary Wifi
                </h4>
                <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                  Stay connected with our high-speed internet access.
                </p>
              </div>
              <div className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-black">
                <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                  <ImSpoonKnife />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
                  Separate study room
                </h4>
                <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                  Provide Customer Service For Those Of You Who Have Problems 24
                  Hours A Week
                </p>
              </div>
              <div className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-black">
                <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                  <TbSunElectricity />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
                  No extra Electricity charges
                </h4>
                <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                  We provide faster transaction speeds than competitors, so
                  money arrives and is received faster.
                </p>
              </div>
            </div>
          </div>
          <div></div>
        </section>
      </div>
    </div>
  );
};

export default Services;
