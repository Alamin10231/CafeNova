import React from "react";
import cappichuno2 from "../../../public/images/cappichuno2.png";
import Lattlexl from "../../../public/images/Lattlexl.png";
import Flatwhite from "../../../public/images/FlatWhite.png";
import Rawcoffee from "../../../public/images/RawCoffee.png";
import Moccacchino from "../../../public/images/Moccacchino.png";

export const Sweets = () => {
  return (
    <div className="px-4 py-4 space-y-4">
      {/* Item 1 */}
      <div className="flex items-center justify-between gap-4">
        <img src={cappichuno2} alt="Choco Tart" className="w-20 h-20 object-cover rounded" />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold whitespace-nowrap mr-2">Choco Tart</h1>
            <div className="border-b border-dotted border-black w-full h-0"></div>
            <span className="ml-2 text-sm font-semibold">$2.50</span>
          </div>
          <p className="text-sm text-start text-gray-800 mt-1">
            Rich chocolate ganache in a flaky pastry base.
          </p>
        </div>
      </div>

      {/* Item 2 */}
      <div className="flex items-center justify-between gap-4">
        <img src={Lattlexl} alt="Cream Puff" className="w-20 h-20 object-cover rounded" />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold whitespace-nowrap mr-2">Cream Puff</h1>
            <div className="border-b border-dotted border-black w-full h-0"></div>
            <span className="ml-2 text-sm font-semibold">$2.20</span>
          </div>
          <p className="text-sm text-start text-gray-800 mt-1">
            Airy pastry filled with fresh whipped cream.
          </p>
        </div>
      </div>

      {/* Item 3 */}
      <div className="flex items-center justify-between gap-4">
        <img src={Flatwhite} alt="Chocolate Éclair" className="w-20 h-20 object-cover rounded" />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold whitespace-nowrap mr-2">Chocolate Éclair</h1>
            <div className="border-b border-dotted border-black w-full h-0"></div>
            <span className="ml-2 text-sm font-semibold">$2.80</span>
          </div>
          <p className="text-sm text-start text-gray-800 mt-1">
            Choux pastry filled with custard and topped with chocolate.
          </p>
        </div>
      </div>

      {/* Item 4 */}
      <div className="flex items-center justify-between gap-4">
        <img src={Rawcoffee} alt="Mini Cheesecake" className="w-20 h-20 object-cover rounded" />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold whitespace-nowrap mr-2">Mini Cheesecake</h1>
            <div className="border-b border-dotted border-black w-full h-0"></div>
            <span className="ml-2 text-sm font-semibold">$3.00</span>
          </div>
          <p className="text-sm text-start text-gray-800 mt-1">
            Personal-sized cheesecake with berry topping.
          </p>
        </div>
      </div>

      {/* Item 5 */}
      <div className="flex items-center justify-between gap-4">
        <img src={Moccacchino} alt="Strawberry Roll" className="w-20 h-20 object-cover rounded" />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold whitespace-nowrap mr-2">Strawberry Roll</h1>
            <div className="border-b border-dotted border-black w-full h-0"></div>
            <span className="ml-2 text-sm font-semibold">$2.60</span>
          </div>
          <p className="text-sm text-start text-gray-800 mt-1">
            Fluffy cake rolled with strawberry cream filling.
          </p>
        </div>
      </div>
    </div>
  );
};
