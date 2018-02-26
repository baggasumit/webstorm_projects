const fs = require('fs');
const path = require('path');

const dirPath = process.argv[2];
const fileExt = '.' + process.argv[3];

fs.readdir(dirPath, function(err, fileList) {
	if (err) return console.log(err);
	fileList.forEach(function(fileName) {
		if (path.extname(fileName) === fileExt) {
			console.log(fileName);
		}
	});
});

// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1

// console.log(count);