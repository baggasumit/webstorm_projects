function loadUsers(userIds, load, done) {
  const users = [];
  let count = 0;
  userIds.forEach((userId, index) => {
    load(userId, (user) => {
      users[index] = user;
      count += 1;
      if (count === userIds.length) {
        return done(users);
      }
    });
  });
}

module.exports = loadUsers;
