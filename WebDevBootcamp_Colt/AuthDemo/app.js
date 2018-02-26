const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/user');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');

mongoose.connect('mongodb://localhost/auth_demo');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// allows use of the "public" folder.
// By default, only the "views" folder when using Express is served (used)
app.use(express.static(`${__dirname}/public`));

// so that you don't have to pass ".ejs" in render
app.set('view engine', 'ejs');

app.use(require('express-session')({
  secret: 'There violent delights have violent ends',
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

// ==================
// Routes
// ==================

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/secret', isLoggedIn, (req, res) => {
  res.render('secret');
});

// Auth routes

app.get('/register', (req, res) => {
  res.render('register');
});

app.post('/register', (req, res) => {
  User.register(new User({ username: req.body.username }), req.body.password, (err, user) => {
    if (err) {
      console.log(err);
      return res.render('register');
    }
    passport.authenticate('local')(req, res, () => res.redirect('/secret'));
  });
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', passport.authenticate('local', {
  successRedirect: '/secret',
  failureRedirect: '/login',
}), (req, res) => {
  // User.register(new User({ username: req.body.username }), req.body.password, (err, user) => {
  //   if (err) {
  //     console.log(err);
  //     return res.render('login');
  //   }
  //   passport.authenticate('local')(req, res, () => res.redirect('/secret'));
  // });
});

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

app.listen(3000, () => console.log('Server started. Listening on port 3000.'));
