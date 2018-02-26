function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    // SOLUTION GOES HERE
    return submittedUsers.every((user) => {
      return goodUsers.some((goodUser) => {
        return goodUser.id === user.id;
      });
    });
  };
}

module.exports = checkUsersValid;
