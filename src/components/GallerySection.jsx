import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaArrowRight } from "react-icons/fa";

import gal1 from "../assets/images/img.jpeg";
import gal2 from "../assets/images/img1.jpeg";
import gal3 from "../assets/images/img2.jpeg";
import gal4 from "../assets/images/img3.jpeg";
import gal5 from "../assets/images/img4.jpeg";
import gal6 from "../assets/images/img5.jpeg";
import gal7 from "../assets/images/img6.jpeg";
import gal8 from "../assets/images/img7.jpeg";

const images = [
  { src: gal1, label: "Standard Room" },
  { src: gal2, label: "Deluxe Room" },
  { src: gal3, label: "Super Deluxe" },
  { src: gal4, label: "Executive Room" },
  { src: gal5, label: "Presidential Suite" },
  { src: gal6, label: "VIP Lounge" },
  { src: gal7, label: "Classic Hall" },
  { src: gal8, label: "Swimming Pool" },
];

const GallerySection = () => {
  const [index, setIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [index]);

  const handleNext = () => setIndex((prev) => (prev + 1) % images.length);
  const handlePrev = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  const getImage = (i) => images[(i + images.length) % images.length];

  return (
    <section
    id="gallery"
      className="relative text-white py-20 px-6 
      md:px-12 overflow-hidden bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: `url("/src/assets/images/about-img.jpeg")`, // Change this to your preferred background image
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/90"></div>

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4"
        >
          Explore Our Space
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Take a glimpse into the beauty of HungsMeal Hotel & Suites — from our
          relaxing rooms and elegant lounge to our sparkling pool and event
          spaces. Each corner is crafted to give you a premium hospitality
          experience.
        </motion.p>

        {/* Carousel */}
        <div className="relative flex items-center justify-center">
          {/* Left Chevron */}
          <button
            onClick={handlePrev}
            className="absolute left-0 md:left-10 top-1/2 
            -translate-y-1/2 bg-black/50
             hover:bg-black/70 p-3 rounded-full transition"
          >
            <FaChevronLeft size={20} />
          </button>

          <div className="flex items-center justify-center gap-4 md:gap-8">
            {/* Left image */}
            <motion.div
              key={`left-${index}`}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 0.9, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-40 md:w-60 h-56 md:h-72 rounded-xl overflow-hidden shadow-lg bg-gray-800"
            >
              <img
                src={getImage(index - 1).src}
                alt={getImage(index - 1).label}
                className="w-full h-full object-cover opacity-80"
              />
            </motion.div>

            {/* Center image (main) */}
            <motion.div
              key={`center-${index}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-56 md:w-96 h-72 md:h-[400px] 
              rounded-2xl overflow-hidden shadow-2xl 
              border-2 border-yellow-500"
            >
              <img
                src={getImage(index).src}
                alt={getImage(index).label}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2
               bg-black/60 px-5 py-2 rounded-full
                text-yellow-300 font-semibold text-sm md:text-base">
                {getImage(index).label}
              </div>
            </motion.div>

            {/* Right image */}
            <motion.div
              key={`right-${index}`}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 0.9, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-40 md:w-60 h-56 md:h-72 rounded-xl overflow-hidden shadow-lg bg-gray-800"
            >
              <img
                src={getImage(index + 1).src}
                alt={getImage(index + 1).label}
                className="w-full h-full object-cover opacity-80"
              />
            </motion.div>
          </div>

          {/* Right Chevron */}
          <button
            onClick={handleNext}
            className="absolute right-0 md:right-10 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full transition"
          >
            <FaChevronRight size={20} />
          </button>
        </div>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-12 inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition"
        >
          View Gallery <FaArrowRight />
        </motion.button>
      </div>
    </section>
  );
};

export default GallerySection;
