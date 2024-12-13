import React from "react";
import { MenuItem } from "../types/menu";

const ItemCard: React.FC<MenuItem> = ({ name, description, price }) => {
  return (
    <div className="bg-black text-white border-gray-800 p-6 shadow-lg hover:shadow-xl transition duration-300 relative">
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-white">{name.toUpperCase()}</span>
        <span className="text-2xl font-bold text-white">
          ${price.toFixed(2)}
        </span>
      </div>

      <p className="text-sm text-gray-400 mb-4">{description}</p>
      <div className="absolute bottom-6 right-6"></div>
    </div>
  );
};

export default ItemCard;
