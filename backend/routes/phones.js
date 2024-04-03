const express = require("express");
const router = express.Router();

const {
  getPhones,
  getOnePhone,
  createPhone,
} = require("../controllers/phones");

router.get("/", getPhones).post("/", createPhone);
router.get("/:id", getOnePhone);

module.exports = router;
