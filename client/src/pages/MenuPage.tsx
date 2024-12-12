import React from "react";
import Banner from "../components/Banner";
import ItemGrid from "../components/ItemGrid"; // Grid of items
import { MenuItem } from "../types/menu";

const MenuPage: React.FC = () => {
  return (
    <div>
      <Banner />
      <ItemGrid /> 
    </div>
  );
};

export default MenuPage;
