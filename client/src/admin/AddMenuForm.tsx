import React, { useState } from "react";
import { baseUrl } from "../baseUrl";
import Layout from "./Layout/Layout";

const AddMenuForm = () => {
  const [menuName, setMenuName] = useState<string>("");
  const [menuDescription, setMenuDescription] = useState<string>("");

  const handleMenuInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "menuName") setMenuName(value);
    if (name === "menuDescription") setMenuDescription(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const newMenu = { name: menuName, description: menuDescription };

      const response = await fetch(`${baseUrl}/menu`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newMenu),
      });

      if (!response.ok) {
        throw new Error("Failed to create menu");
      }

      alert("Menu created successfully!");
    } catch (error) {
      console.error("Error creating menu:", error);
      alert("Failed to create menu");
    }
  };

  return (
    <Layout>
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl text-blue-500 mb-6">Create a New Menu</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="menuName" className="block text-white text-lg mb-2">
              Menu Name
            </label>
            <input
              type="text"
              id="menuName"
              name="menuName"
              value={menuName}
              onChange={handleMenuInputChange}
              className="w-full p-3 bg-gray-700 text-white rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="menuDescription"
              className="block text-white text-lg mb-2"
            >
              Menu Description
            </label>
            <input
              type="text"
              id="menuDescription"
              name="menuDescription"
              value={menuDescription}
              onChange={handleMenuInputChange}
              className="w-full p-3 bg-gray-700 text-white rounded-md"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 py-3 rounded-md text-white hover:bg-blue-600"
          >
            Create Menu
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default AddMenuForm;
