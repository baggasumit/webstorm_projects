const express = require('express');
const passport = require('passport');
const User = require('../models/user');

const router = express.Router();

router.get('/register', (req, res) => {
  res.render('register');
});

router.post('/register', (req, res) => {
  User.register(new User({ username: req.body.username }), req.body.password, (err, user) => {
    if (err) {
      req.flash('error', err.message);
      res.redirect('register');
    } else {
      req.flash('success', 'Successfully logged in!');
      passport.authenticate('local')(req, res, () => res.redirect('/campgrounds'));
    }
  });
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/campgrounds',
  failureRedirect: '/login',
  failureFlash: true,
}), () => {});

router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success', 'Logged you out!');
  res.redirect('/');
});

module.exports = router;
