import { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-[#D4AF37]"
        >
          Hungs<span className=" text-orange-500">Meal</span>
        </motion.h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-gray-800 font-medium">
          {[
            "Home",
            "About Us",
            "Rooms & Facilities",
            "Gallery",
            "Contact Us",
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="hover:text-[#D4AF37] transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Call Button */}
        <div className="hidden md:block">
          <a
            href="tel:07083669969"
            className="flex items-center gap-2 bg-orange-500
             text-white px-4 py-2 rounded-full font-semibold
              hover:bg-orange-600 transition-colors duration-300"
          >
            <FiPhone className="text-lg" />
            Call to Book
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-800 text-2xl focus:outline-none"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white shadow-md border-t border-gray-200"
        >
          <nav className="flex flex-col space-y-3 px-6 py-4 text-gray-800">
            {[
              "Home",
              "About Us",
              "Rooms & Facilities",
              "Gallery",
              "Contact Us",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="hover:text-[#D4AF37] transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="tel:07083669969"
              className="flex items-center gap-2 justify-center
               bg-orange-500 text-white px-4 py-2 rounded-full 
               font-semibold hover:bg-orange-600 transition-colors duration-300"
            >
              <FiPhone className="text-lg" />
              Call to Book
            </a>
          </nav>
        </motion.div>
      )}

      {/* Floating WhatsApp Icon */}
      <motion.a
        href="https://wa.me/2347083669969"
        target="_blank"
        rel="noopener noreferrer"
        animate={{
          y: [0, -8, 0], // bounce up and down
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="fixed bottom-6 right-6 bg-green-500 p-3 
        rounded-full shadow-lg hover:scale-110 
        transition-transform duration-300"
      >
        <FaWhatsapp className="text-white text-2xl" />
      </motion.a>
    </header>
  );
};

export default Header;


