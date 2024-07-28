const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  discount: { type: String },
  brand: { type: String },
  img: { type: String },
  mrp: { type: String },
  name: { type: String },
  price: { type: String },
});

const OrderSchema = new mongoose.Schema({
  userId: { type: String },
  items: [ItemSchema],
});

const OrderModel = mongoose.model("Orders", OrderSchema);
module.exports = OrderModel;
