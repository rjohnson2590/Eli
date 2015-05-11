var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Please enter a number ", function(number1) {
	
  rl.question("Please enter another number ", function(number2) {
   	var sum = parseInt(number1)+parseInt(number2);
  	console.log("The sum of your two numbers are " + sum)
  	rl.close();
  })
  
});

