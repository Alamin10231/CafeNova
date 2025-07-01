import React from "react";
import { motion } from "framer-motion";
import pic1 from "../../../public/images/Caramel Latte.jpg";
import pic2 from "../../../public/images/Hazelnut Mocha.jpg";
import pic3 from "../../../public/images/Iced Vanilla Cold Brew.jpg";
import { NavLink } from "react-router-dom";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

export const HotDeal = () => {
  const deals = [
    {
      img: pic1,
      alt: "Caramel Latte Hot Coffee Deal",
      title: "Caramel Latte",
      desc: "Rich, creamy, and topped with our signature caramel drizzle.",
      link: "order",
    },
    {
      img: pic2,
      alt: "Hazelnut Mocha Hot Deal",
      title: "Hazelnut Mocha",
      desc: "Bold espresso with silky chocolate and hazelnut bliss.",
      link: "order",
    },
    {
      img: pic3,
      alt: "Iced Vanilla Cold Brew Hot Deal",
      title: "Iced Vanilla Cold Brew",
      desc: "Refreshing and smooth with a touch of sweet vanilla.",
      link: "order",
    },
  ];

  return (
    <section className="bg-[#fff8f3] py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-2xl md:text-3xl font-extrabold text-[#5c3e3e] mb-12">
          🔥 Don’t Miss Today’s Hot Deals!
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {deals.map((deal, i) => (
            <motion.div
              key={deal.title}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg rounded-xl overflow-hidden cursor-pointer"
            >
              <img
                src={deal.img}
                alt={deal.alt}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold mb-2 text-[#3e2e2e]">
                  {deal.title}
                </h3>
                <p className="text-sm text-[#6e4f4f] mb-4">{deal.desc}</p>
                <NavLink to={deal.link}>
                  <button className="px-4 py-2 bg-[#5c3e3e] text-white rounded hover:bg-[#3e2e2e] w-full">
                    Order Now
                  </button>
                </NavLink>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
