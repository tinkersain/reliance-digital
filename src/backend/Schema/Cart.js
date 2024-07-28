const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  discount: { type: String },
  brand: { type: String },
  img: { type: String },
  mrp: { type: String },
  name: { type: String },
  price: { type: String },
});

const CartSchema = new mongoose.Schema({
  userId: { type: String },
  items: [ItemSchema],
});

const CartModel = mongoose.model("Cart", CartSchema);
module.exports = CartModel;
