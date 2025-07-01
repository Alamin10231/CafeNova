import React from "react";
import menupic from "../../public/images/paperlist.png";
import { NavLink, Outlet } from "react-router-dom";

export const Menu = () => {
  const categories = ["chocolate", "coffee", "sweets", "tea"];

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 menucvrpic blur-sm" />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-white text-center">
        <div className="relative w-[90vw] max-w-[600px] h-[750px] rounded overflow-hidden shadow-xl">
          <img
            src={menupic}
            alt="Menu"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-start p-6 pt-24 text-black overflow-y-auto">
            <ul className="flex flex-wrap gap-4 justify-center mb-2">
              {categories.map((item) => (
                <NavLink
                  key={item}
                  to={item}
                  className={({ isActive }) =>
                    `px-4 py-1 rounded-full border transition-all duration-200 capitalize font-medium inline-block ${
                      isActive
                        ? "bg-green-600 text-white border-green-700"
                        : "bg-white/80 text-black border-gray-400 hover:bg-green-100 hover:text-green-700"
                    }`
                  }
                >
                  {item}
                </NavLink>
              ))}
            </ul>

            <div className="overflow-y-auto w-full px-2 text-center">
              <Outlet />
            </div>

            <button className="mt-4 text-white bg-green-600 px-4 py-2 rounded-full hover:bg-green-700">
              Read More
            </button>
          </div>
        </div>

        <p className="mt-6 max-w-md text-lg text-white">
          Explore our delicious offerings below.
        </p>
      </div>
    </div>
  );
};
