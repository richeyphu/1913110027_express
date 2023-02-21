const express = require("express");
const router = express.Router();
const shopController = require("../controllers/shopController");
const { body } = require("express-validator");

/* GET shop listing. */
router.get("/", shopController.index);
router.get("/menu", shopController.menu);
router.get("/:id", shopController.show);

router.post(
  "/",
  [
    body("name").not().isEmpty().withMessage("กรุณาป้อนชื่อร้านค้าด้วย"),
    body("location.lat")
      .not()
      .isEmpty()
      .withMessage("กรุณาป้อนละติจูดด้วย")
      .isNumeric()
      .withMessage("ละติจูดต้องเป็นตัวเลขเท่านั้น"),
    body("location.lng")
      .not()
      .isEmpty()
      .withMessage("กรุณาป้อนลองจิจูดด้วย")
      .isNumeric()
      .withMessage("ลองจิจูดต้องเป็นตัวเลขเท่านั้น"),
  ],
  shopController.insert
);

module.exports = router;
