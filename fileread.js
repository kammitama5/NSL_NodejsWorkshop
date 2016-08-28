var fs = require('fs');

function printFileContents(error, data){
	console.log(data);
	console.log("Done");
}

fs.readFile("file.txt", "utf8", printfileContents);

