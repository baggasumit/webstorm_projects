// In User, it saves a reference to the Post (Post ID), not the post itself

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blog_demo_2');


// POST - title, content (going to be nested into USER)
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const Post = mongoose.model('Post', postSchema);


// USER - email, name

const userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
    },
  ], // name of the schema
});

const User = mongoose.model('User', userSchema);

// User.create({
//   email: 'alice@gmail.com',
//   name: 'Alice Belcher',
// }, (err, user) => {
//   console.log(user);
// });
//
// Post.create({
//   title: 'Random post part 6',
//   content: 'alsdkf jpart 6 par52 part 6',
// }, (err, post) => {
//   User.findOne({ email: 'alice@gmail.com' }, (error, foundUser) => {
//     if (error) {
//       console.log(error);
//     } else {
//       foundUser.posts.push(post._id);
//       foundUser.save((errr, data) => {
//         if (errr) {
//           console.log(errr);
//         } else {
//           console.log(data);
//         }
//       });
//     }
//   });
// });


// User.findOne({ email: 'alice@gmail.com' }, (error, foundUser) => {
//   if (error) {
//     console.log('Error finding user', error);
//   } else {
//     console.log('User is: ', foundUser);
//     Post.findOne({ title: 'Random post part 5' }, (errorr, post) => {
//       if (errorr) {
//         console.log('Error finding post', errorr);
//       } else {
//         console.log(post);
//         foundUser.posts.push(post);
//         foundUser.save((errr, data) => {
//           if (errr) {
//             console.log(errr);
//           } else {
//             console.log(data);
//           }
//         });
//       }
//     });
//   }
// });

// Find user
// Find all posts for that userSchema

// find user.populate the field posts by looking up all the ids and their corresponding
// posts.execute the query
User.findOne({ email: 'alice@gmail.com' }).populate('posts').exec((err, user) => {
  if (err) {
    console.log(err);
  } else {
    console.log(user);
  }
});
