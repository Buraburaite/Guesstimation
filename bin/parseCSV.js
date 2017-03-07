const fileString = require('fs')
.readFileSync(__dirname + '/quizzes.csv', 'utf8');

let data = fileString.split('\r\n');
let quizzes = {};

data.forEach((row) => {
  row = row.split(',');
  // quizzes[row[1]]
  console.log(row[1]);
});

// console.log(data);
