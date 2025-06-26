import React from "react";
import coffeeimage from "../../../public/images/coffeemachineoffer.jpg";

const CoffeeMachineOffer = () => {
  return (
    <div className="bg-[#3E2C2C] py-12 px-6">
      <div className="bg-white text-[#3E2C2C] shadow-xl rounded-md px-6 md:px-20 py-10 flex flex-col md:flex-row items-center gap-10 md:w-[70%] mx-auto border border-[#e8ddd6]">

        {/* Left Side: Offer Text */}
        <div className="md:w-1/2 space-y-5">
          <span className="inline-block bg-yellow-400 text-[#3E2C2C] px-3 py-1 rounded-full text-xs font-semibold uppercase">
            50% OFF
          </span>
          <h1 className="text-4xl font-bold leading-snug">
            Get Your Perfect <span className="text-yellow-500">Coffee Machine</span>
          </h1>
          <p className="text-lg text-[#6e4f4f]">
            Enjoy café-style brewing at home! For a limited time only, grab our best-selling coffee machine at 50% off. Don’t miss the deal—crafted for true coffee lovers.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-md transition">
            Grab the Deal
          </button>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={coffeeimage}
            alt="Coffee Machine Offer"
            className="rounded-lg shadow-lg w-[350px] hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default CoffeeMachineOffer;
