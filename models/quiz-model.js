const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const problemSchema = new Schema({
  question : { type: String, required: true },
  choices  : { type: [String], required: true},
  answer   : { type: String, required: true }
});

const quizSchema = new Schema({
  topic    : { type: String, required: true },
  problems : [problemSchema]
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;
