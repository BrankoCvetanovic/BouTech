const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide item name"],
  },
  image: {
    type: String,
    required: [true, "Please provide image url"],
  },
  price: {
    type: Number,
    required: [true, "Please provide price"],
  },
  description: {
    type: String,
    required: [true, "Please provide item description"],
  },
  category: {
    type: String,
    required: [true, "Please provide item category"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  discount: {
    type: Number,
    default: 0,
  },
});

const Appliance = mongoose.model("appliance", ItemSchema);
const Tv = mongoose.model("tv", ItemSchema);
const It = mongoose.model("it", ItemSchema);
const Phone = mongoose.model("phone", ItemSchema);

module.exports = { Appliance, Tv, It, Phone };
