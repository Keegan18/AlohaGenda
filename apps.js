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

var currentMonth = month; //what month is currently getting viewed
var currentYear = year;
console.log(currentMonth);


var events = { //every event is now in the array
	2018: {
		year: 2018,
		January: {
			month: 1, //says what month it is
			first: [1,"Sample Text",{
				title: "Good Update!",
				par1: "addedd the overlay",
				img1: "images/school.jpg",
				par2: "plus this cool flexible feature, fits mulitple items instead of one",
				img2: "images/To women.jpg",
				par3: "just make sure you give keys there respective names",
				img3: "images/layermask.png"
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
			NationalPigDay: [1,"Animals rise once more", {
				title: "Extra: Napoleon kicks Snowball fom Animal Farm, is new leader",
				par1: "All Animals our equal, but some are more equal than others"
			}],
			UrMomGayDay: [26,"Jesus will 88", {
				title: "Typo: 69 was the #",
				header1: "88",
				par1: "OOF"
			}],
			OOF: [27,"THis Should Work", {
				title:"It DID!",
				header1: "WORKING",
				par1: "Works, now just for the styles"
			}]
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
	},
	2019: {
		year: 2019,
		January: {
			month: 1,
			Rutles: [1,"The Rutles Live Concert", {
				title: "THe Rutles & Beatles Live in concert",
				header1: "Whats being Natural?",
				par1: "Ultimate combo to which your monf would explode",
				img1: "images/To women.jpg"
			}]
		}
	}
}

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

function EventAdd() {
	var daySelection = document.getElementById("Day-selection").value;
	var quicky = document.getElementById("Quick-descript").value;
	var monthSelction = document.getElementById("Month-selection").value;
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
	console.log(userArray);
	console.log(userClass);
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

/* end */

function Overlay(className,number,month,year) {
	
	/* declaration of everything to be in the overlay intially */
	var moreDescript = document.createElement("DIV"); //overlay divs
	var infoContainer = document.createElement("DIV"); //where title,line are
	var descriptTitle = document.createElement("h3"); //title
	var line = document.createElement("hr"); //segregation
	var flexShow = document.createElement("DIV"); //where paragraph and images are held
	var exitButton = document.createElement("button"); //button to exit overlay
	exitButton.innerHTML = "X";
	/* end */
	
	/* appending everything with its elements respectfully */
	document.body.insertBefore(moreDescript, document.body.firstChild); //appends overlay to document
	moreDescript.appendChild(exitButton); //appends button to overlay
	moreDescript.appendChild(infoContainer);  //appends cotainer to overlay
	infoContainer.appendChild(descriptTitle); // appends title to info container
	infoContainer.appendChild(line); //appends line to info Container
	infoContainer.appendChild(flexShow); // appends flex box which contains text to container
	/*lexShow.appendChild(button); */ //button
	
	/*end */
	
	/* all the contents that are and customally added */
	for(var temp in className) {
		if(temp === "title") 
			descriptTitle.innerHTML = className[temp];
		
		if(temp.search("par") !== -1) { 				//finds if its a paragraph key respectfully
			var descriptPar = document.createElement("p");
			descriptPar.innerHTML = className[temp];
			descriptPar.className = "Overlay-paragraphs";
			flexShow.appendChild(descriptPar);
		}
		if(temp.search("img") !== -1) {
			var descriptImg = document.createElement("img");
			descriptImg.src = className[temp];
			descriptImg.className = "Overlay-images";
			flexShow.appendChild(descriptImg);
		}
		if(temp.search("header") !== -1) {
			var descriptHeader = document.createElement("h3");
			descriptHeader.innerHTML = className[temp];
			descriptHeader.className = "Overlay-headers";
			flexShow.appendChild(descriptHeader);
		}
	} 
	/* end */
	
	/* giving the all the elements class name for stylization */
	moreDescript.id = "overlay-"+ number + "-month-" + month + "-year-" + year; //id for overlay, to access specific overlay
	moreDescript.className = "overlay"; //class name for overlay
	infoContainer.className = "infoContainer"; //class name for the container that holds every content
	descriptTitle.className = "containerTitle"; //class name container for the titles
	line.className = "containerLine"; // class name for container line 
	flexShow.className = "containerFlex"; //class name for par and img holder div
	/* end */
	
	/* this is for the exit button */
	exitButton.onclick = function() {
		moreDescript.style.display = "none";
	}
	
	console.log(moreDescript.id);
}

function ClickNext() { //this makes calender display the next date
	if(currentMonth !== 12) {
		var current = document.getElementById("Month-"+currentMonth+ "-year-" + currentYear);
		current.style.display = "none";
		console.log(document.getElementById("Month-"+currentMonth+ "-year-" + currentYear));
		currentMonth += 1;
		document.getElementById("Month-name").innerHTML = monthNames[currentMonth-1];
		document.getElementById("Month-"+currentMonth+ "-year-" + currentYear).style.display = "block";
	} else if(currentYear !== year + (yearOn)) {
		document.getElementById("Month-"+ currentMonth + "-year-" + currentYear).style.display = "none";
		document.getElementById("Year-"+currentYear).style.display = "none";
		currentMonth = 1;
		currentYear += 1;
		document.getElementById("Month-name").innerHTML = monthNames[currentMonth-1];
		document.getElementById("Year-number").innerHTML = currentYear;
		document.getElementById("Year-"+currentYear).style.display = "block";
		document.getElementById("Month-"+currentMonth + "-year-" + currentYear).style.display = "block";
		document.getElementById("Month-"+ month + "-year-" + currentYear).style.display = "none";
	}
}

function ClickPrevious() { //vice versa 
	if(currentMonth !== 1) {
		var current = document.getElementById("Month-"+currentMonth+ "-year-" + currentYear);
		current.style.display = "none";
		
		console.log(document.getElementById("Month-"+currentMonth));
		currentMonth -= 1;
		document.getElementById("Month-name").innerHTML = monthNames[currentMonth-1];
		document.getElementById("Month-"+ currentMonth + "-year-" + currentYear).style.display = "block";	
	} else if(currentYear !== year) {
		document.getElementById("Month-"+ currentMonth + "-year-" + currentYear).style.display = "none";
		document.getElementById("Year-"+currentYear).style.display = "none";
		currentMonth = 12;
		currentYear -= 1;
		document.getElementById("Month-name").innerHTML = monthNames[currentMonth-1];
		document.getElementById("Year-number").innerHTML = currentYear;
		document.getElementById("Year-"+currentYear).style.display = "block";
		document.getElementById("Month-"+currentMonth + "-year-" + currentYear).style.display = "block";
	}
}

function toggleEvents(number,month,year) {
	var temp = document.getElementById("overlay-"+ number + "-month-" + month + "-year-" + year);
	//console.log(temp)
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
	console.log(eventNum);
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

var counter = 0;
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
			addInMonths.className = "Months";
			addInMonths.id = "Month-" + k + "-year-" + y;
			
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
				
				for(var p in events) {
					for(var j in events[p]) { //logic to add description to the calender
						for(var h in events[p][j]){
							if((events[p][j].month === k) && (events[p][j][h][0] === i) && (events[p].year === y)) {
								addInDescript.innerHTML = events[p][j][h][1];
								if(events[p][j][h][2] !== undefined) {
									var placeholder = events[p][j][h][0];
									overlayStuff.push(placeholder)
									Overlay(events[p][j][h][2],events[p][j][h][0],events[p][j].month,events[p].year); //j = keys in the first class, h = keys in the second classes

									console.log(addInDays.innerHTML.slice(0,1));
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
		search.value = "Search...";
		search.placeholder = "";
	}
}

window.onload = Calendar(events);