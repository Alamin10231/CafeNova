import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UpdateCardForm from "../components/UpdateCardForm";

const OrderPage = () => {
  const [activeTab, setActiveTab] = useState("All Items");
  const [menuData, setMenuData] = useState([]);
  const [cart, setCart] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const navigate = useNavigate();

  // States for update modal
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Fetch menu data from backend
  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = () => {
    fetch("http://localhost:5000/menuCards")
      .then((res) => res.json())
      .then((data) => setMenuData(data))
      .catch((err) => console.error("Failed to fetch:", err));
  };

  const categories = [
    "All Items",
    ...new Set(menuData.map((item) => item.category)),
  ];

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

  // Open update form modal
  const handleUpdateClick = (item) => {
    setSelectedItem(item);
    setShowUpdateForm(true);
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
            className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ease-in-out
              ${
                activeTab === category
                  ? "bg-[#5c3e3e] text-white shadow-lg transform -translate-y-1"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Items */}
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
          {currentItems.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
            >
              {/* Image with overlay effect */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-colors duration-300 shadow-md"
                    aria-label="Delete item"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleUpdateClick(item)}
                    className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full transition-colors duration-300 shadow-md"
                    aria-label="Update item"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Card Content */}
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-[#5c3e3e] transition-colors duration-300 group-hover:text-[#8b5e3c]">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-600">{item.category}</p>
                  </div>
                  <p className="text-xl font-bold text-[#8b5e3c] bg-[#fff8f3] px-2 py-1 rounded-lg">
                    ৳{item.price}
                  </p>
                </div>
                
                <div className="flex justify-between items-center mt-4">
                  <div className="flex space-x-2">
                    <span className="bg-[#f8f0e5] text-[#8b5e3c] px-2 py-1 rounded-full text-xs">
                      {item.popular && "Popular"}
                      {item.recommended && "Recommended"}
                    </span>
                  </div>
                  <button
                    onClick={() => addToCart(item)}
                    className="px-4 py-2 bg-[#5c3e3e] text-white rounded-lg hover:bg-[#3e2a2a] text-sm transition-all duration-300 flex items-center shadow-md hover:shadow-lg"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary - Enhanced */}
        <div className="bg-white shadow-lg rounded-xl p-6 h-fit sticky top-24 transition-all duration-300 hover:shadow-xl">
          <h3 className="text-2xl font-bold text-[#5c3e3e] mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Your Cart
          </h3>
          
          {cart.length === 0 ? (
            <div className="text-center py-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <p className="text-gray-500 mt-2">Your cart is empty</p>
              <p className="text-gray-400 text-sm">Add delicious items from the menu!</p>
            </div>
          ) : (
            <>
              <ul className="space-y-3 max-h-80 overflow-y-auto pr-2">
                {cart.map((item, index) => (
                  <li 
                    key={index} 
                    className="flex justify-between items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <div className="flex items-center">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                      <div className="ml-3">
                        <h4 className="font-medium text-gray-800">{item.name}</h4>
                        <div className="flex items-center mt-1">
                          <button 
                            onClick={() => {
                              if (item.qty > 1) {
                                const updated = cart.map(i => 
                                  i.name === item.name ? { ...i, qty: i.qty - 1 } : i
                                );
                                setCart(updated);
                              } else {
                                setCart(cart.filter(i => i.name !== item.name));
                              }
                            }}
                            className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-300"
                          >
                            -
                          </button>
                          <span className="mx-2 font-medium">{item.qty}</span>
                          <button 
                            onClick={() => {
                              const updated = cart.map(i => 
                                i.name === item.name ? { ...i, qty: i.qty + 1 } : i
                              );
                              setCart(updated);
                            }}
                            className="w-6 h-6 rounded-full bg-[#5c3e3e] flex items-center justify-center text-white hover:bg-[#3e2a2a]"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <span className="font-semibold text-[#8b5e3c]">৳{item.qty * item.price}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6">
                <div className="flex justify-between py-3 border-t border-gray-200">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">৳{cart.reduce((sum, i) => sum + i.price * i.qty, 0)}</span>
                </div>
                <div className="flex justify-between py-3 border-t border-gray-200">
                  <span className="text-gray-600">Service Charge (10%)</span>
                  <span className="font-medium">৳{(cart.reduce((sum, i) => sum + i.price * i.qty, 0) * 0.1).toFixed(2)}</span>
                </div>
                <div className="flex justify-between py-3 border-t border-gray-200">
                  <span className="text-gray-600">Tax (5%)</span>
                  <span className="font-medium">৳{(cart.reduce((sum, i) => sum + i.price * i.qty, 0) * 0.05).toFixed(2)}</span>
                </div>
                <div className="flex justify-between py-4 border-t border-gray-200 font-bold text-lg">
                  <span className="text-[#5c3e3e]">Total</span>
                  <span className="text-[#8b5e3c]">
                    ৳{(
                      cart.reduce((sum, i) => sum + i.price * i.qty, 0) * 1.15
                    ).toFixed(2)}
                  </span>
                </div>
                
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8b5e3c] focus:border-transparent transition-colors duration-300"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                  />
                </div>
                
                <button
                  onClick={placeOrder}
                  className="w-full mt-6 bg-gradient-to-r from-[#8b5e3c] to-[#5c3e3e] text-white py-3 rounded-lg hover:from-[#5c3e3e] hover:to-[#3e2a2a] transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Place Order
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Update Modal */}
      {showUpdateForm && selectedItem && (
        <UpdateCardForm
          item={selectedItem}
          onClose={() => setShowUpdateForm(false)}
          onUpdated={() => {
            fetchMenuData();
            setShowUpdateForm(false);
          }}
        />
      )}
    </div>
  );
};

export default OrderPage;
