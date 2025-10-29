import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";
import bgImg from "../assets/images/img4.jpeg"; // Replace with your hotel background image

const ContactSection = () => {
  return (
    <section
    id="contact"
      className="relative text-white py-20 px-6 md:px-12 overflow-hidden"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
            Visit or Contact Us
          </h2>
          <p className="text-gray-300 mb-8">
            We’re always ready to welcome you with open arms!
          </p>

          <div className="space-y-4 text-gray-200">
            <p className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-orange-400 mt-1" />
              No. 32, Olaseni Bello K&S B/Stop, Abaranje, Ikotun.
            </p>
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-orange-400" /> 07083669969
            </p>
            <a
              href="https://wa.me/2347083669969"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-yellow-400 transition"
            >
              <FaWhatsapp className="text-green-400" /> Chat on WhatsApp
            </a>
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-orange-400" /> info@hungsmealhotel.com
            </p>
            <p className="flex items-center gap-3">
              <FaClock className="text-orange-400" /> Open 24 Hours, 7 Days a
              Week
            </p>
          </div>

          {/* Button */}
          <motion.a
            href="https://goo.gl/maps/" // replace with actual Google Maps link
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="mt-8 inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-yellow-500/40 transition"
          >
            Get Directions <FaArrowRight />
          </motion.a>
        </motion.div>

        {/* Right: Embedded Map */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-yellow-500/30"
        >
          <iframe
            title="HungsMeal Hotel Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.885415185645!2d3.2399529755232597!3d6.53615242301511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x64e73c3b9e1c6313%3A0xf39c5d48903474e7!2sHungsmeal%20Hotel%20%26%20Suites!5e0!3m2!1sen!2sng!4v1761696955033!5m2!1sen!2sng"
            width="100%"
            height="400"
            // style="border:0;"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-3xl"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
