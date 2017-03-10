const indexRoutes = require('express').Router();

indexRoutes.get('/', (req, res, next) => {
  if (!req.user) {
    res.redirect('/welcome');
    return;
  }

  res.render('index', {
    successMessage: req.flash('success'),
    title: 'Guesstimation',
    userInfo: req.user
  });
  return;
});

indexRoutes.get('/welcome', (req, res, next) => {
  res.render('welcome', {
    successMessage: req.flash('success'),
    title: 'Guesstimation'
  });
  return;
});

module.exports = indexRoutes;
