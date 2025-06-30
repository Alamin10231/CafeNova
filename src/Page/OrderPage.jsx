import { useState } from "react";
import { Link } from "react-router-dom";

const fakeMenu = [
  {
    id: 1,
    name: "Cappuccino",
    image: "/images/cappuccino.jpg",
    price: 180,
  },
  {
    id: 2,
    name: "Caramel Latte",
    image: "/images/Caramel Latte.jpg",
    price: 150,
  },
  {
    id: 3,
    name: "Hazelnut Mocha",
    image: "/images/Hazelnut Mocha.jpg",
    price: 100,
  },
  {
    id: 4,
    name: "iced-latte",
    image: "/images/iced-latte.jpg",
    price: 100,
  },
];

const OrderPage = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const existing = cart.find((i) => i.id === item.id);
    if (existing) {
      const updated = cart.map((i) =>
        i.id === item.id ? { ...i, qty: i.qty + 1 } : i
      );
      setCart(updated);
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div className="min-h-screen bg-[#fff8f3] p-6">
      <h2 className="text-4xl font-bold text-center text-[#5c3e3e] mb-10">
        Order Your Favorites ☕🍰
      </h2>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Menu Section */}
        <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
          {fakeMenu.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow p-4 flex flex-col items-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="mt-4 text-xl font-semibold text-[#5c3e3e]">
                {item.name}
              </h3>
              <p className="text-[#8b5e3c] font-bold mt-1">৳{item.price}</p>
              <button
                onClick={() => addToCart(item)}
                className="mt-4 px-4 py-2 bg-[#5c3e3e] text-white rounded hover:bg-[#3e2a2a]"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Cart Section */}
        <div className="bg-white p-6 rounded-lg shadow h-fit sticky top-24">
          <h3 className="text-2xl font-bold text-[#5c3e3e] mb-4">Your Cart 🛒</h3>
          {cart.length === 0 ? (
            <p className="text-gray-500">No items yet.</p>
          ) : (
            <ul className="space-y-3">
              {cart.map((item) => (
                <li key={item.id} className="flex justify-between">
                  <span>
                    {item.name} x {item.qty}
                  </span>
                  <span>৳{item.qty * item.price}</span>
                </li>
              ))}
            </ul>
          )}
          <hr className="my-4" />
          <p className="font-bold text-[#5c3e3e] text-lg">Total: ৳{total}</p>
         <Link to="ordersuccess">
          <button
            className="mt-4 w-full bg-[#8b5e3c] text-white py-2 rounded hover:bg-[#5c3e3e]"
            disabled={cart.length === 0}
          >
            Place Order
          </button>
         </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
