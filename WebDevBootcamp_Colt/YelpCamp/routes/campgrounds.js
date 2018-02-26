const express = require('express');
const Campground = require('../models/campground');
const middleware = require('../middleware');

const router = express.Router();

router.get('/', (req, res) => {
  Campground.find({}, (err, campgrounds) => {
    if (err) {
      console.log(err);
    } else {
      res.render('campgrounds/index', { campgrounds });
    }
  });
});

router.post('/', middleware.isLoggedIn, (req, res) => {
  const { name, image, description } = req.body;
  const author = {
    id: req.user._id,
    username: req.user.username,
  };
  Campground.create({
    name, image, description, author,
  }, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Campground Created.');
      res.redirect('/campgrounds');
    }
  });
});

router.get('/new', middleware.isLoggedIn, (req, res) => {
  res.render('campgrounds/new');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  // Campground.findById(id, (err, campground) => {
  Campground.findById(id).populate('comments').exec((err, campground) => {
    if (err) {
      console.log(err);
      res.render('fourohfour');
    } else {
      res.render('campgrounds/show', { campground });
    }
  });
});

router.get('/:id/edit', middleware.checkCampgroundOwnership, (req, res) => {
  const { id } = req.params;

  Campground.findById(id, (err, campground) => {
    if (err) {
      console.log(err);
      res.render('fourohfour');
    } else {
      res.render('campgrounds/edit', { campground });
    }
  });
});

router.put('/:id', middleware.checkCampgroundOwnership, (req, res) => {
  const { id } = req.params;
  const { name, image, description } = req.body;
  Campground.findByIdAndUpdate(id, { name, image, description }, (err) => {
    if (err) {
      console.log(err);
      res.render('fourohfour');
    } else {
      res.redirect(`/campgrounds/${id}`);
    }
  });
});

router.delete('/:id', middleware.checkCampgroundOwnership, (req, res) => {
  const { id } = req.params;
  Campground.findByIdAndRemove(id, (err) => {
    if (err) {
      console.log(err);
      res.render('fourohfour');
    } else {
      res.redirect('/campgrounds');
    }
  });
});

module.exports = router;
