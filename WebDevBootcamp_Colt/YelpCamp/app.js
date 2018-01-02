/**
 * Created by sumit_bagga on 12/24/17.
 */

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/yelp_camp');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// allows use of the "public" folder.
// By default, only the "views" folder when using Express is served (used)
app.use(express.static('public'));

// so that you don't have to pass ".ejs" in render
app.set('view engine', 'ejs');

const campgroundSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
});

const Campground = mongoose.model('Campground', campgroundSchema);

//
// Campground.create({
//   name: 'Granite Hill',
//   image: 'https://c1.staticflickr.com/5/4157/34604626485_b9204ba2d2_z.jpg',
// }, (err, campground) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Newly created campground');
//     console.log(campground);
//   }
// });

// const campgrounds = [
//   { name: 'Salmon Creek', image: 'https://c1.staticflickr.com/5/4255/35194103380_e9f5ce956d_z.jpg' },
//   { name: 'Granite Hill', image: 'https://c1.staticflickr.com/5/4157/34604626485_b9204ba2d2_z.jpg' },
//   { name: 'Bear Rush', image: 'https://c1.staticflickr.com/5/4176/33746041294_4c4bb3a97e_z.jpg' },
//   { name: 'Salmon Creek', image: 'https://c1.staticflickr.com/5/4255/35194103380_e9f5ce956d_z.jpg' },
//   { name: 'Granite Hill', image: 'https://c1.staticflickr.com/5/4157/34604626485_b9204ba2d2_z.jpg' },
//   { name: 'Bear Rush', image: 'https://c1.staticflickr.com/5/4176/33746041294_4c4bb3a97e_z.jpg' },
//   { name: 'Salmon Creek', image: 'https://c1.staticflickr.com/5/4255/35194103380_e9f5ce956d_z.jpg' },
//   { name: 'Granite Hill', image: 'https://c1.staticflickr.com/5/4157/34604626485_b9204ba2d2_z.jpg' },
//   { name: 'Bear Rush', image: 'https://c1.staticflickr.com/5/4176/33746041294_4c4bb3a97e_z.jpg' },
// ];

app.get('/', (req, res) => {
  res.render('landing');
});

app.get('/campgrounds', (req, res) => {
  Campground.find({}, (err, campgrounds) => {
    if (err) {
      console.log(err);
    } else {
      res.render('index', { campgrounds });
    }
  });
});

app.post('/campgrounds', (req, res) => {
  const { name, image, description } = req.body;
  Campground.create({
    name, image, description,
  }, (err, campground) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Newly created campground');
      console.log(campground);
      res.redirect('/campgrounds');
    }
  });
});

app.get('/campgrounds/new', (req, res) => {
  res.render('new');
});

app.get('/campgrounds/:id', (req, res) => {
  const { id } = req.params;

  Campground.findById(id, (err, campground) => {
    if (err) {
      console.log(err);
      res.render('fourohfour');
    } else {
      res.render('show', { campground });
    }
  });
});

app.get('/404', (req, res) => {
  res.render('fourohfour');
});

// POST method not required. We can directly use GET
// app.post('/searchMovie', (req, res) => {
//   // console.log(req.body);
//   const { movieName } = req.body;
//   // friends.push(newFriend);
//   const queryString = encodeURIComponent(movieName.trim());
//   res.redirect(`/results?q=${queryString}`);
// });

app.get('/speak/:animal', (req, res) => {
  const sounds = {
    pig: 'Oink',
    cow: 'Moo',
    dog: 'Woof',
  };
  const { animal } = req.params;
  const sound = sounds[animal] ? sounds[animal] : 'Hi';
  const responseString = `The ${animal} says ${sound}`;

  res.send(responseString);
});

app.get('/repeat/:str/:n', (req, res) => {
  const { n, str } = req.params;
  let responseString = '';
  if (n) {
    for (let i = 0; i < n; i += 1) {
      responseString += `${str} `;
    }
  }
  res.send(responseString);
});

app.get('*', (req, res) => {
  res.render('fourohfour');
});

// eslint-disable-next-line no-console
app.listen(3000, () => console.log('Server started. Listening on port 3000.'));
