import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddCard = () => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    image: "",
    description: "",
    category: "Coffee",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("http://localhost:5000/menuCards", form);
      alert("Card added successfully!");
      setForm({
        name: "",
        price: "",
        image: "",
        description: "",
        category: "Coffee",
      });
      navigate("/order");
    } catch (error) {
      console.error("Error adding card:", error);
      alert("Failed to add card. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#fff8f3] p-4">
      <div className="w-full max-w-md bg-white p-6 shadow rounded">
        <h2 className="text-2xl font-bold mb-4 text-center">Add New Menu Card</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            type="text"
            placeholder="Item Name"
            className="input input-bordered w-full"
            value={form.name}
            onChange={handleChange}
            required
            disabled={loading}
          />
          <input
            name="price"
            type="number"
            placeholder="Price"
            className="input input-bordered w-full"
            value={form.price}
            onChange={handleChange}
            required
            disabled={loading}
          />
          <input
            name="image"
            type="text"
            placeholder="Image URL"
            className="input input-bordered w-full"
            value={form.image}
            onChange={handleChange}
            required
            disabled={loading}
          />
          <textarea
            name="description"
            placeholder="Description"
            className="textarea textarea-bordered w-full"
            value={form.description}
            onChange={handleChange}
            disabled={loading}
          ></textarea>
          <select
            name="category"
            className="select select-bordered w-full"
            value={form.category}
            onChange={handleChange}
            disabled={loading}
          >
            <option value="Coffee">Coffee</option>
            <option value="Tea">Tea</option>
            <option value="Sweets">Sweets</option>
            <option value="Chocolate">Chocolate</option>
          </select>
          <button
            type="submit"
            disabled={loading}
            className="btn bg-[#5c3e3e] text-white w-full hover:bg-[#3e2a2a] disabled:opacity-50"
          >
            {loading ? "Adding..." : "Add Card"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCard;
