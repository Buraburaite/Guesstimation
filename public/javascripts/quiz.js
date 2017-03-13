$(document).ready((e) => {

  //Save the answers in an object
  const answers = {};
  $('.problem-row').each( (index, el) => {
    answers['problem-' + index] = $(el).attr('answer');
  });

  //Although a named color can be set,
  //$(el).css will always return a rgb string
  const white = 'rgb(255, 255, 255)';
  $('.choice-row').each( (index, el) => {
    const row = $(el);

    row.click((e) => {

      if (row.css('color') === white) {
        row.css('color', 'gray');
      } else {
        row.css('color', 'white');
      }
    });
  });

  const responses = {};
  $('.submit-btn').click( (e) => {
    e.preventDefault();

    const problems = $('.problem-row');
    const totalProblems = problems.length;
    let result = 0;

    problems.each( (problemIndex, problemEl) => {
      const problem = 'problem-' + problemIndex;
      const possibles = [];

      $('.choice-row').each( (rowIndex, choiceEl) => {
        const choice = $(choiceEl);

        if (choice.css('color') === white) {
          possibles.push(choice.html());
        }
      });

      const userAnswer = _.sample(possibles);
      if (userAnswer === answers[problem]) {
        result++;
      }
    });

    console.log(result);
  });


  setTimeout(() => console.log(responses), 2000);
});
