import React from "react";
import login from "../../public/images/login.jpg"
const Contact = () => {
  return (
    <div className="min-h-screen flex     contactcv ">
   <div className="flex flex-col shadow-md p-4 rounded-lg overflow-hidden md:flex-row w-[80%] mx-auto md:h-[700px] py-10 my-20">
                       {/* Left Side: Image */}
      <div className="md:w-1/2 w-full">
        <img
          src={login}
          alt="Cafe ambiance"
          className="w-full md:h-[620px] object-cover  "
        />
      </div>

      {/* Right Side: Form */}
      <div className="md:w-1/2 w-full bg-white shadow-lg  bg-opacity-70  flex items-center justify-center p-10">
        <form className="w-full max-w-md space-y-6">
          <h2 className="text-3xl font-bold text-[#3e2e2e]">Reserve Your Table</h2>

          <div>
            <label className="block mb-1 text-[#5c3e3e]">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-[#d4a373]"
            />
          </div>

          <div>
            <label className="block mb-1 text-[#5c3e3e]">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-[#d4a373]"
            />
          </div>

          <div>
            <label className="block mb-1 text-[#5c3e3e]">Date</label>
            <input
              type="date"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-[#d4a373]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#5c3e3e] text-white font-semibold rounded-lg hover:bg-[#3e2e2e] transition duration-300"
          >
            Book Now
          </button>
        </form>
      </div>
   </div>
    </div>
  );
};

export default Contact;
