//class the months
<<<<<<< HEAD
console.log("Big Gay");
=======
>>>>>>> 2c0554e1eeda9dfe8e3fd15ceb0d9c2de6fe3e80
var calender = document.getElementById("Calendar");
var time = new Date();
var date = time.getDate();
var month = time.getMonth()+1; //+1 since the daysInMonth function does not count 0 as a month
var monthNames = ['January','Febuary','March','April','May','June','July','August','September','October','November','December'];
var year = time.getFullYear();
console.log(date + "/" + month + "/" + date); //helps to know the date in the console

var currentMonth = month; //what month is currently getting viewed
console.log(currentMonth);


var events = { //every event is now in the array
	January: {
		month: 1, //says what month it is
		first: [1,"Sample Text",{
			title: "Good Update!",
			par1: "addedd the overlay",
			img1: "images/school.jpg"
		},1],												 //three array variable: date,month,Event Description,Detailed Description
		second: [2,"Sample Text"],
		third: 	[3,"Sample Text"],
		fourth: [4,"Sample Text"],
		fifth: [5,"ur MoM gay LOL",{
			title: "reason why ur MOM big Gay",
			par1: "No U",
			img1: "images/dab.jpg"
		}],
		sixth: [23,"Holla if you here me"]
	},
	Febuary: {
		month: 2
	},
	March: {
		month: 3,
		NationalPigDay: [1,"Animals rise once more"],
		UrMomGayDay: [26,"Jesus will 88"],
		OOF: [27,"THis Should Work"]
	},
	April: {
		month: 4
	},
	June: {
		month: 5
	},
	May: {
		month: 6
	},
	July: {
		month: 7
	},
	August: {
		month: 8
	},
	September: {
		month: 9
	},
	October: {
		month: 10
	},
	November: {
		month: 11
	},
	December: {
		month: 12
	}
}

document.getElementById("Month-name").innerHTML = monthNames[currentMonth-1]; //gets the  current month

function DateOption(option) {
	Days = daysInMonth(option.value,year);
	
	addInDays = document.getElementById("Day-selection");
	
	while(addInDays.firstChild) {
		addInDays.removeChild(addInDays.firstChild);
	}
	
	for(var i=1; i < Days; i++) {
		var date = document.createElement("option");
		date.value = i;
		date.innerHTML = i;
		addInDays.appendChild(date);
	}
}

/* everything for the ADD function */
var overlay = document.getElementById("Add-in-Overlay");

function ToggleAdd() {
	if(overlay.style.display === "block")
		overlay.style.display = "none";
	else
		overlay.style.display = "block";
	
}

function EventAdd() {
	
}

function MoreIndex() {			//empty functions for the add function, will change sooner
	
}

/* end */

function Overlay(title,par1,img1,day) {
	
	var moreDescript = document.createElement("DIV"); //overlay divs
	var infoContainer = document.createElement("DIV"); //where info is held
	
	var descriptTitle = document.createElement("h3"); //title
	var line = document.createElement("hr"); //segregation
	
	var flexShow = document.createElement("DIV"); 
	var descriptPar1 = document.createElement("p");
	var descriptImage1 = document.createElement("img");
	
	var button = document.createElement("button"); //this is temporarily
	
	moreDescript.appendChild(infoContainer);  //appends cotainer to overlay
	infoContainer.appendChild(descriptTitle); // appends title to info container
	infoContainer.appendChild(line); //appends line to info Container
	infoContainer.appendChild(flexShow); // appends flex box which contains text to container
	flexShow.appendChild(descriptPar1); //appends paragraph 1 to text container
	flexShow.appendChild(descriptImage1); //appends image to container
	flexShow.appendChild(button); //button
	
	moreDescript.className = "overlay";
	infoContainer.className = "infoContainer";
	descriptTitle.className = "containerTitle";
	line.className = "containerLine";
	flexShow.className = "containerFlex";
	descriptPar1.className = "containerPar";
	descriptImage1.className = "imageContainer";
	
	descriptTitle.innerHTML = title;
	descriptPar1.innerHTML = par1;
	descriptImage1.src = img1;
	
	button.innerHTML = "THIS IS TEMP FOR STABILITY";
	button.onclick = function(){
		moreDescript.style.display = "none";
	};
	
	moreDescript.id = "overlay-" + day;
	
	document.body.insertBefore(moreDescript, document.body.firstChild);
}

