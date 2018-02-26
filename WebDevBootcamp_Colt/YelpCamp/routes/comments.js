const express = require('express');
const Campground = require('../models/campground');
const Comment = require('../models/comment');
const middleware = require('../middleware');

const router = express.Router({ mergeParams: true });

router.get('/new', middleware.isLoggedIn, (req, res) => {
  const { id } = req.params;
  Campground.findById(id, (err, campground) => {
    if (err) {
      console.log(err);
    } else {
      res.render('comments/new', { campground });
    }
  });
});

router.post('/', middleware.isLoggedIn, (req, res) => {
  const { id } = req.params;
  const { text } = req.body;
  Campground.findById(id, (err, campground) => {
    if (err) {
      console.log(err);
    } else {
      Comment.create({ text }, (err, comment) => {
        comment.author.id = req.user._id;
        comment.author.username = req.user.username;
        comment.save();
        campground.comments.push(comment._id);
        campground.save((err) => {
          req.flash('success', 'Successfully added comment.');
          res.redirect(`/campgrounds/${id}/`);
        });
      });
    }
  });
});

module.exports = router;
