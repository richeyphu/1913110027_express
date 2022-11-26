exports.index = (req, res, next) => {
  // res.send('respond with a resource');
  res.status(200).json({ fullname: "Phurit Dechaboonsiripanit" });
};

exports.bio = (req, res, next) => {
  res.status(200).json({
    fullname: "Phurit Dechaboonsiripanit",
    nickname: "Phu",
    hobby: "Sleep",
    gitusername: "richeyphu",
  });
};
