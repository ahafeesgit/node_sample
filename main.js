//BLocking
//var fs = require("fs");

//var data = fs.readFileSync('input.txt');

//console.log(data.toString());
//console.log("Program Ended");

//Non - BLocking
var fs = require("fs");

var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("Program Ended");

fs.readFile('input.txt', function(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data.toString);
    }

});