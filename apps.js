//class the months

console.log("Big Gay");
var calender = document.getElementById("Calendar");

var Januaryevents = {
	first: [1,"Sample Text","images/school.jpg",{
		title: "Good Update!",
		par1: "addedd the overlay",
		img1: "images/school.jpg"
	}],												 //three array variable: date, Event Description, Image SRC, Detailed Description
	second: [2,"Sample Text","images/school.jpg"],
	third: 	[3,"Sample Text","images/school.jpg"],
	fourth: [4,"Sample Text","images/school.jpg"],
	fifth: [5,"ur MoM gay LOL","images/dab.jpg",{
		title: "reason why ur MOM big Gay",
		par1: "No U",
		img1: "images/dab.jpg"
	}]
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
	
	/* styles of overlay */
	/* ends here */
	
	/* style of header */
	descriptTitle.innerHTML = title;
	/* ends here */
	
	/* styles of info container */
	/* ends here */
	
	/* styles of flex */
	/* ends here */
	
	/* styles of descriptPar1 */
	descriptPar1.innerHTML = par1;
	/* ends here */
	
	/* start of img1 */
	descriptImage1.src = img1;
	/* ends here */
	
	/* start of temp button */
	button.innerHTML = "THIS IS TEMP FOR STABILITY";
	button.onclick = function(){toggle(day)};
	
	/*
	var descriptPar2 = document.createElement("p");
	var descriptImage2 = document.createElement("img");
	if(descriptImage2 !== 0) {
		descriptImage2.src = "images/dab.jpg";
		descriptImage2.style.display = "inline-block";  fix all this later 
		descriptImage2.style.width = "13em";
		descriptImage2.style.height = "14em";
		
		flexShow.appendChild(descriptImage2);
	} */
	
	moreDescript.id = "overlay-" + day; //class Name for overlays
	
	
	document.body.insertBefore(moreDescript,document.body.firstChild);
}

function toggle(number) {
	if(document.getElementById("overlay-"+number).style.display === "none") {
		document.getElementById("overlay-"+number).style.display = "block"; //will shorten to var later
	} else {
		document.getElementById("overlay-"+number).style.display = "none";
	}
}

function MonthDays(days,events){
	for(var i=1; i < days; i++) {  //implement to function later...
		
		var addInDays = document.createElement("DIV"); //for days
		var addInDescript = document.createElement("DIV"); //for the description in the divs
		
		//adds the date
		addInDays.className = "Days"; //class name is Days
		addInDays.innerHTML = i;
		calender.appendChild(addInDays); //adds in the days
		
		//adds the Description & DIV for the image
		addInDescript.className = "Descriptions"; //class name is Descriptions
		addInDays.appendChild(addInDescript);
		
		for(var j in events){ // logic to add in stuff
			if(events[j][0] === i){
				addInDescript.innerHTML = events[j][1];
				
				if(events[j][3] !== undefined) {
					console.log(events[j])
					Overlay(events[j][3].title,events[j][3].par1,events[j][3].img1,events[j][0]);
					addInDescript.addEventListener("click",function(){toggle(events[j][0])},true); //gives update to display overlay
				}
			}
			
		} 
	}
}

MonthDays(32,Januaryevents);
