"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FiPlusCircle, FiArrowLeft } from "react-icons/fi";

interface Item {
  id: number;
  title: string;
  description: string;
  category: string;
  quantity: number;
  addedOn: string;
}

export default function AddItemPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("General");
  const [quantity, setQuantity] = useState(1);
  const [items, setItems] = useState<Item[]>([]);
  const router = useRouter();

  // Load existing items
  useEffect(() => {
    const savedItems = localStorage.getItem("items");
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    }
  }, []);

  // Handle Add Item
  const handleAddItem = () => {
    if (!title.trim() || !description.trim()) {
      alert("Please fill in all required fields ❗");
      return;
    }

    const newItem: Item = {
      id: Date.now(),
      title,
      description,
      category,
      quantity,
      addedOn: new Date().toISOString().split("T")[0],
    };

    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems));

    // Reset form
    setTitle("");
    setDescription("");
    setCategory("General");
    setQuantity(1);

    alert("✅ Item added successfully!");
  };

  return (
    <div className="p-6 space-y-6 bg-gradient-to-r from-blue-50 via-white to-purple-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold flex items-center gap-2 text-purple-700">
          <FiPlusCircle /> Add New Item
        </h1>
        <button
          onClick={() => router.push("/dashboard")}
          className="flex items-center gap-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-full text-gray-700 transition"
        >
          <FiArrowLeft /> Back
        </button>
      </div>

      {/* Form */}
      <div className="bg-white p-6 rounded-2xl shadow-md space-y-4 max-w-2xl mx-auto">
        <div>
          <label className="block font-semibold mb-1">Title *</label>
          <input
            type="text"
            placeholder="Enter item name..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Description *</label>
          <textarea
            placeholder="Write a short description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400"
          >
            <option>General</option>
            <option>Personal</option>
            <option>Work</option>
            <option>Sports</option>
            <option>Study</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold mb-1">Quantity</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <button
          onClick={handleAddItem}
          className="w-full py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold rounded-lg hover:scale-105 transition"
        >
          ➕ Add Item
        </button>
      </div>

      {/* Live Preview */}
      {items.length > 0 && (
        <div className="bg-white p-6 rounded-2xl shadow-md max-w-3xl mx-auto">
          <h2 className="text-xl font-bold mb-4 text-gray-700">📋 Your Items</h2>
          <ul className="space-y-3">
            {items.map((item) => (
              <li
                key={item.id}
                className="p-4 rounded-lg shadow-sm border hover:shadow-md transition bg-gradient-to-r from-purple-50 to-white"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <span className="px-3 py-1 text-xs rounded-full bg-purple-100 text-purple-700 font-medium">
                    {item.category}
                  </span>
                </div>
                <p className="text-gray-600 mt-1">{item.description}</p>
                <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                  <span>Quantity: {item.quantity}</span>
                  <span>Added on: {item.addedOn}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
