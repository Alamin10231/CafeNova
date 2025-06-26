import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { FaStar, FaRegHeart, FaHeart } from "react-icons/fa";

const menuItems = [
  {
    id: 1,
    name: "Cappuccino",
    description: "A rich and foamy espresso blend with steamed milk.",
    price: "$4.50",
    image: "/images/cappuccino.jpg",
    rating: 4.5,
    isNew: true,
  },
  {
    id: 2,
    name: "Iced Latte",
    description: "Smooth espresso served cold with fresh milk and ice.",
    price: "$5.00",
    image: "/images/iced-latte.jpg",
    rating: 4.7,
  },
  {
    id: 3,
    name: "Mocha Delight",
    description: "Chocolate-flavored espresso with whipped cream topping.",
    price: "$5.50",
    image: "/images/mocha.jpg",
    rating: 4.9,
    isPopular: true,
  },
];

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  return (
    <div className="flex items-center space-x-1 text-yellow-400">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={i} />
      ))}
      {halfStar && <FaStar className="opacity-50" />}
      {[...Array(5 - fullStars - (halfStar ? 1 : 0))].map((_, i) => (
        <FaStar key={i} className="text-gray-500" />
      ))}
    </div>
  );
};

const MenuCoffee = () => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  return (
    <div className="bg-[#3E2C2C] py-20 px-6 md:px-20 text-white">
      {/* Section Title */}
      <div className="text-center mb-16">
        <p className="text-yellow-500 uppercase tracking-widest text-sm font-semibold">
          Our Menu
        </p>
        <h2 className="text-4xl font-extrabold mt-2 tracking-wide">Crafted With Love</h2>
        <p className="text-gray-300 max-w-xl mx-auto mt-4 text-lg">
          Explore our delicious coffee selection, made with premium beans and perfected with care.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid gap-12 md:grid-cols-3">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="relative bg-[#4e3737] rounded-2xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 border-2 border-transparent hover:border-yellow-500 cursor-pointer group text-white"
          >
            {/* Badge */}
            {(item.isNew || item.isPopular) && (
              <span
                className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white ${
                  item.isNew ? "bg-green-500" : "bg-yellow-500"
                }`}
              >
                {item.isNew ? "New" : "Popular"}
              </span>
            )}

            {/* Image Container */}
            <div className="relative overflow-hidden h-52 rounded-t-2xl">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-40"></div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4 bg-[#fef9f4]">
              <h3 className="text-2xl font-bold tracking-tight text-[#4e3737] flex justify-between items-center">
                {item.name}
                <button
                  onClick={() => toggleFavorite(item.id)}
                  className="ml-2 text-red-500 hover:text-red-600 focus:outline-none"
                  aria-label="Add to favorites"
                >
                  {favorites.includes(item.id) ? <FaHeart /> : <FaRegHeart />}
                </button>
              </h3>

              {/* Star Rating */}
              <StarRating rating={item.rating} />

              <p className="text-[#4e3737] text-base leading-relaxed">{item.description}</p>

              <div className="flex justify-between items-center mt-6">
                <span className="text-xl font-extrabold text-yellow-400 tracking-wide">
                  {item.price}
                </span>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-5 py-2 rounded-xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

     
    </div>
  );
};

export default MenuCoffee;
