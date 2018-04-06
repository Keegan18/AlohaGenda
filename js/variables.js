//class the months
var calender = document.getElementById("Calendar");
var time = new Date();
var date = time.getDate();
var month = time.getMonth()+1; //+1 since the daysInMonth function does not count 0 as a month
var monthNames = ['January','Febuary','March','April','May','June','July','August','September','October','November','December'];
var year = time.getFullYear();
console.log(date + "/" + month + "/" + date); //helps to know the date in the console
var overlayStuff = [ ]; //helps with overlay,
var yearOn = 10;
var counter = 0;

var currentMonth = month; //what month is currently getting viewed
var currentYear = year; //what year is getting viewed
console.log(currentMonth);