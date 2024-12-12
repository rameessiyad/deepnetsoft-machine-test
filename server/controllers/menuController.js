const { prisma } = require("../config/db");

module.exports = {
  //@ desc create a menu
  //@ route POST /api/v1/menu
  createMenu: async (req, res) => {
    try {
      const { name, description } = req.body();

      if (!name || !description) {
        return res
          .status(400)
          .json({ message: "Name and description are required." });
      }

      const menu = await prisma.menu.create({
        data: {
          name,
          description,
        },
      });

      res.status(201).json({ message: "Menu created successfully", menu });
    } catch (error) {
      console.error("Error creating menu:", error);
      res.status(500).json({ message: "Failed to create menu." });
    }
  },

  //@ desc get all menus
  //@ route GET /api/v1/menu
  getAllMenus: async (req, res) => {
    try {
      const menus = await prisma.menu.findMany();
      res.status(200).json(menus);
    } catch (error) {
      console.error("Error getting menus:", error);
      res.status(500).json({ message: "Failed to get menus." });
    }
  },

  //@ desc add a menu item to specific menu
  //@ route POST /api/v1/menu/:menuId/item
  addMenuItem: async (req, res) => {
    try {
      const { menuId } = req.params;
      const { name, description, price } = req.body;

      if (!name || !description || !price) {
        return res
          .status(400)
          .json({ message: "Name, description and price are required." });
      }

      const menuItem = await prisma.menuItem.create({
        data: {
          name,
          description,
          price: parseFloat(price),
          menuId: parseInt(menuId),
        },
      });

      res
        .status(201)
        .json({ message: "Menu item created successfully", menuItem });
    } catch (error) {
      console.error("Error adding menu item:", error);
      res.status(500).json({ message: "Failed to add menu item." });
    }
  },

  //@ desc get items of specific menu
  //@route GET /api/v1/menu/:menuId/item
  getMenuItems: async (req, res) => {
    try {
      const { menuId } = req.params;

      const items = await prisma.menuItem.findMany({
        where: {
          menuId: parseInt(menuId),
        },
      });

      res.status(200).json(items);
    } catch (error) {
      console.error("Error getting menu items:", error);
      res.status(500).json({ message: "Failed to get menu items." });
    }
  },
};
