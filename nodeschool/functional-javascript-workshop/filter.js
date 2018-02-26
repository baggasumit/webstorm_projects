function getShortMessages(messages) {
  // SOLUTION GOES HERE
  return messages.filter(item => item.message.length < 50).map(item => item.message);
}

module.exports = getShortMessages;
