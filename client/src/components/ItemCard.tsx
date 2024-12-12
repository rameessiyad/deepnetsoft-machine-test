import React from "react";
import { MenuItem } from "../types/menu";

const ItemCard: React.FC<MenuItem> = ({ name, description, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <img
        src="https://via.placeholder.com/150" 
        alt={name}
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-600 my-2">{description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-blue-500 font-bold">${price.toFixed(2)}</span>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
