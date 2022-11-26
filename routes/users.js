const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

/* GET users listing. */
router.get("/", usersController.index);
router.get("/bio", usersController.bio);

module.exports = router;
