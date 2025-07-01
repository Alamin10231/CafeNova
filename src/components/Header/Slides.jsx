import React, { useEffect, useState } from "react";
import headerpic from "../../../public/images/hot-steam-rising-from-coffee-mug-generated-by-ai.jpg";
import headerpic1 from "../../../public/images/delicious-organic-coffee-still-life (1).jpg";
import headerpic2 from "../../../public/images/delicious-organic-coffee-still-life.jpg";
import headerpic3 from "../../../public/images/fresh-coffee-steams-wooden-table-close-up-generative-ai.jpg";

const slides = [
  {
    img: headerpic,
    header: {
      pre: "Discover the true taste of ",
      highlight: "coffee",
      post: " with CafeNova.",
      btn: {
        text: "Order Now",
      },
    },
  },
  {
    img: headerpic1,
    header: {
      pre: "Start your day with ",
      highlight: "fresh brew",
      post: "",
      btn: {
        text: "See More",
      },
    },
  },
  {
    img: headerpic2,
    header: {
      pre: "Savor the aroma of ",
      highlight: "organic blends",
      post: " crafted just for you.",
      btn: {
        text: "Explore",
      },
    },
  },
  {
    img: headerpic3,
    header: {
      pre: "Fresh coffee, ",
      highlight: "every morning",
      post: " to energize your day.",
      btn: {
        text: "Shop Now",
      },
    },
  },
];

export const Slides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically change slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full relative overflow-hidden text-white">
      <div className="carousel w-full h-[800px] relative">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Text Overlay */}
            <div className="absolute top-1/2 left-5 md:left-20 lg:left-52 transform -translate-y-1/2 w-full max-w-xl text-white flex flex-col gap-2 px-4 md:px-0">
              <span className="text-3xl md:text-4xl lg:text-5xl font-semibold">
                {slide.header.pre}
              </span>
              <span className="text-3xl md:text-4xl lg:text-5xl font-semibold text-yellow-400">
                {slide.header.highlight}
              </span>
              <span className="text-3xl md:text-4xl lg:text-5xl font-semibold">
                {slide.header.post}
              </span>
              {slide.header.btn?.text && (
                <a
                  href="#"
                  className="btn mt-6 bg-yellow-500 border-none hover:bg-yellow-600 hover:text-black text-[#5c3e3e] font-semibold px-6 w-max transition-colors duration-300"
                >
                  {slide.header.btn.text}
                </a>
              )}
            </div>

            {/* Slide Image */}
            <img
              src={slide.img}
              alt={`Slide ${index + 1}`}
              className="w-full h-[800px] object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
