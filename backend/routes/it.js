const express = require("express");
const router = express.Router();

const { getIt, getOneIt, createIt } = require("../controllers/it");

router.get("/", getIt).post("/", createIt);
router.get("/:id", getOneIt);

module.exports = router;
