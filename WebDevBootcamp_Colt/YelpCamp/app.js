/**
 * Created by sumit_bagga on 12/24/17.
 */

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const Campground = require('./models/campground');
const Comment = require('./models/comment');
const User = require('./models/user');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');
const methodOverride = require('method-override');
const seedDB = require('./seeds');

const commentRoutes = require('./routes/comments');
const campgroundRoutes = require('./routes/campgrounds');
const indexRoutes = require('./routes/index');

mongoose.connect('mongodb://localhost/yelp_camp');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// allows use of the "public" folder.
// By default, only the "views" folder when using Express is served (used)
app.use(express.static(`${__dirname}/public`));
app.use(methodOverride('_method'));
app.use(flash());

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

// Will make currentUser available on all routes
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  res.locals.error = req.flash('error');
  res.locals.success = req.flash('success');
  next();
});

// seedDB();

app.get('/', (req, res) => {
  res.render('landing');
});

app.use('/campgrounds', campgroundRoutes);
app.use('/campgrounds/:id/comments', commentRoutes);
app.use('/', indexRoutes);

app.get('/404', (req, res) => {
  res.render('fourohfour');
});

app.get('*', (req, res) => {
  res.render('fourohfour');
});

// eslint-disable-next-line no-console
app.listen(3000, () => console.log('Server started. Listening on port 3000.'));
