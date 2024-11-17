import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Navimage from "../assets/kakaruparambil.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  });
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Home", path: "/" },
    { id: 2, text: "About Us", path: "/about" },

    { id: 3, text: "Facilities", path: "/facilities" },
    { id: 4, text: "Gallery", path: "/gallery" },
    { id: 5, text: "Contact", path: "/contact" },
  ];

  return (
    <header className="border-b-[2px] z-50 fixed w-full top-0 left-0 right-0 bg-[#fefefe] border-b-slate-950 ">
      <div className=" container   ">
        <div className="  flex justify-between items-center h-24  text-white ">
          {/* Desktop Navigation */}
          <ul className="hidden md:flex  ">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="p-4 font-Poppins font-medium  rounded-xl  cursor-pointer duration-300 text-black"
              >
                <NavLink to={item.path} onClick={handleClick}>
                  {item.text}

                  <hr className=" border-none outline-none h-0.5 bg-[#37474F] w-3/5 m-auto hidden" />
                </NavLink>
              </li>
            ))}
          </ul>
          <img className="w-[120px]" src={Navimage} alt="" />
          {/* Logo */}
          <div className="flex  items-center">
            {/* <div className="xl:hidden">xvcxvxvxvxvvxvxxvvxvxv</div> */}
          </div>
          {/* Mobile Navigation Icon */}
          <div onClick={handleNav} className="block md:hidden text-black  ">
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>

          {/* Mobile Navigation Menu */}
          <ul
            className={
              nav
                ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
                : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
            }
          >
            {/* Mobile Logo */}
            <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4"></h1>

            {/* Mobile Navigation Items */}
            {navItems.map((item) => (
              <li
                onClick={handleClick}
                key={item.id}
                className="p-4 font-Poppins font-medium  rounded-xl m-2 cursor-pointer duration-300 text-white"
              >
                <NavLink onClick={handleNav} to={item.path}>
                  {item.text}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="button">
            <button className="text-white font-Poppins font-medium  max-sm:hidden   bg-black rounded-[6px]  px-6 py-2">
              <a href="https://wa.me/+917594025753" target="_blank">
                Booking
              </a>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
