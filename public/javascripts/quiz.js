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

    $('.problem-row').each( (problemIndex, problemEl) => {
      const problemId = 'problem-' + problemIndex;

      $('.choice-col').each( (rowIndex, choiceEl) => {
        const choice = $(choiceEl);

        if (choice.css('color') === white) {
          problems[problemId].possibles.push(choice.text());
        }
      });

      for (let i = 0; i < totalProblems; i++) {
        if (_.sample(problems[problemId].possibles) === problems[problemId].answer) {
          result++;
        }
      }
    });

    console.log(result);
  });


  setTimeout(() => console.log(responses), 2000);
});
