//class the months
var calender = document.getElementById("Calendar");
var time = new Date();
var date = time.getDate();
var month = time.getMonth();
var monthNames = ['January','Febuary','March','April','June','May','June','July','August','October','November','December']
var year = time.getYear();


var currentMonth = month; //what month is currently getting viewed

var events = { //every event is now in the array
	January: {
		month: 0, //says what month it is
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
		month: 1
	},
	March: {
		month: 2,
		NationalPigDay: [1,"Animals rise once more"],
		UrMomGayDay: [26,"Jesus will 69"]
	},
	April: {
		month: 3
	},
	June: {
		month: 4
	},
	May: {
		month: 5
	},
	July: {
		month: 6
	},
	August: {
		month: 7
	},
	September: {
		month: 8
	},
	October: {
		month: 9
	},
	November: {
		month: 10
	},
	December: {
		month: 11
	}
}

document.getElementById("Month-name").innerHTML = monthNames[currentMonth]; //gets the  current month

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

function EventAdd() {
	
}

function MoreIndex() {			//empty functions for the add function, will change sooner
	
}

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
	if(currentMonth !== 11) {
		var current = document.getElementById("Month-"+currentMonth);
		current.style.display = "none";
		console.log(document.getElementById("Month-"+currentMonth));
		currentMonth += 1;
		document.getElementById("Month-name").innerHTML = monthNames[currentMonth];
		document.getElementById("Month-"+currentMonth).style.display = "block";
	}
}

function ClickPrevious() { //vice versa 
	if(currentMonth !== 0) {
		var current = document.getElementById("Month-"+currentMonth);
		current.style.display = "none";
		
		console.log(document.getElementById("Month-"+currentMonth));
		currentMonth -= 1;
		document.getElementById("Month-name").innerHTML = monthNames[currentMonth];
		document.getElementById("Month-"+currentMonth).style.display = "block";	
	}
}

function toggle(number) {
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
	for(var k=0; k <= 11; k++) {
		var addInMonths = document.createElement("DIV");
		addInMonths.className = "Months";
		addInMonths.id = "Month-" + k;
		
		if(k !== month) {
			addInMonths.style.display = "none";
		}
		
		for(var i=1; i < daysInMonth(k,year); i++) {  //checks the days in the month to reiterate
			
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
							addInDays.addEventListener("click",() => toggle(1),false); // <---- change the number in the toggle function to test out a other overlay
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

window.onload = Calendar(events);