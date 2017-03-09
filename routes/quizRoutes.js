const quizRoutes = require('express').Router();
const Quiz = require('../models/quiz-model.js');

quizRoutes.get('/quiz/:topic', (req, res, next) => {
  topic = req.topic;
  console.log(topic);

  Quiz.findOne({ topic }, (err, quizDoc) => {
    if (err) {
      next(err);
      return;
    }

    if (quizDoc) {
      res.render('quiz', {
        quiz : quizDoc,
        topic : quizDoc.topic,
        problems : quizDoc.problems,
        successMessage: req.flash('success'),
        title: quizDoc.topic,
        userInfo: req.user
      });
    }
  });
});

module.exports = quizRoutes;
