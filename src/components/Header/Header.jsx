import React from "react";
import { Slides } from "./Slides";
import BlogPost from "../Main/blogpost";
import { HotDeal } from "../Home/HotDeal";
import { ElementOfCoffee } from "../Home/ElementOfCoffee";
import CoffeeMachineOffer from "../Home/CoffeeMachineOffer";
import MenuCoffee from "../Home/MenuCoffee";
import Chatbot from "../../Shared/Chatbot";



export const Header = () => {
  return (
    <div>
      <Slides></Slides>

      <BlogPost></BlogPost>
      <HotDeal></HotDeal>
      <CoffeeMachineOffer></CoffeeMachineOffer>
      <ElementOfCoffee></ElementOfCoffee>
      <MenuCoffee></MenuCoffee>
      {/* <Alamingpt></Alamingpt> */}
      <Chatbot></Chatbot>
    </div>
  );
};
