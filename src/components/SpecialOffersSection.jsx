import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaStar } from "react-icons/fa";
import eventImg from "../assets/images/pool.jpeg"; // Change this to your real image path

const SpecialOffersSection = () => {
  return (
    <section className="relative overflow-hidden bg-gray-900 text-white py-20 px-6 md:px-12">
      {/* Background Image with Overlay */}
      {/* <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${eventImg})` }}
      ></div>
      <div className="absolute inset-0 bg-black/90"></div> */}

      {/* Floating Sparkles for Celebration Vibe */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-2 h-2 bg-yellow-400 rounded-full top-10 left-10 animate-ping"></div>
        <div className="absolute w-2 h-2 bg-yellow-300 rounded-full top-20 right-20 animate-ping delay-100"></div>
        <div className="absolute w-2 h-2 bg-orange-400 rounded-full bottom-10 left-1/2 animate-ping delay-200"></div>
      </div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6">
            Planning a Pool Party or Special Event?
          </h2>
          <p className="text-gray-200 leading-relaxed mb-6">
            Make your celebration unforgettable! From birthday pool parties to
            private events, our team is ready to help you plan every detail.
            Let’s make your special moments extraordinary.
          </p>

          {/* Feature Highlights */}
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              "Pool Parties",
              "Private Events",
              "Corporate Hangouts",
              "Birthday Celebrations",
            ].map((feature, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * i }}
                className="bg-yellow-500/10 border border-yellow-400/30 text-yellow-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-yellow-500/20 transition"
              >
                {feature}
              </motion.span>
            ))}
          </div>

          {/* Call to Action Button */}
          <motion.a
            href="tel:+2349012345678"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-full text-lg font-semibold text-white shadow-lg hover:shadow-orange-400/40 transition"
          >
            <FaPhoneAlt className="text-yellow-300" /> Call Us to Discuss
          </motion.a>
        </motion.div>

        {/* Image Card */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-yellow-500/40">
            <img
              src={eventImg}
              alt="Special Event"
              className="w-full h-[400px] object-center transform hover:scale-105 transition duration-700"
            />
            {/* Floating Label Overlay */}
            <div className="absolute bottom-0 w-full bg-linear-to-t from-black/80 to-transparent p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-yellow-400">
                  Celebrate in Style
                </h3>
                <div className="flex text-yellow-300">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="mr-1" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-300 mt-1">
                Perfect ambiance for unforgettable moments.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialOffersSection;
