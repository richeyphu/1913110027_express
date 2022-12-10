const express = require("express");
const router = express.Router();
const companyController = require("../controllers/companyController");

router.get("/", companyController.index);

router.get("/:id", companyController.show);
router.delete("/:id", companyController.destroy);
router.put("/:id", companyController.update);

router.post("/", companyController.insert);

module.exports = router;
