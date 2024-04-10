const express = require("express");
const router = express.Router();

const getRecommended = require("../controllers/recommended");

router.get("/", getRecommended);

module.exports = router;
