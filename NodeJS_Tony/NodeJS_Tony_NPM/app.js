/**
 * Created by sumit_bagga on 6/5/17.
 */

var moment = require('moment');
console.log(moment().format("ddd, hh:mm, MMM DD YYYY"));

var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('<html><body><h2>Express JS</h2></body></html>');
});

app.get('/person/:id', function(req, res) {
  res.send('<html><body><h2>Person: ' + req.params.id + '</h2></body></html>');
});

app.get('/api', function(req, res) {
  res.json({ firstname: 'John', lastname: 'Wayne'});
});

app.listen(3000);
