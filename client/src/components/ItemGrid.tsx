import React, { useEffect, useState } from "react";
import { MenuItem } from "../types/menu";
import ItemCard from "./ItemCard";

const ItemGrid: React.FC = () => {
  const [items, setItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    fetch("/api/v1/menu/items") 
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching items:", error));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {items.map((item) => (
        <ItemCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ItemGrid;
