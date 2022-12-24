const express = require("express");
const router = express.Router();
const staffController = require("../controllers/staffController");

// Get staff listing
router.get("/", staffController.index);

/* http://localhost:3000/staff/63942c0bb2f62e665402908f */
router.get("/:id", staffController.show);
router.delete("/:id", staffController.destroy);
router.put("/:id", staffController.update);

router.post("/", staffController.insert);

module.exports = router;
