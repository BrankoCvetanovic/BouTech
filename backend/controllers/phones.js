const { Phone } = require("../models/Item");
const { StatusCodes } = require("http-status-codes");
const CustomAPIError = require("../errors/custom-error");

async function getPhones(req, res) {
  const { category, sort, price } = req.query;
  const queryObject = {};
  if (category) {
    queryObject.category = category;
  }
  if (price) {
    const [lowLimit, highLimit] = price.split("-");
    queryObject.price = { $gt: Number(lowLimit), $lt: Number(highLimit) };
  }
  let sortValue = "createdAt";
  if (sort) {
    sortValue = sort;
  }
  const limit = 15;
  const page = Number(req.query.page) || 1;
  const skip = (page - 1) * limit;

  const items = await Phone.find(queryObject)
    .sort(sortValue)
    .limit(limit)
    .skip(skip);
  res.status(StatusCodes.OK).json({ items, count: items.length });
}

async function getOnePhone(req, res) {
  const { params } = req;

  const item = await Phone.findOne({ _id: params.id });
  if (!item) {
    throw new CustomAPIError(`There is no item with id: ${params.id}  `, 404);
  }
  res.status(StatusCodes.OK).json(item);
}

async function createPhone(req, res) {
  const item = await Phone.create(req.body);
  res.status(StatusCodes.CREATED).json({ item });
}

module.exports = { getPhones, createPhone, getOnePhone };
