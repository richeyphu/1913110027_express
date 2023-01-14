const Company = require("../models/company");

exports.index = async (req, res, next) => {
  try {
    const company = await Company.find().sort({ _id: -1 });

    res.status(200).json({
      data: company,
    });
  } catch (error) {
    next(error);
  }
};

exports.show = async (req, res, next) => {
  try {
    const { id } = req.params;

    const company = await Company.findOne({
      _id: id,
    });

    if (!company) {
      const error = new Error("ไม่พบบริษัท");
      error.statusCode = 400;
      throw error;
    } else {
      res.status(200).json({
        data: company,
      });
    }
  } catch (error) {
    next(error);
  }
};

exports.insert = async (req, res, next) => {
  try {
    const { name, address } = req.body;

    let company = new Company({
      name: name,
      address: address,
    });
    await company.save();

    res.status(201).json({
      message: "เพิ่มข้อมูลเรียบร้อยแล้ว",
    });
  } catch (error) {
    next(error);
  }
};

exports.destroy = async (req, res, next) => {
  try {
    const { id } = req.params;

    const company = await Company.deleteOne({
      _id: id,
    });

    if (company.deletedCount === 0) {
      const error = new Error("ไม่สามารถลบข้อมูลได้ / ไม่พบบริษัท");
      error.statusCode = 400;
      throw error;
    } else {
      res.status(200).json({
        message: "ลบข้อมูลเรียบร้อยแล้ว",
      });
    }
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, address } = req.body;

    const company = await Company.updateOne(
      { _id: id },
      {
        name: name,
        address: address,
      }
    );

    if (company.nModified === 0) {
      const error = new Error("ไม่สามารถแก้ไขข้อมูลได้ / ไม่พบบริษัท");
      error.statusCode = 400;
      throw error;
    } else {
      res.status(200).json({
        message: "แก้ไขข้อมูลเรียบร้อยแล้ว",
      });
    }
  } catch (error) {
    next(error);
  }
};
