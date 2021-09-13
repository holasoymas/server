const express = require("express");
const router = express.Router();
const userModel = require("../db/schema");

router.route("/community").post(async (req, res) => {
  try {
    const { name, country, message } = req.body;
    const newSubmit = new userModel({
      name,
      country,
      message,
    });
    await newSubmit.save();
  } catch (e) {
    console.log(e);
  }
});
router.route("/community").get(async (req, res) => {
  await userModel
    .find()
    .then(async (foundMessage) => await res.json(foundMessage));
});

module.exports = router;
