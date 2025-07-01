import { useState } from "react";
import axios from "axios";

const UpdateCardForm = ({ item, onClose, onUpdated }) => {
  const [formData, setFormData] = useState({
    name: item.name,
    price: item.price,
    image: item.image,
     category: item.category,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(
        `http://localhost:5000/menuCards/${item._id}`,
        formData
      );
      onUpdated(); // Refresh the list
      onClose(); // Close the form
    } catch (err) {
      console.error("Update failed", err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow w-96">
        <h3 className="text-xl font-bold mb-4">Update Item</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full border p-2 rounded"
          />
          <input
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
            type="number"
            className="w-full border p-2 rounded"
          />
          <input
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="w-full border p-2 rounded"
          />
              <select
            name="category"
            className="select select-bordered w-full"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="Coffee">Coffee</option>
            <option value="Tea">Tea</option>
            <option value="Sweets">Sweets</option>
            <option value="Chocolate">Chocolate</option>
          </select>
          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="text-gray-600">
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-1 rounded"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCardForm;
