const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function(err, data) {
	if (err) {
		return console.log(err);
	}
	console.log(data.split('\n').length - 1);
});

// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1

// console.log(count);