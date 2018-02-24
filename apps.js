//class the months

var calender = document.getElementById("Calendar")

var January = {
	first: [1,"Sample Text","images/school.jpg"], //three array variable: date, Event Description, Image SRC
	second: [2,"Sample Text","images/school.jpg"],
	third: 	[3,"Sample Text","images/school.jpg"],
	fourth: [4,"Sample Text","images/school.jpg"],
	fifth: [5,"ur MoM gay LOL","images/dab.jpg"],
	sixth: [6,"Something","images/school.jpg"],
	seventh: [7,"Sample Text","images/school.jpg"],
	eigth: [8,"Sample Text" ,"images/school.jpg"],
	ninth: [9,"Smalpe Txet" ,"images/school.jpg"],
	tenth: [10,"elpmaS txeT" ,"images/dab.jpg"],
	eleventh: [11,"Something" ,"images/dab.jpg"],
	tweleveth: [12,"gnihtemos txeT" ,"images/school.jpg"],
	thirteenth: [13,"TeXt GoEs HeRe" ,"images/dab.jpg"],
	fouteenth: [14,"Test Text for height" ,"images/school.jpg"],
	fifteenth: [15,"I don't know" ,"images/school.jpg"],
	sixteenth: [16,"Text Test" ,"images/dab.jpg"],
	seventeenth: [17,"Test Text" ,"images/school.jpg"],
	eighteenth: [18,"Hate This" ,"images/school.jpg"],
	nineteenth: [19,"Send Help","images/dab.jpg"],
	twentyth: [20,"They are" ,"images/school.jpg"],
	twentyfirst: [21,"Holding me" ,"images/dab.jpg"],
	twentysecond: [22, "Hostage at" ,"images/dab.jpg"],
	twentythird: [23,"This Station" ,"images/dab.jpg"],
	twentyfourth: [24,"Please Bring" ,"images/school.jpg"],
	twentyfive: [25,"Me Food", "images/dab.jpg"],
	twentysix: [26,"Mrs.Takara" ,"images/school.jpg"],
	twentyseven: [27,"Nah Nah" ,"images/dab.jpg"],
	twentyeight: [28,"I'm Not" ,"images/school.jpg"],
	twentynine: [29,"Being Held" ,"images/school.jpg"],
	thirty: [30,"Hostage At The" ,"images/dab.jpg"],
	thirtyone: [31,"Station" ,"images/school.jpg"]


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