#!/usr/bin/env node

var fs = require('fs');
var commander = require('commander');

// var filenames = process.argv.splice(2);

commander
	.version('0.0.1')
	.option('--read','read the fucking file')
	.parse(process.argv);

function logArrayElements(element, index, array) {
	if(element.index === element.index-1){
		console.log("hello")
	}
  // console.log('a[' + index + '] = ' + element);
}


var filenames = commander.args;
filenames.forEach(function(filename) {
	fs.readFile(filename, {encoding: 'utf8'}, function(error, contents){
		var newContent1 = contents.replace(/[\.,]/g, '');
		var newArray1= newContent1.split(" ")
		console.log(newArray1);
		newArray1.forEach(logArrayElements);
			
		});
		});
			





// function dumpfiles(filename) {
// 	fs.readFile(filename, {encoding: 'utf8'}, function(
// 		error, contents){
// 		var newArray1= contents.split(" ")
// 		console.log(newArray1);
// 		if(filenames.length > 0){
// 		dumpfiles(filenames.pop());
// 	}	
// 	});
	
// }

// if(commander.read){
// dumpfiles(filenames.pop());
// }