#!/usr/bin/env node

var fs = require('fs');
var commander = require('commander');

//Usage: shared-words

commander
  .option('-h, --help', 'Output usage information')
  .version('-V, --version', 'Output the version numner')
  .option('-n, --number', 'Report just the number of words')
  .option('-v, --verbose', 'Be more verbose, report timing information')
  .option('-s, --shared', 'List the shared words')
  .parse(process.argv);

  var filenames = commander.args;
  var file1 = commander.args[0];
  var file2 = commander.args[1];
  var newArray1 = [];
  var newArray2 = [];
  var newArray3 = [];
  var finalArray = [];

  var share = function(callback){
    fs.readFile(file1, {encoding: 'utf8'}, function(error, contents){
      var newContent1 = contents.replace(/[\.,]/g, '');
      newArray1 = newContent1.split(' ');

      fs.readFile(file2, {encoding: 'utf8'}, function(error, contents){
        var newContent2 = contents.replace(/[\.,]/g, '');
        newArray2 = newContent2.split(' ');

        for(var i = 0; i < newArray1.length; i++){
          for(var j = 0; j < newArray2.length; j++){
          if(newArray1[i] === newArray2[j]){
            newArray3.push(newArray1[i]);
            }
          }
        }
        for(var i = 0; i < newArray3.length; i++){
          if(newArray3[i] !== newArray3[i-1]){
            finalArray.push(newArray3[i]);
          }
        }callback(finalArray);
      });
    });
  }

if(commander.shared){
  share(function(finalArray){
    var stringArray = '';
    for(var i = 0; i < finalArray.length; i++){
      stringArray = stringArray + ' \n' + finalArray[i];
    }
    console.log("Words in Common: ")
    console.log(stringArray);
  });
}

if(commander.number){
  share(function(finalArray){
    console.log(finalArray.length + ' words in common');
  });
}

if(commander.verbose){

}


