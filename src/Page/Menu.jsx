import React from "react";
import menupic from "../../public/images/paperlist.png";

export const Menu = () => {
  return (
    <div className="relative min-h-screen">
      {/* Blurred background image */}
      <div className="absolute inset-0 menucvrpic blur-sm" />

      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content layer */}
      <div className="relative z-10 flex flex-col items-center pt-20 text-white text-center px-4">
        {/* Image */}
        <img
          src={menupic}
          alt="Menu"
          className="w-40 h-auto max-w-[200px] mb-6"
        />

        {/* Text */}
        <h1 className="text-3xl font-bold mb-2">Welcome to Our Menu</h1>
        <p className="text-lg max-w-xl">
          Discover delicious options made just for you. Scroll down to explore
          our full list of items and specials!
        </p>
      </div>
    </div>
  );
};
