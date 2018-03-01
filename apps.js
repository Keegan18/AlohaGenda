//class the months
console.log("Big Gay");
var calender = document.getElementById("Calendar");

var Januaryevents = {
	first: [1,"Sample Text","images/school.jpg"], //three array variable: date, Event Description, Image SRC, Detailed Description
	second: [2,"Sample Text","images/school.jpg"],
	third: 	[3,"Sample Text","images/school.jpg"],
	fourth: [4,"Sample Text","images/school.jpg"],
	fifth: [5,"ur MoM gay LOL","images/dab.jpg","UR MoM iS NOW BiG Gay"]
}

function Overlay(description,clickedDay) {
	var MoreDescript = document.newElement("DIV");
	MoreDescript.className = "MoreInfo"; //class Name for overlays
	MoreDescript.innerHTML = description;
}

function MonthDays(days,events){
	for(var i=1; i < days; i++) {  //implement to function later...
		
		var addInDays = document.createElement("DIV"); //for days
		var addInDescript = document.createElement("DIV"); //for the description in the divs
		
		//adds the date
		addInDays.className = "Days"; //class name is Days
		calender.appendChild(addInDays); //adds in the days
		
		//adds the Description & DIV for the image
		addInDescript.className = "Descriptions"; //class name is Descriptions
		addInDays.appendChild(addInDescript);
		
		for(var j in events){ // logic to add in stuff
			if(events[j][0] === i){
				addInDescript.innerHTML = events[j][1];
			}
			/*if(events[j][3] !== undefined){
				overlay(events[j][3],getElementsByClassName("addInDays")[i];
			} */
		} 
	}
}

MonthDays(31,Januaryevents);

/*
console.log(January[dates][0]);
	
	var addIn = document.createElement("DIV");
	var addInDescript = document.createElement("DIV");
	var addInImage = document.createElement("IMG");
	var days = 31
	
	//adds the date
	addIn.className = "Days"; //class name is Days
	addIn.innerHTML = January[dates][0];
	calender.appendChild(addIn);
	
	//adds the Description & DIV for the image
	addInDescript.className = "Descriptions"; //class name is Descriptions
	addInDescript.innerHTML = January[dates][1];
	addIn.appendChild(addInDescript);
	
	//adds the Images to the Description
	if(January[dates][2] !== undefined) {
		addInImage.className = "DescriptionImages" //class name is DescriptionImages
		addInImage.src = January[dates][2];
		addInDescript.appendChild(addInImage);
	}
*/