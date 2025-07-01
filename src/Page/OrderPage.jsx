import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const OrderPage = () => {
  const [activeTab, setActiveTab] = useState("All Items");
  const [menuData, setMenuData] = useState([]);
  const [cart, setCart] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const navigate = useNavigate();

  // Backend থেকে ডেটা আনছো
  useEffect(() => {
    fetchMenuData();
  }, []);

  // ডেটা ফেচ করার ফাংশন, যেটা ডিলিটের পরও কল করবে UI আপডেটের জন্য
  const fetchMenuData = () => {
    fetch("http://localhost:5000/menuCards")
      .then((res) => res.json())
      .then((data) => setMenuData(data))
      .catch((err) => console.error("Failed to fetch:", err));
  };

  const categories = ["All Items", ...new Set(menuData.map((item) => item.category))];

  const currentItems =
    activeTab === "All Items"
      ? menuData
      : menuData.filter((item) => item.category === activeTab);

  const addToCart = (item) => {
    const existing = cart.find((i) => i.name === item.name);
    if (existing) {
      const updated = cart.map((i) =>
        i.name === item.name ? { ...i, qty: i.qty + 1 } : i
      );
      setCart(updated);
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  // Delete handler with SweetAlert2
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to delete this item?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });

    if (!result.isConfirmed) return;

    try {
      const res = await fetch(`http://localhost:5000/menuCards/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      if (data.deletedCount > 0) {
        await Swal.fire("Deleted!", "Item deleted successfully.", "success");
        fetchMenuData();
        setCart(cart.filter((item) => item._id !== id));
      } else {
        await Swal.fire("Failed", "Failed to delete item.", "error");
      }
    } catch (error) {
      console.error("Delete failed", error);
      await Swal.fire("Error", "Failed to delete item.", "error");
    }
  };

  const placeOrder = () => {
    const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
    const order = {
      customerName,
      items: cart,
      total,
    };
    navigate("ordersuccess", { state: order });
    setCart([]);
    setCustomerName("");
  };

  return (
    <div className="min-h-screen bg-[#fff8f3] p-6">
      <h2 className="text-3xl font-bold text-center text-[#5c3e3e] mb-8">
        Explore Our Menu 🍽️
      </h2>

      {/* Tabs */}
      <div className="flex flex-wrap gap-4 justify-center mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-5 py-2 rounded-full font-medium transition-all duration-200 
              ${
                activeTab === category
                  ? "bg-[#5c3e3e] text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Items */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
          {currentItems.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-lg shadow p-4 flex flex-col"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded"
              />
              <div className="flex justify-between items-center mt-4">
                <div>
                  <h3 className="text-lg font-semibold text-[#5c3e3e]">
                    {item.name}
                  </h3>
                  <p className="text-[#8b5e3c] font-bold">৳{item.price}</p>
                </div>
                <button
                  onClick={() => addToCart(item)}
                  className="px-4 py-2 bg-[#5c3e3e] text-white rounded hover:bg-[#3e2a2a] text-sm"
                >
                  Add to Cart
                </button>
              </div>
              <button
                onClick={() => handleDelete(item._id)}
                className="text-red-500 hover:text-red-700 text-xs mt-2 self-end"
              >
                Delete
              </button>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="bg-white shadow-md p-6 rounded h-fit sticky top-24">
          <h3 className="text-2xl font-bold text-[#5c3e3e] mb-4">
            Your Cart 🛒
          </h3>
          {cart.length === 0 ? (
            <p className="text-gray-500">No items yet.</p>
          ) : (
            <>
              <ul className="space-y-3">
                {cart.map((item, index) => (
                  <li key={index} className="flex justify-between">
                    <span>
                      {item.name} x {item.qty}
                    </span>
                    <span>৳{item.qty * item.price}</span>
                  </li>
                ))}
              </ul>
              <hr className="my-4" />
              <p className="font-bold text-lg text-[#5c3e3e]">
                Total: ৳{cart.reduce((sum, i) => sum + i.price * i.qty, 0)}
              </p>
              <input
                required
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full border p-2 rounded mb-4 mt-2"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />
              <button
                onClick={placeOrder}
                className="w-full bg-[#8b5e3c] text-white py-2 rounded hover:bg-[#5c3e3e]"
              >
                Place Order
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
