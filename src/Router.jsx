import { createBrowserRouter } from "react-router-dom"; // ← dom!

import { Home } from "./components/Home/Home";
import { Header } from "./components/Header/Header";
import OurStory from "./components/OurStory";
// import MenuCoffee from "./Page/MenuCoffee";
import Moment from "./Page/Moment";
import Contact from "./Page/Contact";
import Alamingpt from "./components/Home/Alamingpt";
import { Menu } from "./Page/Menu";

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
        path: "/ourstory", // ← চাইলে /slides রেখেই দাও
        element: <OurStory></OurStory>,
      },
      {
        path: "/menu", // ← চাইলে /slides রেখেই দাও
        element: <Menu></Menu>,
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
