import React from "react";
import pic1 from "../../../public/images/Caramel Latte.jpg"
import pic2 from "../../../public/images/Hazelnut Mocha.jpg"
import pic3 from "../../../public/images/Iced Vanilla Cold Brew.jpg"

export const HotDeal = () => {
  return (
    <div>
      <section className="bg-[#fff8f3] py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-2xl md:text-3xl font-extrabold text-[#5c3e3e] mb-12">
            🔥 Don’t Miss Today’s Hot Deals!
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform hover:scale-105">
              <img
                src={pic1}
                alt="Hot Coffee Deal"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold mb-2 text-[#3e2e2e]">
                  Caramel Latte
                </h3>
                <p className="text-sm text-[#6e4f4f] mb-4">
                  Rich, creamy, and topped with our signature caramel drizzle.
                </p>
                <button className="px-4 py-2 bg-[#5c3e3e] text-white rounded hover:bg-[#3e2e2e]">
                  Order Now
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform hover:scale-105">
              <img
               src={pic2}
                alt="Hot Deal"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold mb-2 text-[#3e2e2e]">
                  Hazelnut Mocha
                </h3>
                <p className="text-sm text-[#6e4f4f] mb-4">
                  Bold espresso with silky chocolate and hazelnut bliss.
                </p>
                <button className="px-4 py-2 bg-[#5c3e3e] text-white rounded hover:bg-[#3e2e2e]">
                  Order Now
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform hover:scale-105">
              <img
                src={pic3}
                alt="Hot Deal"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold mb-2 text-[#3e2e2e]">
                  Iced Vanilla Cold Brew
                </h3>
                <p className="text-sm text-[#6e4f4f] mb-4">
                  Refreshing and smooth with a touch of sweet vanilla.
                </p>
                <button className="px-4 py-2 bg-[#5c3e3e] text-white rounded hover:bg-[#3e2e2e]">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
