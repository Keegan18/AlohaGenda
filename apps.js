//class the months

var calender = document.getElementById("Calendar")

var January = {
	first: [1,"Sample Text","images/school.jpg"], //three array variable: date, Event Description, Image SRC
	second: [2,"Sample Text","images/school.jpg"],
	third: 	[3,"Sample Text","images/school.jpg"],
	fourth: [4,"Sample Text","images/school.jpg"],
	fifth: [5,"ur MoM gay LOL","images/dab.jpg"]
}

for(var dates in January) {  //implement to function later...
	console.log(January[dates][0]);
	
	var addIn = document.createElement("DIV");
	var addInDescript = document.createElement("DIV");
	var addInImage = document.createElement("IMG");
	
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
}

console.log(calender.childNodes);