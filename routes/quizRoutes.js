const quizRoutes = require('express').Router();

quizRoutes.get('/quiz/:id', (req, res, next) => {
  id = req.id;
  res.render('quiz', {
    successMessage: req.flash('success'),
    title: 'Guesstimation',
    userInfo: req.user
  });
});

module.exports = quizRoutes;
