import React from "react";
import { motion } from "framer-motion";
import storyImg from "../../public/images/story.jpg"; // Adjust path if needed

const OurStory = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}   // start invisible and shifted right
      animate={{ opacity: 1, x: 0 }}    // fade in and slide to original position
      transition={{ duration: 1 }}
      className="bg-[#f9f5f2] my-10 text-[#3E2C2C] py-16 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10"
    >
      {/* Left: Image */}
      <div className="md:w-1/2">
        <img
          src={storyImg}
          alt="Our story"
          className="rounded-lg shadow-md w-full h-auto object-cover"
        />
      </div>

      {/* Right: Text */}
      <div className="md:w-1/2 space-y-6">
        <p className="uppercase text-sm text-yellow-700 tracking-widest">
          About Us
        </p>
        <h2 className="text-4xl font-bold">Our Story</h2>
        <p className="text-lg text-[#5c3e3e]">
          CafeNova was born from a passion for rich flavors, cozy conversations,
          and memorable moments. From handpicked beans to handcrafted brews,
          every cup tells a tale of love, warmth, and tradition. We’re not just
          a coffee shop – we’re your daily ritual, your favorite corner, your
          story companion.
        </p>
        <button className="bg-[#6B4F4F] text-white hover:bg-[#5c3e3e] font-semibold px-6 py-2 rounded-md">
          Visit Us
        </button>
      </div>
    </motion.div>
  );
};

export default OurStory;
