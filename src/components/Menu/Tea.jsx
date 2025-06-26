import React from "react";
import cappichuno2 from "../../../public/images/cappichuno2.png";
import Lattlexl from "../../../public/images/Lattlexl.png";
import Flatwhite from "../../../public/images/FlatWhite.png";
import Rawcoffee from "../../../public/images/RawCoffee.png";
import Moccacchino from "../../../public/images/Moccacchino.png";

export const Tea = () => {
  return (
    <div className="px-4 py-4 space-y-4">
      {/* Item 1 */}
      <div className="flex items-center justify-between gap-4">
        <img src={cappichuno2} alt="Green Tea" className="w-20 h-20 object-cover rounded" />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold whitespace-nowrap mr-2">Green Tea</h1>
            <div className="border-b border-dotted border-black w-full h-0"></div>
            <span className="ml-2 text-sm font-semibold">$1.80</span>
          </div>
          <p className="text-sm text-start text-gray-800 mt-1">
            Light and refreshing with antioxidants.
          </p>
        </div>
      </div>

      {/* Item 2 */}
      <div className="flex items-center justify-between gap-4">
        <img src={Lattlexl} alt="Milk Tea" className="w-20 h-20 object-cover rounded" />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold whitespace-nowrap mr-2">Milk Tea</h1>
            <div className="border-b border-dotted border-black w-full h-0"></div>
            <span className="ml-2 text-sm font-semibold">$2.30</span>
          </div>
          <p className="text-sm text-start text-gray-800 mt-1">
            Black tea blended with creamy milk.
          </p>
        </div>
      </div>

      {/* Item 3 */}
      <div className="flex items-center justify-between gap-4">
        <img src={Flatwhite} alt="Lemon Tea" className="w-20 h-20 object-cover rounded" />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold whitespace-nowrap mr-2">Lemon Tea</h1>
            <div className="border-b border-dotted border-black w-full h-0"></div>
            <span className="ml-2 text-sm font-semibold">$1.90</span>
          </div>
          <p className="text-sm text-start text-gray-800 mt-1">
            Zesty and soothing tea with a hint of lemon.
          </p>
        </div>
      </div>

      {/* Item 4 */}
      <div className="flex items-center justify-between gap-4">
        <img src={Rawcoffee} alt="Masala Chai" className="w-20 h-20 object-cover rounded" />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold whitespace-nowrap mr-2">Masala Chai</h1>
            <div className="border-b border-dotted border-black w-full h-0"></div>
            <span className="ml-2 text-sm font-semibold">$2.40</span>
          </div>
          <p className="text-sm text-start text-gray-800 mt-1">
            Traditional spiced tea with a strong aroma.
          </p>
        </div>
      </div>

      {/* Item 5 */}
      <div className="flex items-center justify-between gap-4">
        <img src={Moccacchino} alt="Iced Hibiscus" className="w-20 h-20 object-cover rounded" />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold whitespace-nowrap mr-2">Iced Hibiscus</h1>
            <div className="border-b border-dotted border-black w-full h-0"></div>
            <span className="ml-2 text-sm font-semibold">$2.10</span>
          </div>
          <p className="text-sm text-start text-gray-800 mt-1">
            Floral and tangy iced tea with a fruity twist.
          </p>
        </div>
      </div>
    </div>
  );
};
