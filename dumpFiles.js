#!/usr/bin/env node

var fs = require('fs');
var commander = require('commander');

// var filenames = process.argv.splice(2);

commander
	.version('0.0.1')
	.option('--read','read the fucking file')
	.parse(process.argv);

var filenames = commander.args;



function dumpfiles(filename) {
	fs.readFile(filename, {encoding: 'utf8'}, function(
		error, contents){
		console.log(contents);

		if(filenames.length > 0){
		dumpfiles(filenames.pop());
	}	
	});
// 	fs.readFile(filename, {encoding: 'utf8'}, function(
// 		error, contents){
// 		console.log(contents);

// 		if(filenames.length > 0){
// 		dumpfiles(filenames.pop());
// 	}
// });
}

if(commander.read){
dumpfiles(filenames.pop());
}