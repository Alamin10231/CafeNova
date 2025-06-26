import React from "react";
import Navbar from "../../Shared/Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "../../Shared/Footer";


export const Home = () => {
  return (
    <div
      className="bg-coffeegradient mx-auto
    "
    >
      <Navbar></Navbar>
      <Outlet></Outlet>
      {/* <Slides></Slides> */}
      <Footer></Footer>
    </div>
  );
};
