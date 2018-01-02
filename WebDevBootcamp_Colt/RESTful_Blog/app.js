/**
 * Created by sumit_bagga on 12/29/17.
 */

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

mongoose.connect('mongodb://localhost/restful_blog');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// allows use of the "public" folder.
// By default, only the "views" folder when using Express is served (used)
app.use(express.static('public'));

// so that you don't have to pass ".ejs" in render
app.set('view engine', 'ejs');

const blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: { type: Date, default: Date.now },
});

const Blog = mongoose.model('Blog', blogSchema);

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
  res.redirect('/blogs');
});

app.get('/blogs', (req, res) => {
  Blog.find({}, (err, blogs) => {
    if (err) {
      console.log(err);
    } else {
      res.render('index', { blogs });
    }
  });
});

app.post('/blogs', (req, res) => {
  const { title, image, body } = req.body;
  Blog.create({
    title, image, body,
  }, (err, blog) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Newly created campground');
      console.log(blog);
      res.redirect('/blogs');
    }
  });
});

app.get('/blogs/new', (req, res) => {
  res.render('new');
});

app.get('/blogs/:id', (req, res) => {
  const { id } = req.params;

  Blog.findById(id, (err, blog) => {
    if (err) {
      console.log(err);
      res.render('fourohfour');
    } else {
      res.render('show', { blog });
    }
  });
});

app.get('/blogs/:id/edit', (req, res) => {
  const { id } = req.params;

  Blog.findById(id, (err, blog) => {
    if (err) {
      console.log(err);
      res.render('fourohfour');
    } else {
      res.render('edit', { blog });
    }
  });
});

app.put('/blogs/:id', (req, res) => {
  const { id } = req.params;
  const { title, image, body } = req.body;
  Blog.findByIdAndUpdate(id, { title, image, body }, (err) => {
    if (err) {
      console.log(err);
      res.render('fourohfour');
    } else {
      res.redirect(`/blogs/${id}`);
    }
  });
});

app.delete('/blogs/:id', (req, res) => {
  const { id } = req.params;
  Blog.findByIdAndRemove(id, (err) => {
    if (err) {
      console.log(err);
      res.render('fourohfour');
    } else {
      res.redirect('/blogs');
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
