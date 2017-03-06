const indexRoutes = require('express').Router();

indexRoutes.get('/', (req, res, next) => {
  res.render('index', {
    successMessage: req.flash('success'),
    title: 'Guesstimation',
    userInfo: req.user
  });
});

indexRoutes.get('/welcome', (req, res, next) => {
  res.render('welcome', {
    successMessage: req.flash('success'),
    title: 'Guesstimation'
  });
});

module.exports = indexRoutes;
