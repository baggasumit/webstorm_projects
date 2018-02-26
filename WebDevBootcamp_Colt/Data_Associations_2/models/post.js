const mongoose = require('mongoose');

// POST - title, content (going to be nested into USER)
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
});

module.exports = mongoose.model('Post', postSchema);
