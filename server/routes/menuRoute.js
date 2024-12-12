const {
  createMenu,
  getAllMenus,
  addMenuItem,
  getMenuItems,
} = require("../controllers/menuController");

const router = require("express").Router();

//menu routes
router.post("/", createMenu);
router.get("/", getAllMenus);

//menu item routes
router.post("/:menuId/item", addMenuItem);
router.get("/:menuId/item", getMenuItems);

module.exports = router;
