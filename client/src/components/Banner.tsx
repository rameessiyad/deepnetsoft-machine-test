import React, { useEffect, useState } from "react";
import BannerImg from "../public/images/coffeebanner.jpg";
import ItemGrid from "./ItemGrid";
import { baseUrl } from "../baseUrl";

interface Menu {
  _id: string;
  name: string;
}

const Banner: React.FC = () => {
  const [menus, setMenus] = useState<Menu[]>([]);
  const [selectedMenuId, setSelectedMenuId] = useState<string | null>(null);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await fetch(`${baseUrl}/menu`);
        if (!response.ok) {
          throw new Error("Failed to fetch menus");
        }
        const data = await response.json();
        setMenus(data);
      } catch (error) {
        console.error("Error fetching menus:", error);
      }
    };

    fetchMenus();
  }, []);

  const handleMenuClick = (menuId: string) => {
    setSelectedMenuId(menuId);
  };

  return (
    <div>
      <div
        className="relative bg-cover bg-center h-[400px] md:h-[500px] lg:h-[600px]"
        style={{ backgroundImage: `url(${BannerImg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white flex flex-col items-center justify-center h-full px-4">
          <h1 className="text-4xl md:text-7xl font-bold tracking-wider mb-4">
            MENU
          </h1>
          <p className="text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-6 text-gray-400">
            Please take a look at our menu featuring food, drinks, and brunch.
            If you'd like to place an order, use the "Order Online" button
            located below the menu.
          </p>
          <div className="flex flex-wrap justify-center space-y-4 space-x-4 mt-4">
            {menus.map((menu) => (
              <button
                key={menu._id}
                className={`menu-btn ${
                  selectedMenuId === menu._id ? "bg-blue-600" : ""
                }`}
                onClick={() => handleMenuClick(menu._id)}
              >
                {menu.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {selectedMenuId && (
        <div className="py-8">
          <ItemGrid menuId={selectedMenuId} />
        </div>
      )}
    </div>
  );
};

export default Banner;
