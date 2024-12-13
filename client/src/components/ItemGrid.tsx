import React, { useEffect, useState } from "react";
import { MenuItem } from "../types/menu";
import ItemCard from "./ItemCard";
import { baseUrl } from "../baseUrl";
import JuiceImg from "../public/images/juice.jpg";
import Juice2Img from "../public/images/food-juice.jpg";

interface ItemGridProps {
  menuId: string;
}

const ItemGrid: React.FC<ItemGridProps> = ({ menuId }) => {
  const [items, setItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${baseUrl}/menu/${menuId}/item`);
        if (!response.ok) {
          throw new Error("Failed to fetch menu items");
        }
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    };

    fetchItems();
  }, [menuId]);

  return (
    <div className="bg-black px-6 py-10 md:px-40 md:py-20">
      <div className="bg-black border border-gray-400 p-8 relative">
        <img
          src={JuiceImg}
          alt="juice"
          className="w-12 absolute -top-5 -left-5 sm:w-16 md:w-20"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <ItemCard key={item._id} {...item} />
          ))}
        </div>
        <img
          src={Juice2Img}
          alt="juice"
          className="w-16 absolute -bottom-5 -right-5 sm:w-20 md:w-24"
        />
      </div>
    </div>
  );
};

export default ItemGrid;
