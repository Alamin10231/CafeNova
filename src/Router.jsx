import { createBrowserRouter, Navigate } from "react-router-dom"; // ← dom!

import { Home } from "./components/Home/Home";
import { Header } from "./components/Header/Header";
import OurStory from "./components/OurStory";
// import MenuCoffee from "./Page/MenuCoffee";
import Moment from "./Page/Moment";
import Contact from "./Page/Contact";
import Alamingpt from "./components/Home/Alamingpt";
import { Menu } from "./Page/Menu";
import { Choclate } from "./components/Menu/Choclate";
import { Coffee } from "./components/Menu/Coffee";
import { Tea } from "./components/Menu/Tea";
import { Sweets } from "./components/Menu/Sweets";
import Chatbot from "./Shared/Chatbot";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/", // ← চাইলে /slides রেখেই দাও
        element: <Header></Header>,
      },
      {
        path: "/", // ← চাইলে /slides রেখেই দাও
        element: <Chatbot></Chatbot>,
      },
      {
        path: "/ourstory", // ← চাইলে /slides রেখেই দাও
        element: <OurStory></OurStory>,
      },
      {
        path: "menu", // ← চাইলে /slides রেখেই দাও
        element: <Menu></Menu>,
        children: [
          {
            index: true,
            element: <Navigate to="choclate" replace />,
          },
          {
            path: "choclate",
            element: <Choclate></Choclate>,
          },
          {
            path: "coffee",
            element: <Coffee></Coffee>,
          },
          {
            path: "sweets",
            element: <Sweets></Sweets>,
          },
          {
            path: "tea",
            element: <Tea></Tea>,
          },
        ],
      },

      // {
      //   path: "/menu",
      //   element: <MenuCoffee />,
      //   children: [
      //     {
      //       path: "coffee",
      //       element: <MenuCoffee />,
      //     },
      //     {
      //       path: "dessert", // optional route
      //       element: <div>Desserts coming soon</div>,
      //     },
      //   ],
      // },
      {
        path: "/moments", // ← চাইলে /slides রেখেই দাও
        element: <Moment></Moment>,
      },
      {
        path: "/contact", // ← চাইলে /slides রেখেই দাও
        element: <Contact></Contact>,
      },
      {
        path: "/askai", // ← চাইলে /slides রেখেই দাও
        element: <Alamingpt></Alamingpt>,
      },
    ],
  },
]);
