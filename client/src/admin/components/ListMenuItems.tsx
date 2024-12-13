import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { baseUrl } from "../../baseUrl";
import { MenuItem } from "../../types/menu";
import Layout from "../Layout/Layout";

const ListMenuItems = () => {
  const { menuId } = useParams<{ menuId: string }>();
  const navigate = useNavigate();
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
  });

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch(`${baseUrl}/menu/${menuId}/item`);
        if (!response.ok) {
          throw new Error("Failed to fetch menu items");
        }
        const data = await response.json();
        setMenuItems(data);
      } catch (error) {
        console.error("Error fetching menu items:", error);
        setError("Failed to load menu items. Please try again later.");
      }
    };

    fetchMenuItems();
  }, [menuId]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`${baseUrl}/menu/${menuId}/item`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          description: formData.description,
          price: parseFloat(formData.price),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add menu item");
      }

      const newItem = await response.json();
      setMenuItems((prev) => [...prev, newItem]); // Update the list with the new item
      setShowForm(false); // Hide the form after submission
      setFormData({ name: "", description: "", price: "" }); // Reset the form
    } catch (error) {
      console.error("Error adding menu item:", error);
      setError("Failed to add menu item. Please try again later.");
    }
  };

  return (
    <Layout>
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
        <button
          onClick={() => navigate(-1)}
          className="text-blue-500 hover:text-blue-700 mb-4"
        >
          Back
        </button>
        <h2 className="text-3xl text-blue-500 mb-6">Menu Items</h2>
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : menuItems.length === 0 ? (
          <p className="text-gray-300">No items found for this menu.</p>
        ) : (
          <ul>
            {menuItems.map((item) => (
              <li key={item._id} className="mb-4">
                <h3 className="text-xl text-blue-500">{item.name}</h3>
                <p className="text-gray-300">{item.description}</p>
                <p className="text-gray-400">
                  <strong>Price:</strong> ${item.price.toFixed(2)}
                </p>
              </li>
            ))}
          </ul>
        )}
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-500 text-white px-4 py-2 mt-4"
        >
          {showForm ? "Cancel" : "Add Item"}
        </button>
        {showForm && (
          <form
            onSubmit={handleFormSubmit}
            className="mt-4 bg-gray-700 p-4 rounded-lg"
          >
            <div className="mb-4">
              <label className="block text-gray-300 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 rounded bg-gray-800 text-white"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full p-2 rounded bg-gray-800 text-white"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2">Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                className="w-full p-2 rounded bg-gray-800 text-white"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add Item
            </button>
          </form>
        )}
      </div>
    </Layout>
  );
};

export default ListMenuItems;
