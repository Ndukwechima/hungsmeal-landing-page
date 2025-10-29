import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import guest1 from "../assets/images/customer1.png";
import guest2 from "../assets/images/customer2.jpeg";
import guest3 from "../assets/images/customer3.jpg";

const testimonials = [
  {
    name: "Blessing U.",
    text: "Everything was perfect — clean rooms, lovely pool, and friendly staff. I’ll definitely come back!",
    rating: 5,
    image: guest1,
  },
  {
    name: "Samuel A.",
    text: "It felt like home, only more peaceful and comfortable. The service was top-notch.",
    rating: 5,
    image: guest2,
  },
  {
    name: "Kemi O.",
    text: "The lounge and pool area are my favorite! Great spot for relaxation.",
    rating: 5,
    image: guest3,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-linear-to-b from-gray-50 to-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-orange-500 mb-4"
        >
          What Our Guests Say
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 max-w-2xl mx-auto mb-16"
        >
          We take pride in providing an unforgettable experience for every guest
          — your comfort and satisfaction are our top priorities.
        </motion.p>

        {/* Testimonials Cards */}
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative bg-white rounded-3xl shadow-xl p-8 w-full md:w-1/3 
              border border-orange-100 hover:shadow-2xl transition duration-300"
            >
              {/* Profile */}
              <div className="flex flex-col items-center mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-gold-400 mb-3"
                />
                <h4 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h4>
                <div className="flex justify-center text-yellow-400 mt-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>

              {/* Review Text */}
              <p className="text-gray-600 italic text-center leading-relaxed">
                “{item.text}”
              </p>

              {/* Decorative Quote Icon */}
              <span className="absolute text-orange-100 text-8xl -top-6 left-4 font-serif select-none">
                “
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

