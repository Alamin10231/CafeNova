import React from 'react';
import { FaSeedling, FaTint, FaFire, FaMugHot, FaLeaf, FaSmile } from 'react-icons/fa';
import coffepng from '../../../public/images/pngcoffee.png';
import { motion } from 'framer-motion';

export const ElementOfCoffee = () => {
  return (
    <div className="py-10 bg-[#fff8f3]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center bg-white p-8 rounded-xl text-[#6e4f4f]">

        {/* ✅ Left Side */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-start space-x-4">
            <FaSeedling className="text-3xl text-[#6e4f4f]" />
            <div>
              <h1 className="text-xl font-bold">Fresh Beans</h1>
              <p className="text-sm">
                We source handpicked beans from organic farms to ensure every cup starts with quality.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <FaTint className="text-3xl text-[#6e4f4f]" />
            <div>
              <h1 className="text-xl font-bold">Pure Water</h1>
              <p className="text-sm">
                Filtered water is used to enhance the aroma and purity of the brew.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <FaFire className="text-3xl text-[#6e4f4f]" />
            <div>
              <h1 className="text-xl font-bold">Roasting Ritual</h1>
              <p className="text-sm">
                Slow roasted with care to bring out deep flavor and smooth texture.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 🟡 Middle Image */}
        <motion.div
          className="flex justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img
            src={coffepng}
            alt="Coffee"
            className="w-56 h-auto object-contain"
          />
        </motion.div>

        {/* ✅ Right Side */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-start space-x-4">
            <FaMugHot className="text-3xl text-[#6e4f4f]" />
            <div>
              <h1 className="text-xl font-bold">Brewed to Perfection</h1>
              <p className="text-sm">
                Brewed with time-tested techniques that bring out the soul of the bean.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <FaLeaf className="text-3xl text-[#6e4f4f]" />
            <div>
              <h1 className="text-xl font-bold">Natural Flavors</h1>
              <p className="text-sm">
                No additives. Just nature's best ingredients for a clean taste.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <FaSmile className="text-3xl text-[#6e4f4f]" />
            <div>
              <h1 className="text-xl font-bold">Served with Love</h1>
              <p className="text-sm">
                Every cup is handcrafted by baristas who care about your experience.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
