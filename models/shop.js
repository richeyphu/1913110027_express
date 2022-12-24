const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shopSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    photo: { type: String, default: "nopic.png" },
    location: {
      lat: { type: Number },
      lng: { type: Number },
    },
    // createdAt: { type: Date, default: Date.now },  <-- Not needed
    // updatedAt: { type: Date, default: Date.now },  <-- Not needed
  },
  { collection: "shops", timestamps: true }
);

const shop = mongoose.model("Shops", shopSchema);

module.exports = shop;
