exports.index = (req, res, next) => {
  res.status(200).json({
    data: [
      {
        id: 1,
        name: "Accenture",
        address: { province: "Bangkok", postcode: 10110 },
      },
      {
        id: 2,
        name: "Krungthai",
        address: { province: "Bangkok", postcode: 10110 },
      },
      {
        id: 3,
        name: "NECTEC",
        address: { province: "Pathum Thani", postcode: 12120 },
      },
    ],
  });
};
