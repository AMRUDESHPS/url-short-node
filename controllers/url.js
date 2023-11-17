const shortid = require("shortid");
const URL = require("../models/url");

async function shortURL(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "Enter a URL to start" });
  else {
    const shortID = shortid();

    await URL.create({
      shortId: shortID,
      redirectURL: body.url,
      visitHistory: [],
    });

    return res.json({ id: shortID });
  }
}

async function totalClicksCounter(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

module.exports = {
  shortURL,
  totalClicksCounter,
};