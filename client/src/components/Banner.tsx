import React from "react";
import BannerImg from "../public/images/coffeebanner.jpg";

const Banner: React.FC = () => {
  return (
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
          Please take a look at our menu featuring food, drinks, and brunch. If
          you'd like to place an order, use the "Order Online" button located
          below the menu.
        </p>

        <div className="flex space-x-4 mt-4">
          <button className="menu-btn">
            Food
          </button>
          <button className="menu-btn">
            Drinks
          </button>
          <button className="menu-btn">
            Brunch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
