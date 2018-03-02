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
	
	moreDescript.appendChild(infoContainer);
	infoContainer.appendChild(descriptTitle);
	infoContainer.appendChild(line);
	infoContainer.appendChild(flexShow);
	flexShow.appendChild(descriptPar1);
	flexShow.appendChild(descriptImage1);
	flexShow.appendChild(button);
	
	/* styles of overlay */
	moreDescript.style.width = "100%";
	moreDescript.style.height = "100%";
	moreDescript.style.display = "none";
	moreDescript.style.position = "fixed";
	moreDescript.style.backgroundColor = "RGBA(0,0,0,0.5)";
	moreDescript.style.zIndex = "2";
	/* ends here */
	
	/* style of header */
	descriptTitle.innerHTML = title;
	descriptTitle.style.textAlign = "left";
	descriptTitle.style.padding = "2px";
	/* ends here */
	
	/* styles of info container */
	infoContainer.style.width = "43em";
	infoContainer.style.height = "23em";
	infoContainer.style.margin = "auto";
	infoContainer.style.backgroundColor = "grey";
	/* ends here */
	
	/* styles of flex */
	flexShow.style.display = "flex";
	flexShow.style.flexDirection = "column";
	flexShow.style.flexWrap = "wrap";
	flexShow.style.width = "100%";
	flexShow.style.height = "100%";
	flexShow.style.overflow = "hidden";
	/* ends here */
	
	/* styles of descriptPar1 */
	descriptPar1.innerHTML = par1;
	descriptPar1.style.width = "23em";
	descriptPar1.style.height = "13em";
	descriptPar1.style.margin = "0 2% 0 1%";
	descriptPar1.style.display = "inline-block";
	descriptPar1.style.border = "1px solid black";
	descriptPar1.style.textAlign = "left";
	descriptPar1.style.padding = "7px";
	/* ends here */
	
	/* start of img1 */
	descriptImage1.src = img1;
	descriptImage1.style.display = "inline-block";
	descriptImage1.style.marginRight = "10%";
	descriptImage1.style.width = "13em";
	descriptImage1.style.height = "14em";
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

MonthDays(31,Januaryevents);

