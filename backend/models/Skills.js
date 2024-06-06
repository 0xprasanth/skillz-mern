const mongoose = require("mongoose");

const skillsSchema =  new mongoose.Schema({
    title: String,
    score: Number,
  });

const skillModel = mongoose.model("Skills", skillsSchema)

module.exports = {
  skillModel,
  skillsSchema
}
