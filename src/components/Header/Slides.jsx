import React, { useEffect, useState } from "react";
import headerpic from "../../../public/images/hot-steam-rising-from-coffee-mug-generated-by-ai.jpg";
import headerpic1 from "../../../public/images/delicious-organic-coffee-still-life (1).jpg";
import headerpic2 from "../../../public/images/delicious-organic-coffee-still-life.jpg";
import headerpic3 from "../../../public/images/fresh-coffee-steams-wooden-table-close-up-generative-ai.jpg";

const images = [headerpic, headerpic1, headerpic2, headerpic3];

export const Slides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  

 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000); // every 3 seconds

    return () => clearInterval(interval);
  }, []);
  // src/config/headerContent.js
const slides = [
  {
    img: headerpic,
    header: {
      pre: "Discover the true taste of ",
      highlight: "coffee",
      post: " with CafeNova.",
      btn: {
        text: "Order Now",
        // link: "/",
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
        // link: "/",
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
        // link: "/",
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
        // link: "/",
      },
    },
  },
];


  return (
    <div className="w-full text-white relative overflow-hidden ">
      <div className="carousel w-full h-[800px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item w-full absolute transition-opacity duration-700 ease-in-out ${
              currentSlide === index ? "opacity-100 z-10 " : "opacity-0 z-0"
            }`}
          >
         <div className="absolute w-full md:w-1/2 left-20 md:left-52 top-1/2 transform -translate-y-1/2 text-white flex flex-col gap-2">
  <span className="flex text-3xl md:text-4xl lg:text-5xl font-semibold">
    {slide.header.pre}
  </span>
  <span className="flex text-3xl md:text-4xl lg:text-5xl font-semibold  text-yellow-400">
    {slide.header.highlight}
  </span>
  <span className="flex text-3xl md:text-4xl lg:text-5xl  font-semibold">
    {slide.header.post}
  </span>
  <a
    href="#"
    className="btn border-none mt-6 bg-yellow-500 hover:bg-yellow-600 hover:text-black text-[#5c3e3e] font-semibold px-6 w-max"
  >
    {slide.header.btn?.text}
  </a>
</div>

          
            <img src={slide.img} className="w-full h-[800px] object-cover" />
          </div>
        ))}
      </div>

    
    </div>
  );
};
