const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema(
  {
    name: String, // String is shorthand for {type: String}
    address: {
      province: String,
    },
  },
  { collection: "settings" }
);

const company = mongoose.model("Companies", companySchema);

module.exports = company;
