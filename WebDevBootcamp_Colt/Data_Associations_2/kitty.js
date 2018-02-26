const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/kitty_db');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // we're connected!
  console.log('We are connected');
  const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    // kitten: { type: mongoose.Schema.Types.ObjectId, ref: 'Kitten' },

  });
  const Post = mongoose.model('Post', postSchema);
  const kittySchema = new mongoose.Schema({
    name: String,
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
  });

  kittySchema.methods.speak = function () {
    const greeting = this.name
      ? `Meow name is ${this.name}`
      : "I don't have a name";
    console.log(greeting);
  };
  const Kitten = mongoose.model('Kitten', kittySchema);
  const silence = new Kitten({ name: 'Silence' });
  console.log(silence.name); // 'Silence'
  // silence.save();
  const fluffy = new Kitten({ name: 'Toby' });
  fluffy.speak(); // "Meow name is fluffy"

  // fluffy.save((err, catty) => {
  // Kitten.findOne({ name: /^Tob/ }, (err, catty) => {
  //   if (err) return console.error(err);
  //   catty.speak();
  //   const post1 = new Post({ title: 't2', content: 'c2' });
  //   post1.save((e, p1) => {
  //     catty.posts.push(p1._id);
  //     console.log(catty.posts);
  //     catty.save((error, fluffi) => {
  //       if (error) {
  //         console.log('There is an error: ', error);
  //       } else {
  //         console.log('Yay post saved', fluffi);
  //       }
  //     });
  //   });
  // });

  // Find all posts for kitten
  Kitten.findOne({ name: /^Tob/ }).populate('posts').exec((err, user) => {
    if (err) {
      console.log(err);
    } else {
      console.log(user);
    }
  });


  // Kitten.find((err, kittens) => {
  //   if (err) return console.error(err);
  //   console.log(kittens);
  // });

  // Kitten.findOne({ name: /^flu/ }, (err, fluff) => {
  //   console.log('Found fluff');
  //   console.log(fluff);
  //   const post1 = new Post({ title: 'random3', content: 'whaaaa3' });
  //   post1.save((e, p1) => {
  //     fluff.posts.push(p1);
  //     console.log(fluff.posts);
  //     fluff.save((error, fluffi) => {
  //       if (error) {
  //         console.log('There is an error: ', error);
  //       } else {
  //         console.log('Yay post saved', fluffi);
  //       }
  //     });
  //   });
  //
  // });
});

//
// const postSchema = new mongoose.Schema({
//   title: String,
//   content: String,
// });
//
// const Post = mongoose.model('Post', postSchema);
//
// const userSchema = new mongoose.Schema({
//   email: String,
//   name: String,
//   posts: [postSchema],
// });
//
// const User = mongoose.model('User', userSchema);
//
// const charlie = new User({
//   email: 'charlie@brown.edu',
//   name: 'Charlie Brown',
// });
//
// const hermione = new User({
//   email: 'hermione@hogwarts.edu',
//   name: 'Hermione Granger',
//   posts: [{ title: 'Brew Potion', content: 'Learn it at Hogwarts class' }],
// });
//
// // hermione.save((err, user) => {
// //   if (err) {
// //     console.log(err);
// //   } else {
// //     console.log(user);
// //   }
// // });
//
// const post1 = new Post({
//   title: 'Reflections on apple',
//   content: 'They are delicious',
// });
//
// // post1.save((err, post) => {
// //   if (err) {
// //     console.log(err);
// //   } else {
// //     console.log(post);
// //   }
// // });
//
// User.findOne({ name: 'Hermione Granger' }, (err, user) => {
//   if (err) {
//     console.log(err);
//   } else {
//     user.posts.push({
//       title: '5 things I really hate.',
//       content: 'Voldermort. Voldermort. Voldermort. Volde. Volde.',
//     });
//
//     user.save((error, herm) => {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log(herm);
//       }
//     });
//   }
// });
