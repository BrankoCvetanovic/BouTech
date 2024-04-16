const { Tv } = require("../models/Item");
const { StatusCodes } = require("http-status-codes");
const CustomAPIError = require("../errors/custom-error");

async function getTvs(req, res) {
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

  const items = await Tv.find(queryObject).sort(sortValue);
  res.status(StatusCodes.OK).json({ items, count: items.length });
}

async function getOneTv(req, res) {
  const { params } = req;

  try {
    const item = await Tv.findOne({ _id: params.id });
    if (!item) {
      throw new CustomAPIError(`There is no item with id: ${params.id}  `, 404);
    }
    res.status(StatusCodes.OK).json(item);
  } catch (error) {
    throw new CustomAPIError(`There is no item with id: ${params.id}  `, 404);
  }
}

async function createTv(req, res) {
  const item = await Tv.create(req.body);
  res.status(StatusCodes.CREATED).json({ item });
}

module.exports = { getTvs, createTv, getOneTv };
