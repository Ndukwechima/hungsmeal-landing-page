import { motion } from "framer-motion";
import { FiPhone } from "react-icons/fi";
// import HeroVid from "../assets/videos/hungs-hero-video.mp4"

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen flex items-center 
    justify-center text-center overflow-hidden"
    >
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/public/videos/hungs-hero-video.mp4" // place your video in public/videos/
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Hero Content */}
      <div className="relative z-10 px-6 text-white max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Welcome to{" "}
          <span className="text-[#D4AF37]">HungsMeal Hotel & Suites</span> —{" "}
          <br />
          Where Luxury Meets Comfort!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-4 text-lg md:text-xl text-gray-100"
        >
          Experience elegance, relaxation, and exceptional hospitality — all in
          one place.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#rooms-&-facilities"
            className="bg-orange-500 hover:bg-orange-600
             text-white font-semibold px-6 py-3 
             rounded-full transition duration-300"
          >
            View Our Rooms
          </a>
          <a
            href="tel:07083669969"
            className="flex items-center justify-center
             gap-2 border border-[#D4AF37] text-[#D4AF37] 
             font-semibold px-6 py-3 rounded-full hover:bg-[#D4AF37]
              hover:text-white transition duration-300"
          >
            <FiPhone />
            Call to Book
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
