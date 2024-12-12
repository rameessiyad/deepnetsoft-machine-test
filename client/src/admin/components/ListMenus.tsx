import { useEffect, useState } from "react";
import { baseUrl } from "../../baseUrl";
import { Link } from "react-router-dom";
import { Menu } from "../../types/menu";

const ListMenu = () => {
  const [menus, setMenus] = useState<Menu[]>([]);

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

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl text-blue-500 mb-6">All Menus</h2>
      <ul>
        {menus.map((menu) => (
          <li key={menu.id} className="mb-4">
            <h3 className="text-xl text-blue-500">{menu.name}</h3>
            <p className="text-gray-300">{menu.description}</p>
            <Link
              to={`/menu/${menu.id}`}
              className="text-blue-500 hover:text-blue-700"
            >
              View Items
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListMenu;
