const Shop = require("../models/shop");
const Menu = require("../models/menu");

exports.index = async (req, res, next) => {
  const shops = await Shop.find()
    .select("name photo location")
    .sort({ _id: -1 });

  const shopWithPhotoDomain = shops.map((shop, index) => {
    return {
      id: shop._id,
      name: shop.name,
      photo: `http://localhost:3000/images/${shop.photo}`,
      location: shop.location,
    };
  });

  res.status(200).json({
    data: shopWithPhotoDomain,
  });
};

exports.menu = async (req, res, next) => {
  // const menus = await Menu.find().select("+name -price");
  // const menus = await Menu.find().where("price").gt(100);

  const menus = await Menu.find().populate("shop");

  res.status(200).json({
    data: menus,
  });
};

exports.show = async (req, res, next) => {
  const shop = await Shop.findById(req.params.id).populate("menus");

  res.status(200).json({
    data: shop,
  });
};
