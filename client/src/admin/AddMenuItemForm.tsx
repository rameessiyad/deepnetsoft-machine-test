import React, { useState } from "react";
import { baseUrl } from "../baseUrl"; // Adjust the import if necessary

const AddMenuItemForm = ({ menuId }: { menuId: string }) => {
  const [itemName, setItemName] = useState<string>("");
  const [itemDescription, setItemDescription] = useState<string>("");
  const [itemPrice, setItemPrice] = useState<number>(0);

  const handleItemInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "itemName") setItemName(value);
    if (name === "itemDescription") setItemDescription(value);
    if (name === "itemPrice") setItemPrice(parseFloat(value));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const newItem = {
        name: itemName,
        description: itemDescription,
        price: itemPrice,
        menuId,
      };

      const response = await fetch(`${baseUrl}/menu/${menuId}/items`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem),
      });

      if (!response.ok) {
        throw new Error("Failed to add menu item");
      }

      alert("Item added successfully!");
    } catch (error) {
      console.error("Error adding menu item:", error);
      alert("Failed to add item");
    }
  };

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl text-blue-500 mb-6">Add a New Item</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="itemName" className="block text-white text-lg mb-2">
            Item Name
          </label>
          <input
            type="text"
            id="itemName"
            name="itemName"
            value={itemName}
            onChange={handleItemInputChange}
            className="w-full p-3 bg-gray-700 text-white rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="itemDescription"
            className="block text-white text-lg mb-2"
          >
            Item Description
          </label>
          <input
            type="text"
            id="itemDescription"
            name="itemDescription"
            value={itemDescription}
            onChange={handleItemInputChange}
            className="w-full p-3 bg-gray-700 text-white rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="itemPrice" className="block text-white text-lg mb-2">
            Item Price
          </label>
          <input
            type="number"
            id="itemPrice"
            name="itemPrice"
            value={itemPrice}
            onChange={handleItemInputChange}
            className="w-full p-3 bg-gray-700 text-white rounded-md"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 py-3 rounded-md text-white hover:bg-blue-600"
        >
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddMenuItemForm;
