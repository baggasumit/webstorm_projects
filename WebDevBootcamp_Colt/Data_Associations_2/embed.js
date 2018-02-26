const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blog_demo');

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const Post = mongoose.model('Post', postSchema);

const userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [postSchema],
});

const User = mongoose.model('User', userSchema);

const charlie = new User({
  email: 'charlie@brown.edu',
  name: 'Charlie Brown',
});

const hermione = new User({
  email: 'hermione@hogwarts.edu',
  name: 'Hermione Granger',
  posts: [{ title: 'Brew Potion', content: 'Learn it at Hogwarts class' }],
});

// hermione.save((err, user) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(user);
//   }
// });

const post1 = new Post({
  title: 'Reflections on apple',
  content: 'They are delicious',
});

// post1.save((err, post) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

User.findOne({ name: 'Hermione Granger' }, (err, user) => {
  if (err) {
    console.log(err);
  } else {
    user.posts.push({
      title: '5 things I really hate.',
      content: 'Voldermort. Voldermort. Voldermort. Volde. Volde.',
    });

    user.save((error, herm) => {
      if (error) {
        console.log(error);
      } else {
        console.log(herm);
      }
    });
  }
});
