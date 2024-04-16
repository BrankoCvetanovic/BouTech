const Order = require("../models/order");
const { StatusCodes } = require("http-status-codes");

async function placeOrder(req, res) {
  try {
    const order = await Order.create(req.body);
    res.status(StatusCodes.CREATED).json({ message: "succsses" });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
  }
}

module.exports = placeOrder;
