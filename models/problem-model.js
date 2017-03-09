const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const problemSchema = new Schema({
  question : { type: String, required: true },
  choices  : [String],
  answer   : { type: String, required: true }
});

const Problem = mongoose.model("Problem", problemSchema);

module.exports = Problem;
