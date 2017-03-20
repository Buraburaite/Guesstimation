$(document).ready((e) => {

//NOTE: Asynchronous, need to break into callback functions

  /*===
  Save the problems and their answers in an object
  Create an empty array to fill with the choices that
  the user left unrejected
  ===*/
  const problems = {};
  $('.problem-row').each( (index, el) => {
    const problemId = 'problem-' + index;
    problems[problemId] = {};

    problems[problemId].answer = $(el).attr('answer');
    problems[problemId].possibles = [];
  });
  console.log(problems);

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

    const problemRows = $('.problem-row');
    const totalProblems = problemRows.length;
    let result = 0;

    $('.problem-row').each( (problemIndex, problemEl) => {
      const problemId = 'problem-' + problemIndex;

      $(problemEl).find('.choice-col').each( (rowIndex, choiceEl) => {
        const choice = $(choiceEl);

        if (choice.css('color') === white || choice.css('color') === 'white') {
          problems[problemId].possibles.push(choice.text().trim());
        }
      });
    });

    for (let i = 0; i < totalProblems; i++) {
      const problemId = 'problem-' + i;
      const randomChoice = _.sample(problems[problemId].possibles);
      const answer = problems[problemId].answer;
      const isCorrect = randomChoice === answer;
      console.log(isCorrect, randomChoice);
      if (isCorrect) { result++; }
      problems[problemId].possibles = [];
    }

    console.log(result);
  });
});
