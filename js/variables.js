//class the months
var calender = document.getElementById("Calendar");
var time = new Date();
var date = time.getDate();
var month = time.getMonth()+1; //+1 since the daysInMonth function does not count 0 as a month
var monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var weeknames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var year = time.getFullYear();
console.log(date + "/" + month + "/" + date); //helps to know the date in the console
var overlayStuff = [ ]; //helps with overlay,
var yearOn = 10;
var counter = 0;

var currentMonth = month; //what month is currently getting viewed
var currentYear = year; //what year is getting viewed

var EssentialsBro = {
	body: document.getElementsByClassName('body')[0],
	topBar: document.getElementById('TB'),
	calendar: document.getElementById('Calendar'),
	weekendNames: document.getElementsByClassName('weekendNames'),
	days: document.getElementsByClassName('Days'),
}

function CagStartUp() {
	if(sessionStorage.getItem('category') !== null) {
		switch(sessionStorage.getItem('category')) {
			case 'sports':
				events = sports
				break;
			case 'studentActivities':
				events = studentActivities
				break;
		}
	}
}
CagStartUp();