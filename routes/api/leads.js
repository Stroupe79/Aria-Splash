const router = require("express").Router();
const leadsController = require("../../controllers/leadsController");

// Matches with "/api/books"
router.route("/")
  .get(leadsController.findAll)
  .post(leadsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(leadsController.findById)
  .put(leadsController.update)
  .delete(leadsController.remove);

module.exports = router;
