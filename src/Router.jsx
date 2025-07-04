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
import LoginPage from "./components/Home/LoginPage";
import SignUpPage from "./components/Home/SignUppage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import NotFound from "./components/NotFound/NotFound";
import OrderPage from "./Page/OrderPage";
import OrderSuccess from "./components/OrderSuccess/OrderSuccess";
import AddCard from "./Page/AddCard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound></NotFound>,
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
        path: "login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "signup",
        element: <SignUpPage></SignUpPage>,
      },
      {
        path: "addcards",
        element: (
          <PrivateRoute>
            <AddCard></AddCard>
          </PrivateRoute>
        ),
      },
      {
        path: "order",
        children: [
          {
            index: true,
            element: (
              <PrivateRoute>
                <OrderPage />
              </PrivateRoute>
            ),
          },
          {
            path: "ordersuccess",
            element: (
              <PrivateRoute>
                <OrderSuccess />
              </PrivateRoute>
            ),
          },
        ],
      },

      // {
      //   path: "ordersuccess",
      //   element: (
      //     <PrivateRoute>
      //       {" "}
      //       <OrderSuccess></OrderSuccess>
      //     </PrivateRoute>
      //   ),
      // },
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
