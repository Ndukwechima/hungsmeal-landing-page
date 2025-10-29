import { motion } from "framer-motion";
import aboutImg from "../assets/images/about-img.jpeg"

const About = () => {
  return (
    <section
      id="about-us"
      className="relative w-full py-20 bg-gray-50 overflow-hidden"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative w-full md:w-1/2"
        >
          <img
            src={aboutImg} // replace with your hotel image
            alt="About HungsMeal Hotel"
            className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
          />
          {/* Decorative gold border */}
          <div className="absolute -bottom-4 -right-4 w-full h-full
           border-4 border-[#D4AF37] rounded-2xl -z-10"></div>
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About{" "}
            <span className="text-[#D4AF37]">HungsMeal Hotel & Suites</span>
          </h2>

          <div className="w-20 h-1 bg-[#F97316] mx-auto md:mx-0 mb-6 rounded-full"></div>

          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Nestled in the heart of Ikotun, HungsMeal Hotel & Suites offers a
            perfect blend of comfort, style, and hospitality. Whether you’re
            here for business, leisure, or a special event, our goal is to make
            your stay unforgettable.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            At HungsMeal, every guest is treated like family — from the moment
            you walk through our doors, you’ll feel at home in an environment
            designed for relaxation, class, and peace of mind. Our dedicated
            staff, clean environment, and modern facilities make us the
            preferred choice for guests who value excellence and comfort.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
