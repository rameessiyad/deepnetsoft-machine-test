const router = require("express").Router();
const menuRoute = require("./menuRoute");

router.use("/menu", menuRoute);

module.exports = router;
