//===Imports
const mongoose = require('mongoose');
const Quiz     = require('../models/quiz-model.js');
const dotenv   = require('dotenv');
//===Imports


/*====
This code populates the quizzes collection, assuming it's empty.
====*/
dotenv.config();
mongoose.connect(process.env.MONGODB_URI);

const fileString = require('fs')
.readFileSync(__dirname + '/quizzes.csv', 'utf8');

let data = fileString.split('\r\n');
let quizzes = {};

function replaceAll(str, oldChar, newChar) {
  while (str.includes(oldChar)) {
    str = str.replace(oldChar, newChar);
  }
  return str;
}

data.forEach((row) => {
  row = row.split(',');

  if (row[0]) {
    /*====quizzes.csv-column-structure
    0:   Question
    1:   Topic
    2-6: Answer choices
    7:   Answer
    ====*/

    //Replace asterisks with commas (i.e., undo csv modification)
    row.map((col) => replaceAll(col, '*', ','));

    let question = row[0];
    let topic = row[1];
    let answer = row[7];

    //All quizzes have at least three answer choices
    let choices = [row[2], row[3], row[4]];
    if (row[5] !== '') { choices.push(row[5]); }
    if (row[6] !== '') { choices.push(row[6]); }

    //Problem is a component of the Quiz mongoose Schema,
    //containing a question (string), an array of choices,
    //and an answer
    let problem = {
      question : question,
      choices  : choices,
      answer   : answer
    };

    if (!quizzes[topic]) {
      quizzes[topic] = {};
      quizzes[topic].topic_url = replaceAll(topic.toLowerCase(), ' ', '-');
      quizzes[topic].problems = [];
    }
    quizzes[topic].problems.push(problem);

  }
});

topics = Object.keys(quizzes);
topics.forEach((topic) => {

  newQuiz = new Quiz({
    topic : topic,
    topic_url : quizzes[topic].topic_url,
    problems : quizzes[topic].problems
  });

  newQuiz.save((err) => {
    if (err) {
      throw err;
    }
  });
});


setTimeout(() => { mongoose.connection.close(); }, 2000);
