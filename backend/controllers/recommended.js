const { Tv, Appliance, Phone, It } = require("../models/Item");
const { StatusCodes } = require("http-status-codes");

async function getRecommended(req, res) {
  const tv = await Tv.aggregate().sample(3);
  const phone = await Phone.aggregate().sample(3);
  const appliance = await Appliance.aggregate().sample(3);
  const it = await It.aggregate().sample(3);

  const items = [...tv, ...phone, ...appliance, ...it];

  res.status(StatusCodes.OK).json({ items });
}

module.exports = getRecommended;
