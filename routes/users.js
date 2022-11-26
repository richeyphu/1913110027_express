var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  // res.send('respond with a resource');
  res.status(200).json({ fullname: "Phurit Dechaboonsiripanit" });
});

router.get("/bio", function (req, res, next) {
  res.status(200).json({
    fullname: "Phurit Dechaboonsiripanit",
    nickname: "Phu",
    hobby: "Sleep",
    gitusername: "richeyphu",
  });
});

module.exports = router;
