import React, { useState } from "react";
import { Menu, MenuItem } from "../types/menu";

const CreateMenuPage = () => {
  const [menuName, setMenuName] = useState<string>("");
  const [menuDescription, setMenuDescription] = useState<string>("");
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    { id: "", name: "", description: "", price: 0, menuId: "" },
  ]);

  const handleAddMenuItem = () => {
    setMenuItems([
      ...menuItems,
      { id: "", name: "", description: "", price: 0, menuId: "" },
    ]);
  };

  const handleRemoveMenuItem = (index: number) => {
    const updatedItems = menuItems.filter((_, i) => i !== index);
    setMenuItems(updatedItems);
  };

  const handleMenuInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "menuName") setMenuName(value);
    if (name === "menuDescription") setMenuDescription(value);
  };

  const handleItemInputChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const updatedItems = [...menuItems];

    updatedItems[index][name as keyof MenuItem] =
      name === "price" ? parseFloat(value) : value;
    updatedItems[index].menuId = menuName;

    setMenuItems(updatedItems);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const newMenu: Menu = {
        id: "",
        name: menuName,
        description: menuDescription,
        items: menuItems,
      };

      const response = await fetch("/api/menus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMenu),
      });

      if (!response.ok) {
        throw new Error("Failed to create menu");
      }

      const data = await response.json();
      alert("Menu created successfully!");
      console.log(data);
    } catch (error) {
      console.error("Error creating menu:", error);
      alert("Failed to create menu");
    }
  };

  return (
    <div className="create-menu-page bg-black text-white min-h-screen py-10 px-5">
      <h1 className="text-3xl font-semibold text-center text-blue-500 mb-8">
        Create a New Menu
      </h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg"
      >
        <div className="form-group mb-6">
          <label
            htmlFor="menuName"
            className="block text-lg text-gray-300 mb-2"
          >
            Menu Name
          </label>
          <input
            type="text"
            id="menuName"
            name="menuName"
            value={menuName}
            onChange={handleMenuInputChange}
            required
            className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="form-group mb-6">
          <label
            htmlFor="menuDescription"
            className="block text-lg text-gray-300 mb-2"
          >
            Menu Description
          </label>
          <input
            type="text"
            id="menuDescription"
            name="menuDescription"
            value={menuDescription}
            onChange={handleMenuInputChange}
            required
            className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="menu-items mb-6">
          <h2 className="text-2xl text-blue-500 mb-4">Menu Items</h2>
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="menu-item mb-6 p-4 bg-gray-700 rounded-md"
            >
              <div className="form-group mb-4">
                <label
                  htmlFor={`itemName-${index}`}
                  className="text-lg text-gray-300"
                >
                  Item Name
                </label>
                <input
                  type="text"
                  id={`itemName-${index}`}
                  name="name"
                  value={item.name}
                  onChange={(e) => handleItemInputChange(index, e)}
                  required
                  className="w-full p-3 bg-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="form-group mb-4">
                <label
                  htmlFor={`itemDescription-${index}`}
                  className="text-lg text-gray-300"
                >
                  Item Description
                </label>
                <input
                  type="text"
                  id={`itemDescription-${index}`}
                  name="description"
                  value={item.description}
                  onChange={(e) => handleItemInputChange(index, e)}
                  required
                  className="w-full p-3 bg-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="form-group mb-4">
                <label
                  htmlFor={`itemPrice-${index}`}
                  className="text-lg text-gray-300"
                >
                  Item Price
                </label>
                <input
                  type="number"
                  id={`itemPrice-${index}`}
                  name="price"
                  value={item.price}
                  onChange={(e) => handleItemInputChange(index, e)}
                  required
                  className="w-full p-3 bg-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="button"
                onClick={() => handleRemoveMenuItem(index)}
                className="text-red-500 hover:text-red-700"
              >
                Remove Item
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddMenuItem}
            className="w-full mt-4 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Add Menu Item
          </button>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 mt-6"
        >
          Create Menu
        </button>
      </form>
    </div>
  );
};

export default CreateMenuPage;
