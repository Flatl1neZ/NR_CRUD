const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  email: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  checkbox: {
    required: false,
    type: Boolean,
  },
});

module.exports = mongoose.model("Data", dataSchema);
