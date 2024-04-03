const express = require("express");
const router = express.Router();

const { getTvs, getOneTv, createTv } = require("../controllers/tvs");

router.get("/", getTvs).post("/", createTv);
router.get("/:id", getOneTv);

module.exports = router;
