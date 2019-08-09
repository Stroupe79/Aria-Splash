const router = require("express").Router();
const bookRoutes = require("./leads");

// Book routes
router.use("/leads", bookRoutes);

module.exports = router;
