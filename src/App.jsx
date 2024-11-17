import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import ScrollToTop from "./Components/ScrollToTop";
import Gallery from "./Pages/Gallery";
import Footer from "./Components/Footer";
const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/facilities" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
