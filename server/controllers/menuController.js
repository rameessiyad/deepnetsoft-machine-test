const Menu = require("../models/menuSchema"); 
const MenuItem = require("../models/menuItemSchema"); 

module.exports = {
  //@desc Create a menu
  //@route POST /api/v1/menu
  createMenu: async (req, res) => {
    try {
      const { name, description } = req.body;

      // Validation
      if (!name || !description) {
        return res
          .status(400)
          .json({ message: "Name and description are required." });
      }

      // Create Menu
      const menu = new Menu({
        name,
        description,
      });
      await menu.save(); 

      res.status(201).json({ message: "Menu created successfully", menu });
    } catch (error) {
      console.error("Error creating menu:", error);
      res.status(500).json({ message: "Failed to create menu." });
    }
  },

  //@desc Get all menus
  //@route GET /api/v1/menu
  getAllMenus: async (req, res) => {
    try {
      const menus = await Menu.find(); 
      res.status(200).json(menus);
    } catch (error) {
      console.error("Error getting menus:", error);
      res.status(500).json({ message: "Failed to get menus." });
    }
  },

  //@desc Add a menu item to a specific menu
  //@route POST /api/v1/menu/:menuId/item
  addMenuItem: async (req, res) => {
    try {
      const { menuId } = req.params;
      const { name, description, price } = req.body;

      // Validation
      if (!name || !description || !price) {
        return res
          .status(400)
          .json({ message: "Name, description, and price are required." });
      }

      // Create MenuItem
      const menuItem = new MenuItem({
        menuId,
        name,
        description,
        price: parseFloat(price),
      });

      await menuItem.save(); 

      res
        .status(201)
        .json({ message: "Menu item created successfully", menuItem });
    } catch (error) {
      console.error("Error adding menu item:", error);
      res.status(500).json({ message: "Failed to add menu item." });
    }
  },

  //@desc Get items of a specific menu
  //@route GET /api/v1/menu/:menuId/item
  getMenuItems: async (req, res) => {
    try {
      const { menuId } = req.params;

      const items = await MenuItem.find({ menuId }); 

      res.status(200).json(items);
    } catch (error) {
      console.error("Error getting menu items:", error);
      res.status(500).json({ message: "Failed to get menu items." });
    }
  },
};
