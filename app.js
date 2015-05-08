// var apt = new Date('May 8, 2015 11:15:00');



// function setReminder(date, callback){
// }
// function alert(){
// 	console.log("This is your FUCKING alarm!!!")
// }

// setReminder(apt, setTimeout(alert, 1000));

// function alerm(){
// 	console.log("WAKE UP!!!");
// }
// function setReminder(alarmTime, callback){
// 	var currentTime= new Date();
// 	var interval= alarmTime.getTime() - currentTime.getTime();
// 	setTimeout(callback, interval);
// }

// module.exports={
// 	setReminder: setReminder,
// 	alerm: alerm
	
// };

// function time(){
// 	for(i=1;i<11;i++){
// 	setTimeout(function(){console.log(i);},i*1000)

// }
// }



// time();

var time=[10,9,8,7,6,5,4,3,2,1];

time.forEach(function(x){
	setTimeout(function(){
		console.log(x);
	},(11-x)* 1000);
})