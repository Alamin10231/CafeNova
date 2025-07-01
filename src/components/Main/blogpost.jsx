import React from "react";
import { motion } from "framer-motion";
import blogimg from "../../../public/images/mainright.jpg";

const BlogPost = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}           // start invisible
      animate={{ opacity: 1 }}           // animate to visible
      transition={{ duration: 1 }}       // animation duration 1 second
      className="bg-[#3E2C2C] text-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10"
    >
      {/* Left Side: Text Content */}
      <div className="md:w-1/2 space-y-6">
        <p className="uppercase tracking-widest text-yellow-400 text-sm">
          From Our Blog
        </p>
        <h1 className="text-4xl font-bold leading-snug">
          Brewing Stories Over <span className="text-yellow-400">Coffee</span>
        </h1>
        <p className="text-lg text-gray-300">
          Dive into the aromatic world of CaféNova. Discover how we source,
          roast, and serve the perfect cup every day. Whether you're a casual
          sipper or a passionate connoisseur, our stories will warm your heart.
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-md">
          Read More
        </button>
      </div>

      {/* Right Side: Image */}
      <div className="md:w-1/2">
        <img
          src={blogimg}
          alt="Coffee Blog"
          className="rounded-lg shadow-lg w-full h-auto object-cover"
        />
      </div>
    </motion.div>
  );
};

export default BlogPost;
