// const Quiz = require('../../models/quiz-model.js');
//
const problems = null;

Quiz.find({}, (err, quizDocs) => {

  // quizDocs.findEach
});

$(document).ready((e) => {
  $('.choice-row').each( (index, el) => {
    $(el).click((e) => {

      let color = $(el).css('color');
      if (color === 'rgb(255, 255, 255)') {
        $(el).css('color', 'gray');
      } else {
        $(el).css('color', 'white');
      }
    });
  });

  let footer = $('footer');
  console.log(footer);
  $('footer').remove();
});
