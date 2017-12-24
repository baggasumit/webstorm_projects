/**
 * Created by sumit_bagga on 12/24/17.
 */

console.log('Express App');

let express = require('express');
let app = express();

app.get('/', function (req, res) {
  res.send('We are here');
});

app.get('/speak/:animal', function (req, res) {
  let sounds = {
    pig: 'Oink',
    cow: 'Moo',
    dog: 'Woof',
  }
  let animal = req.params.animal;
  let sound = sounds[animal] ? sounds[animal] : 'Hi';
  let responseString = `The ${animal} says ${sound}`;

  res.send(responseString);

});

app.get('/repeat/:str/:n', function (req, res) {
  //console.log(req.params.str);
  let n = req.params.n;
  let str = req.params.str;
  let responseString = '';
  if (n) {
    for (let i = 0; i < n; i++) {
      responseString += str + ' ';
    }
  }
  res.send(responseString);

});

app.get('*', function (req, res) {
  res.send('Sorry, page not found.');
});

app.listen(3000, () => console.log('Server started. Listening on port 3000.'));