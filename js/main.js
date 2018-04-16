document.getElementById("Month-name").innerHTML = monthNames[currentMonth-1]; //gets the  current month
document.getElementById("Year-number").innerHTML = currentYear;

function DateOption(option) {
	Days = daysInMonth(option.value,year);
	
	addInDays = document.getElementById("Day-selection");
	
	while(addInDays.firstChild) {
		addInDays.removeChild(addInDays.firstChild);
	}
	
	for(var i=1; i <= Days; i++) {
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

function SetEverything() { //sets the user info in custom events if their is anything 
	var userStuff = sessionStorage.getItem('userData');
	if(userStuff !== null) {
		customEvents = JSON.parse(userStuff);
	}
}
SetEverything();
console.log(customEvents);

function AddToMain() {
	for(var i in events) {
		console.log(events[i]);
		for(var d in customEvents) {
			if(events[i].year === customEvents[d].year) {
				for(var f in events[i]) {
					if(customEvents[d][f] !== undefined && events[i][f].month === customEvents[d][f].month && events[i][f] !== 2018) {
						for(var j in customEvents[d][f]) {
							if(typeof customEvents[d][f][j] !== "number") {
								events[i][f]["" + customEvents[d][f][j][1]] = customEvents[d][f][j];
							}
						}
					}
				}
			}
		}
	}
	console.log(events);
}
AddToMain(); //I will make this Algorithm Better 

function EventAdd() {
	var yearSelection = parseInt(document.getElementById("Year-selection").value);
	var monthSelection = parseInt(document.getElementById("Month-selection").value);
	var daySelection = parseInt(document.getElementById("Day-selection").value);
	var quicky = document.getElementById("Quick-descript").value;
	var userArray = [daySelection,quicky];
	var userClass = { };
	
	var parName = 1;
	headerName += 1;
	
	var holder = document.getElementById("Add-in-holder").getElementsByTagName("input"); //try to be more efficient, but, geets the values of input and puts them 
	for(var i=0; i < holder.length; i++) {
		if(holder[i].name === "Title") {
			userClass["Title"] = holder[i].value
		} else if(holder[i].name === "Header") {
			var headerName = 1
			userClass["header"+1] = holder[i].value
		} else if(holder[i].name === "Paragraph") {
			userClass["par" + parName] = holder[i].value;
			parName += 1;
		}
	} 
	userArray.push(userClass);
	if(customEvents.yearSelection === undefined) {
		customEvents[yearSelection] = {
			year: yearSelection
		};
	}
	
	if(customEvents[yearSelection][monthNames[monthSelection-1]] === undefined) {
		customEvents[yearSelection][monthNames[monthSelection-1]] = {
				month: monthSelection
		};
	}
	
	
	//customEvents[yearSelection][monthNames[monthSelection-1]]["" + userArray[1] = userArray;
	sessionStorage.setItem('userData',JSON.stringify(customEvents));
	location.reload();
}

function MoreIndex() {			//empty functions for the add function, will change sooner
	
	var head = document.createElement("input"); //creation of another header
	head.className = "Header";
	head.placeholder = "Header";
	
	var par = document.createElement("input"); //creation of an another paragraph
	par.className = "Paragraph";
	par.placeholder = "Paragraph";
	
	document.getElementById("Add-in-holder").insertBefore(head,document.getElementById("more"));
	document.getElementById("Add-in-holder").insertBefore(par,document.getElementById("more"));
}

function toggleEvents(number,month,year) {
	var temp = document.getElementById("overlay-"+ number + "-month-" + month + "-year-" + year);
	////console.log(temp)
	if(temp.style.display === "none")
		temp.style.display = "block";
	else
		temp.style.display = "none";
}

function daysInMonth (month, year) { //gets the days in a month
    return new Date(year, month, 0).getDate();
}




function determineEvent(days) {
	var eventNum = +days.innerHTML.slice(0,1);
	//console.log(eventNum);
	for (var oof=0; oof<=overlayStuff.length-1; oof++) {
		if (eventNum === overlayStuff[oof]) {
			return overlayStuff[oof]
		}
	}
}


function addEvent(day, arr,month,year) {
	var currentCounter = counter; //0
	var num = arr[currentCounter];
	var placeholder = day.addEventListener("click",() => toggleEvents(num,month,year),false);
	counter++;
	return placeholder
}

function Calendar(events) { //whole calender logic
	for(var y=year; y <= year + yearOn; y++) { //adds in the years
		var addInYears = document.createElement("DIV");
		addInYears.className = "Years";
		addInYears.id = "Year-" + y;
		
		if(y !== year) {
			addInYears.style.display = "none";
		}
		
		for(var k=1; k <= 12; k++) {
			var addInMonths = document.createElement("DIV");
			addInMonths.className += monthNames[k-1];
			addInMonths.id = "Month-" + k + "-year-" + y;
			
			if(k !== month) {
				addInMonths.style.display = "none";
			}
			
			for(var i=1; i <= daysInMonth(k,year); i++) {  //checks the days in the month to reiterate
				
				var addInDays = document.createElement("DIV"); //for days
				var addInDescript = document.createElement("DIV"); //for the description in the divs
				
				//adds the date
				addInDays.className = "Days" + " Day"+i; //class name is Days
				addInDays.innerHTML = i;
				
				addInMonths.appendChild(addInDays); //adds in the days
				
				//adds the Description & DIV for the image
				addInDescript.className = "Descriptions"; //class name is Descriptions
				addInDays.appendChild(addInDescript);
				
				for(var p in events) {
					for(var j in events[p]) { //logic to add description to the calender
						for(var h in events[p][j]){
							if((events[p][j].month === k) && (events[p][j][h][0] === i) && (events[p].year === y)) {
								addInDescript.innerHTML = events[p][j][h][1];
								if(events[p][j][h][2] !== undefined) {
									var placeholder = events[p][j][h][0];
									overlayStuff.push(placeholder)
									Overlay(events[p][j][h][2],events[p][j][h][0],events[p][j].month,events[p].year); //j = keys in the first class, h = keys in the second classes

									//console.log(addInDays.innerHTML.slice(0,1));
									var placeholder = determineEvent(addInDays);

									addEvent(addInDays, overlayStuff, events[p][j].month,events[p].year);
								}
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
			addInYears.appendChild(addInMonths);
		}
		calender.appendChild(addInYears);
	}
}

window.onload = Calendar(events);