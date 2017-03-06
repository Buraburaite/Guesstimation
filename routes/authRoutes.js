const passport = require('passport');
const bcrypt   = require('bcrypt');
const User     = require('../models/user-model.js');


const authRoutes = require('express').Router();

authRoutes.get('/signup', (req, res, next) => {
  res.render('auth/signup');
});

//Goal: Create an account
authRoutes.post('/signup', (req, res, next) => {
  // Get their username and password...
  const username = req.body.username;
  const password = req.body.password;

  // ...make sure both were provided...
  if (username === '' || password === '') {
    res.render('auth/signup', { message: 'Please enter both a username and a password' });
    return;
  }

  // ...verify that username is available...
  User.findOne({ username : username }, 'username', (err, user) => {
    if (user !== null) {
      res.render('auth/signup', { message: 'That username already exists' });
      return;
    }

    // ...information seems legitimate! So, let's encrypt the password...
    const salt     = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);

    // ...and create a new user with their credentials...
    const newUser = User({
      username: username,
      encryptedPassword: hashPass
    });

    newUser.save((err) => {
      if (err) {
        res.render('auth/signup', { message: 'Something went wrong, please try again.' });
      } else {
        req.flash('success', 'Your account has been registered.');
        res.redirect('/');
      }
    });
  });
});

authRoutes.get('/login', (req, res, next) => {
  res.render('auth/login', {
    errorMessage: req.flash('error')
  });
});

authRoutes.post('/login',
passport.authenticate('local', {
  successReturnToOrRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true,
  successFlash: 'Welcome!',
  passReqToCallback: true
}
));

authRoutes.get('/logout', (req, res) => {
  req.logout();
  req.flash('success', 'You have been logged out.');
  res.redirect('/login');
});

authRoutes.get('/auth/facebook', passport.authenticate('facebook'));
authRoutes.get('/auth/facebook/callback', passport.authenticate('facebook', {
  successRedirect: '/',
  failureRedirect: '/login'
}));

authRoutes.get('/auth/google', passport.authenticate('google', {
  scope: ['https://www.googleapis.com/auth/plus.login',
          'https://www.googleapis.com/auth/plus.profile.emails.read']
}));

authRoutes.get('/auth/google/callback', passport.authenticate('google', {
  successRedirect: '/',
  failureRedirect: '/login'
}));

module.exports = authRoutes;
