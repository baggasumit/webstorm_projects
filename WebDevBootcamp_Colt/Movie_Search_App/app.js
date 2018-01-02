/**
 * Created by sumit_bagga on 12/24/17.
 */

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// allows use of the "public" folder.
// By default, only the "views" folder when using Express is served (used)
app.use(express.static('public'));

// so that you don't have to pass ".ejs" in render
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

// POST method not required. We can directly use GET
// app.post('/searchMovie', (req, res) => {
//   // console.log(req.body);
//   const { movieName } = req.body;
//   // friends.push(newFriend);
//   const queryString = encodeURIComponent(movieName.trim());
//   res.redirect(`/results?q=${queryString}`);
// });

app.get('/results', (req, res) => {
  // res.render('results', { friends: friends });
  const searchString = req.query.movieName;
  const url = `http://www.omdbapi.com/?s=${searchString.trim()}&apikey=thewdb`;
  request(url, (error, response, body) => {
    if (response && response.statusCode === 200) {
      const data = JSON.parse(body);
      res.render('results', { movies: data.Search });
    }
  });
});

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
  res.send('Sorry, page not found.');
});

app.listen(3000, () => console.log('Server started. Listening on port 3000.'));
