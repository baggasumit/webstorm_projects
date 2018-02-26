const fs = require('fs');
const path = require('path');

const readDir = function (dirPath, fileExt, callback) {
  let filteredList;
  fs.readdir(dirPath, (err, fileList) => {
    if (err) {
      callback(err);
    } else {
      filteredList = fileList.filter(fileName => path.extname(fileName) === `.${fileExt}`);
      callback(null, filteredList);
    }
  });
};

module.exports = readDir;
