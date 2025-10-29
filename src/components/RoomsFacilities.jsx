import { motion } from "framer-motion";
import {
  FiWifi,
  FiTv,
  FiWind,
  FiHome,
  FiShield,
  FiBatteryCharging,
  FiCoffee,
  FiUsers,
  FiDroplet,
  FiMusic,
} from "react-icons/fi";

const RoomsFacilities = () => {
  return (
    <section
      id="rooms-&-facilities"
      className="relative w-full py-20 bg-white text-gray-800 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Comfortable Rooms &{" "}
            <span className="text-[#D4AF37]">Quality Facilities</span>
          </h2>
          <div className="w-20 h-1 bg-[#F97316] mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Our rooms are tastefully designed to give you the comfort you
            deserve. Whether it’s a quick getaway or a long stay, each room
            offers a blend of elegance and warmth — fitted with everything you
            need to feel at home.
          </p>
        </motion.div>

        {/* Room Features */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mb-16"
        >
          {[
            { icon: <FiWind />, label: "Air-Conditioned Rooms" },
            { icon: <FiTv />, label: "Flat & Smart TVs" },
            { icon: <FiWifi />, label: "Free Wi-Fi" },
            { icon: <FiHome />, label: "Room Service" },
            { icon: <FiBatteryCharging />, label: "Steady Power Supply" },
            { icon: <FiShield />, label: "24/7 Security" },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08 }}
              className="flex flex-col items-center text-center p-4 rounded-2xl bg-gray-50 shadow-sm hover:shadow-lg transition duration-300"
            >
              <div className="text-[#F97316] text-3xl mb-3">{item.icon}</div>
              <p className="text-gray-800 font-medium text-sm">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Hotel Facilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold mb-6 text-[#D4AF37]">
            Facilities within the Hotel
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FiCoffee />,
                title: "VIP Lounge",
                desc: "Relax and unwind in our exclusive VIP Lounge.",
              },
              {
                icon: <FiUsers />,
                title: "Classic Hall",
                desc: "Host your events, meetings, or celebrations in style.",
              },
              {
                icon: <FiDroplet />,
                title: "Swimming Pool",
                desc: "Take a refreshing dip or enjoy a poolside chill time.",
              },
              {
                icon: <FiMusic />,
                title: "Restaurant & Bar",
                desc: "Delight your taste buds with good food and drinks.",
              },
              {
                icon: <FiHome />,
                title: "Spacious Parking Lot",
                desc: "Ample and secure parking space for all our guests.",
              },
              {
                icon: <FiShield />,
                title: "Strong Security",
                desc: "Your safety is our top priority — 24/7 protection.",
              },
            ].map((facility, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-lg transition duration-300"
              >
                <div className="text-[#F97316] text-3xl mb-3 flex justify-center">
                  {facility.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {facility.title}
                </h4>
                <p className="text-gray-600 text-sm">{facility.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RoomsFacilities;
