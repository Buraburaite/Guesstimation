// const Quiz = require('../../models/quiz-model.js');
//
const problems = null;

// Quiz.find({}, (err, quizDocs) => {
//
//   // quizDocs.findEach
// });

$(document).ready((e) => {

  const answers = {};

  $('.problem-row').each( (index, el) => {
    answers['problem-' + index] = $(el).attr('answer');
  });

  $('.choice-row').each( (index, el) => {
    const row = $(el);

    row.click((e) => {

      if (row.css('color') === 'rgb(255, 255, 255)') {
        row.css('color', 'gray');
      } else {
        row.css('color', 'white');
      }
    });
  });

});