function ClickNext() { //this makes calender display the next date
	if(currentMonth !== 12) {
		var current = document.getElementById("Month-"+currentMonth);
		current.style.display = "none";
		console.log(document.getElementById("Month-"+currentMonth));
		currentMonth += 1;
		document.getElementById("Month-name").innerHTML = monthNames[currentMonth-1];
		document.getElementById("Month-"+currentMonth).style.display = "block";
	}
}

function ClickPrevious() { //vice versa 
	if(currentMonth !== 1) {
		var current = document.getElementById("Month-"+currentMonth);
		current.style.display = "none";
		
		console.log(document.getElementById("Month-"+currentMonth));
		currentMonth -= 1;
		document.getElementById("Month-name").innerHTML = monthNames[currentMonth-1];
		document.getElementById("Month-"+currentMonth).style.display = "block";	
	}
}

function toggleEvents(number) {
	var temp = document.getElementById("overlay-"+number);
	//console.log(temp)
	if(temp.style.display === "none")
		temp.style.display = "block";
	else
		temp.style.display = "none";
}

function daysInMonth (month, year) { //gets the days in a month
    return new Date(year, month, 0).getDate();
}



function Calendar(events) { //whole calender logic
	for(var k=1; k <= 12; k++) {
		var addInMonths = document.createElement("DIV");
		addInMonths.className = "Months";
		addInMonths.id = "Month-" + k;
		//console.log(k);
		//console.log(daysInMonth(k,2018));
		if(k !== month) {
			addInMonths.style.display = "none";
		}
		
		for(var i=1; i <= daysInMonth(k,year); i++) {  //checks the days in the month to reiterate
			
			var addInDays = document.createElement("DIV"); //for days
			var addInDescript = document.createElement("DIV"); //for the description in the divs
			
			//adds the date
			addInDays.className = "Days"; //class name is Days
			addInDays.innerHTML = i;
			
			addInMonths.appendChild(addInDays); //adds in the days
			
			//adds the Description & DIV for the image
			addInDescript.className = "Descriptions"; //class name is Descriptions
			addInDays.appendChild(addInDescript);
			
			for(var j in events) { //logic to add description to the calender
				for(var h in events[j]){
					if((events[j].month === k) && (events[j][h][0] === i)) {
						addInDescript.innerHTML = events[j][h][1];
						
						if(events[j][h][2] !== undefined) {
							console.log(events[j][h][0]);
							Overlay(events[j][h][2].title,events[j][h][2].par1,events[j][h][2].img1,events[j][h][0]); //j = keys in the first class, h = keys in the second classes
							addInDays.addEventListener("click",() => toggleEvents(events[j][h][0]),false); // <---- change the number in the toggle function to test out a other overlay
						}
					}
				}
			}
			
			if((i > date) && (addInDescript.innerHTML) !== "" && (k === month)) { //makes a list for the upcoming events if it i > current date and k === to current month
				var listInfo = document.createElement("li"); 
				listInfo.innerHTML = addInDescript.innerHTML;
				document.getElementById("list").appendChild(listInfo);
			}
		}
		calender.appendChild(addInMonths);
	}
}

//Search bar stuff//
function active(){
	var search = document.getElementById("search");
	if(search.value == "Search..."){
		search.value = ""
		search.placeholder = "Search..."
	}
}

function inactive(){
	var search = document.getElementById("search");
	if(search.value == ""){
		search.value = "Search..."
		search.placeholder = ""
	}
}

<<<<<<< HEAD
MonthDays(31,Januaryevents);
=======
window.onload = Calendar(events);
>>>>>>> 2c0554e1eeda9dfe8e3fd15ceb0d9c2de6fe3e80
