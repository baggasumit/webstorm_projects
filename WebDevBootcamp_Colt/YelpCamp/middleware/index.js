const Campground = require('../models/campground');

module.exports = {
  isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      next();
    } else {
      req.flash('error', 'You need to be logged in to do that.');
      res.redirect('/login');
    }
  },

  checkCampgroundOwnership(req, res, next) {
    if (req.isAuthenticated()) {
      const { id } = req.params;
      Campground.findById(id, (err, campground) => {
        if (err) {
          res.redirect('back');
        } else if (campground.author.id.equals(req.user._id)) {
          next();
        } else {
          req.flash('error', 'You do not have permission to do that.')
          res.redirect('back');
        }
      });
    } else {
      res.redirect('back');
    }
  },
};
