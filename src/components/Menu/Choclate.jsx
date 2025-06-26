import React from "react";
import cappichuno2 from "../../../public/images/cappichuno2.png";
import Lattlexl from "../../../public/images/Lattlexl.png";
import Flatwhite from "../../../public/images/FlatWhite.png";
import Rawcoffee from "../../../public/images/RawCoffee.png";
import Moccacchino from "../../../public/images/Moccacchino.png";

export const Choclate = () => {
  return (
    <div className="px-4 py-4 space-y-4">
      {/* Item 1 */}
      <div className="flex items-center justify-between gap-4">
        <img src={cappichuno2} alt="" className="w-20 h-20 object-cover rounded" />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold whitespace-nowrap mr-2">Cappuccino Classic</h1>
            <div className="border-b border-dotted border-black w-full h-0"></div>
            <span className="ml-2 text-sm font-semibold">$3.20</span>
          </div>
          <p className="text-sm text-start text-gray-800 mt-1">
            Rich espresso with creamy steamed milk and foam.
          </p>
        </div>
      </div>

      {/* Item 2 */}
      <div className="flex items-center justify-between gap-4">
        <img src={Lattlexl} alt="" className="w-20 h-20 object-cover rounded" />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold whitespace-nowrap mr-2">Latte XL</h1>
            <div className="border-b border-dotted border-black w-full h-0"></div>
            <span className="ml-2 text-sm font-semibold">$4.50</span>
          </div>
          <p className="text-sm text-start text-gray-800 mt-1">
            Extra large latte with double shot and whole milk.
          </p>
        </div>
      </div>

      {/* Item 3 */}
      <div className="flex items-center justify-between gap-4">
        <img src={Flatwhite} alt="" className="w-20 h-20 object-cover rounded" />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold whitespace-nowrap mr-2">Flat White</h1>
            <div className="border-b border-dotted border-black w-full h-0"></div>
            <span className="ml-2 text-sm font-semibold">$3.80</span>
          </div>
          <p className="text-sm text-start text-gray-800 mt-1">
            Smooth blend of espresso and silky microfoam.
          </p>
        </div>
      </div>

      {/* Item 4 */}
      <div className="flex items-center justify-between gap-4">
        <img src={Rawcoffee} alt="" className="w-20 h-20 object-cover rounded" />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold whitespace-nowrap mr-2">Raw Coffee Beans</h1>
            <div className="border-b border-dotted border-black w-full h-0"></div>
            <span className="ml-2 text-sm font-semibold">$2.00</span>
          </div>
          <p className="text-sm text-start text-gray-800 mt-1">
            Unroasted Arabica beans for home grinding.
          </p>
        </div>
      </div>

      {/* Item 5 */}
      <div className="flex items-center justify-between gap-4">
        <img src={Moccacchino} alt="" className="w-20 h-20 object-cover rounded" />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold whitespace-nowrap mr-2">Moccacchino</h1>
            <div className="border-b border-dotted border-black w-full h-0"></div>
            <span className="ml-2 text-sm font-semibold">$4.00</span>
          </div>
          <p className="text-sm text-start text-gray-800 mt-1">
            A chocolate-infused cappuccino topped with frothy milk.
          </p>
        </div>
      </div>
    </div>
  );
};
