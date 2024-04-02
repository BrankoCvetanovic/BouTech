const { Appliance } = require("../models/Item");
const { StatusCodes } = require("http-status-codes");
const CustomAPIError = require("../errors/custom-error");

async function getAppliances(req, res) {
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

  const appliances = await Appliance.find(queryObject)
    .sort(sortValue)
    .limit(limit)
    .skip(skip);
  res.status(StatusCodes.OK).json({ appliances, count: appliances.length });
}

async function getOneAppliance(req, res) {
  const { params } = req;

  const item = await Appliance.findOne({ _id: params.id });
  if (!item) {
    throw new CustomAPIError(`There is no item with id: ${params.id}  `, 404);
  }
  res.status(StatusCodes.OK).json(item);
}

async function createAppliance(req, res) {
  const appliance = await Appliance.create(req.body);
  res.status(StatusCodes.CREATED).json({ appliance });
}

module.exports = { getAppliances, createAppliance, getOneAppliance };