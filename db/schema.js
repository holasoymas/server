const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  country: String,
  message: {
    required: true,
    type: String,
  },
});

const userModel = new mongoose.model("userModel", userSchema);

module.exports = userModel;
