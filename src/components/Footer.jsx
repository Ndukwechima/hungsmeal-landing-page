import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-16 relative overflow-hidden">
      {/* Background subtle pattern animation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[url('/footer-pattern.svg')] bg-cover bg-center"
      ></motion.div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Info */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <h2 className="text-2xl font-bold text-white">
            HungsMeal Hotel & Suites
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Where luxury meets comfort.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-3"
        >
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {["Home", "About", "Rooms", "Gallery", "Contact"].map((item) => (
              <li
                key={item}
                className="hover:text-white transition duration-200 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-3"
        >
          <h3 className="text-lg font-semibold text-white">Follow Us</h3>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition"
            >
              <FaFacebookF className="text-white text-lg" />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-800 rounded-full hover:bg-pink-500 transition"
            >
              <FaInstagram className="text-white text-lg" />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-800 rounded-full hover:bg-black transition"
            >
              <FaTiktok className="text-white text-lg" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © 2025 HungsMeal Hotel & Suites. All Rights Reserved.
      </div>
    </footer>
  );
}


