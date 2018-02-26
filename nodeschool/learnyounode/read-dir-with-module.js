const readDir = require('./readDirModule');

const dirPath = process.argv[2];
const fileExt = process.argv[3];

function printFileList(err, fileList) {
  if (err) {
    console.log(err);
  } else {
    fileList.forEach(fileName => console.log(fileName));
  }
}

readDir(dirPath, fileExt, printFileList);
