/**
 * Created by sumit_bagga on 5/8/17.
 */

'use strict';

// ******************************************
// Event Emitter
// ******************************************

var Emitter2 = require('./emitter'); // Our own emitter
var Emitter = require('events'); // Node.js inbuilt event emitter
var eventConfig = require('./config').events;

var emtr = new Emitter();

emtr.on(eventConfig.GREET, function() {
  console.log('Greeting 1');
});

emtr.on(eventConfig.GREET, function() {
  console.log('Greeting 2');
});

console.log('Hello');

emtr.emit(eventConfig.GREET);


// ******************************************
// util.inherits
// ******************************************

var EventEmitter = require('events');
var util = require('util');

function Greetr() {
  EventEmitter.call(this); // If we don't don't call the parent constructor, parent's properties
  // would not be assigned to object created using child constructor. (In this example, greeter1
  // created using new Greetr(). [Lecture 39 Policeman and Person example]
  // Calling the parent constructor makes it run and attaches the properties to the object created
  this.greeting = 'Hello world!';
}

class Greetrr extends EventEmitter {
  constructor() {
    super();
    this.greeting = 'Hello world class!';
  }

  greet(data) {
    console.log(this.greeting + ': ' + data);
    this.emit('greet', data);
  }
}

util.inherits(Greetr, EventEmitter);
//util.inherits(Greetrr, EventEmitter);

Greetr.prototype.greet = function(data) {
  console.log(this.greeting + ': ' + data);
  this.emit('greet', data);
}

var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
  console.log('Someone greeted!: ' + data);
});

greeter1.greet('Tony');

// Using the class created above
var greeter2 = new Greetrr();

greeter2.on('greet', function(data) {
  console.log('Someone greeted with class!: ' + data);
});

greeter2.greet('Tonylass');

// ******************************************
// File I/O
// ******************************************

var fs = require('fs');

var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet);

var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data) {
  console.log(data);
});

console.log('Done!');