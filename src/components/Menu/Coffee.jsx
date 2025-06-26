import React from "react";
import cappichuno2 from "../../../public/images/cappichuno2.png";
import Lattlexl from "../../../public/images/Lattlexl.png";
import Flatwhite from "../../../public/images/FlatWhite.png";
import Rawcoffee from "../../../public/images/RawCoffee.png";
import Moccacchino from "../../../public/images/Moccacchino.png";

export const Coffee = () => {
  return (
    <div className="px-4 py-4 space-y-4">
      {/* Item 1 */}
      <div className="flex items-center justify-between gap-4">
        <img src={cappichuno2} alt="" className="w-20 h-20 object-cover rounded" />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold whitespace-nowrap mr-2">Espresso Shot</h1>
            <div className="border-b border-dotted border-black w-full h-0"></div>
            <span className="ml-2 text-sm font-semibold">$2.50</span>
          </div>
          <p className="text-sm text-start text-gray-800 mt-1">
            A strong, rich shot of pure espresso.
          </p>
        </div>
      </div>

      {/* Item 2 */}
      <div className="flex items-center justify-between gap-4">
        <img src={Lattlexl} alt="" className="w-20 h-20 object-cover rounded" />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold whitespace-nowrap mr-2">Americano</h1>
            <div className="border-b border-dotted border-black w-full h-0"></div>
            <span className="ml-2 text-sm font-semibold">$3.00</span>
          </div>
          <p className="text-sm text-start text-gray-800 mt-1">
            Smooth hot water blended with espresso.
          </p>
        </div>
      </div>

      {/* Item 3 */}
      <div className="flex items-center justify-between gap-4">
        <img src={Flatwhite} alt="" className="w-20 h-20 object-cover rounded" />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold whitespace-nowrap mr-2">Iced Coffee</h1>
            <div className="border-b border-dotted border-black w-full h-0"></div>
            <span className="ml-2 text-sm font-semibold">$3.70</span>
          </div>
          <p className="text-sm text-start text-gray-800 mt-1">
            Refreshing brewed coffee served over ice.
          </p>
        </div>
      </div>

      {/* Item 4 */}
      <div className="flex items-center justify-between gap-4">
        <img src={Rawcoffee} alt="" className="w-20 h-20 object-cover rounded" />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold whitespace-nowrap mr-2">Cold Brew</h1>
            <div className="border-b border-dotted border-black w-full h-0"></div>
            <span className="ml-2 text-sm font-semibold">$4.20</span>
          </div>
          <p className="text-sm text-start text-gray-800 mt-1">
            Slow-steeped coffee for a smoother taste.
          </p>
        </div>
      </div>

      {/* Item 5 */}
      <div className="flex items-center justify-between gap-4">
        <img src={Moccacchino} alt="" className="w-20 h-20 object-cover rounded" />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold whitespace-nowrap mr-2">Macchiato</h1>
            <div className="border-b border-dotted border-black w-full h-0"></div>
            <span className="ml-2 text-sm font-semibold">$3.90</span>
          </div>
          <p className="text-sm text-start text-gray-800 mt-1">
            Espresso topped with a dollop of milk foam.
          </p>
        </div>
      </div>
    </div>
  );
};
