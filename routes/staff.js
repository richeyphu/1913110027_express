const express = require("express");
const router = express.Router();
const staffController = require("../controllers/staffController");
const { body } = require("express-validator");
const passportJWT = require("../middleware/passportJWT");

// Get staff listing
router.get("/", [passportJWT.isLogin], staffController.index);

/* http://localhost:3000/staff/63942c0bb2f62e665402908f */
router.get("/:id", staffController.show);
router.delete("/:id", staffController.destroy);
router.put("/:id", staffController.update);

router.post(
  "/",
  [body("name").not().isEmpty().withMessage("กรุณาป้อนชื่อ-สกุลด้วย")],
  staffController.insert
);

module.exports = router;
