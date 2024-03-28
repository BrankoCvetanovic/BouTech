const express = require("express");
const router = express.Router();

const {
  getAppliances,
  createAppliance,
  getOneAppliance,
} = require("../controllers/appliances");

router.get("/", getAppliances).post("/", createAppliance);
router.get("/:id", getOneAppliance);

module.exports = router;
