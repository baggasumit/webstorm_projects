const Campground = require('./models/campground');
const Comment = require('./models/comment');

const campgrounds = [
  {
    name: 'Salmon Creek',
    image: 'https://c1.staticflickr.com/5/4255/35194103380_e9f5ce956d_z.jpg',
    description: 'They are salmons and there is a creek.',
  },
  {
    name: 'Granite Hill',
    image: 'https://c1.staticflickr.com/5/4157/34604626485_b9204ba2d2_z.jpg',
    description: 'The hill overlooking the Granite Mine.',
  },
  {
    name: 'Bear Rush',
    image: 'https://c1.staticflickr.com/5/4176/33746041294_4c4bb3a97e_z.jpg',
    description: 'Watch out for the bears in the area',
  },
];

function seedDB() {
  // remove all campgrounds
  Campground.remove({}, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Removed Campgrounds.');
    }

    // add few campgrounds
    // campgrounds.forEach((campground) => {
    //   Campground.create(campground, (err, campgroundObj) => {
    //     if (err) {
    //       console.log(err);
    //     } else {
    //       console.log('Added a campground');
    //       Comment.create({
    //         text: 'Dont ever come here. It is scary',
    //         author: 'Peter Griffin',
    //       }, (err, comment) => {
    //         console.log('comment created');
    //         campgroundObj.comments.push(comment._id);
    //         campgroundObj.save();
    //       });
    //     }
    //   });
    // });
  });
}

module.exports = seedDB;
