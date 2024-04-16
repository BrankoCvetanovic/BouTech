const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
  name: String,
  amount: Number,
  price: Number,
  itemIndex: String,
});

const OrderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide item name"],
  },
  address: {
    type: String,
    required: [true, "Please provide adress"],
  },
  "card-expiration": {
    type: String,
    required: [true, "Please provide card-expiration"],
  },
  "card-name": {
    type: String,
    required: [true, "Please provide card-name"],
  },
  "card-number": {
    type: String,
    required: [true, "Please provide item category"],
  },
  city: {
    type: String,
    required: [true, "Please provide city"],
  },
  country: {
    type: String,
    required: [true, "Please provide country"],
  },
  cvv: {
    type: String,
    required: [true, "Please provide cvv"],
  },
  data: [DataSchema],
});
module.exports = mongoose.model("Order", OrderSchema);
