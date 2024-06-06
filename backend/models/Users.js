// models/Users.js
const mongoose = require("mongoose");

const skillModel = require('./Skills')

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true
    },
    languages: [String],
    skills: [skillModel.skillsSchema]
  },
  {
    collection: "User",
  }
);

const model = mongoose.model("user", userSchema);

module.exports = model;

