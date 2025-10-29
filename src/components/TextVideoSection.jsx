import vid from '../assets/videos/hungs-hero-video.mp4'
const TextVideoSection = () => {
  return (
    <section className="w-full py-12 px-6">
      <div className="max-w-[1500px] mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Text */}
        <div>
          <h2 className="text-3xl text-[#D4AF37] md:text-4xl font-semibold mb-4">
            Our Brand Story &<p>Room Types</p>
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Add your descriptive text here. This can be details about your
            brand, story, product or whatever you want the user to know. Keep it
            simple and clear for easy reading.
          </p>

          <button className="bg-[#D4AF37] text-white px-5 py-3 rounded-md hover:bg-orange-400 transition">
            Learn More
          </button>
        </div>

        {/* Right Video */}
        <div className="w-full sm:w-[80%]">
          <video
            src={vid}
            className="w-full rounded-lg shadow-lg"
            controls
          />
        </div>
      </div>
    </section>
  );
};

export default TextVideoSection;
