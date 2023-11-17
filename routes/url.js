const express = require("express");
const {
  shortURL,
  totalClicksCounter,
} = require("../controllers/url");

const router = express.Router();

router.post("/", shortURL);

router.get("/analytics/:shortId", totalClicksCounter);

module.exports = router;
