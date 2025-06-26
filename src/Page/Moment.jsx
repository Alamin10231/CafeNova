import React from "react";
import moment from '../../public/images/momentpic.jpg'
const Moment = () => {
  return (
    <section className="py-16 bg-[#fef9f4] text-[#3e2e2e] my-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">A Moment to Savor</h2>
        <p className="mb-10 max-w-2xl mx-auto text-lg">
          At CafeNova, we believe in capturing the little joys – a shared smile, the aroma of a fresh brew, or the first sip on a rainy morning. Here's a glimpse into a cherished moment from our café.
        </p>
        <div className="relative group max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-xl">
          <img
            src={moment}
            alt="Cafe moment"
            className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white p-6">
            <h3 className="text-2xl font-semibold">Sunset Brews & Stories</h3>
            <p className="mt-2 text-sm max-w-md">
              This evening was unforgettable – a spontaneous open mic night and the best caramel latte we’ve served.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Moment;
