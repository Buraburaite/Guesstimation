//===Imports
const mongoose = require('mongoose');
const Quiz     = require('../models/quiz-model.js');
const dotenv   = require('dotenv');
//===Imports


/*====
This code populates the quizzes database, assuming it's empty.
====*/
dotenv.config();
mongoose.connect(process.env.MONGODB_URI);

const fileString = require('fs')
.readFileSync(__dirname + '/quizzes.csv', 'utf8');

let data = fileString.split('\r\n');
let quizzes = {};

data.forEach((row) => {
  row = row.split(',');

  if (row[0]) {
    /*====quizzes.csv-column-structure
    0:   Question
    1:   Topic
    2-6: Answer choices
    7:   Answer
    ====*/

    let question = row[0].replace('*', ',');
    let topic = row[1].replace('*', ',');
    let answer = row[7].replace('*', ',');

    //All quizzes have at least three answer choices
    let choices = [row[2], row[3], row[4]];
    if (row[5] !== '') { choices.push(row[5]); }
    if (row[6] !== '') { choices.push(row[6]); }

    choices.map((choice) => {
      while (choice.includes('*')) {
        choice = choice.replace('*', ',');
      }
      return choice;
    });

    //Problem is a component of the Quiz mongoose Schema,
    //containing a question (string), an array of choices,
    //and an answer
    let problem = {
      question : question,
      choices  : choices,
      answer   : answer
    };

    Quiz.findOne({ topic : topic }, (err, quizDoc) => {
      if (err) {
        throw err;
      }

      if (quizDoc) {
        quizDoc.problems.push(problem);
        quizDoc.save((err2) => {
          if (err2) {
            throw err2;
          }
        });
      } else {
        let newQuiz = new Quiz({
          topic : topic,
          topic_lower : topic.toLowerCase(),
          problems : [problem]
        });

        console.log(topic);

        newQuiz.save((err2) => {
          if (err2) {
            throw err2;
          }
        });
      }
    });

  }
});
setTimeout(() => { mongoose.connection.close(); }, 2000);
