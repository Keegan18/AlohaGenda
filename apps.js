//class the months
<<<<<<< HEAD

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
=======
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

>>>>>>> 874129b5b0f93e8aea569a04bd2e727fe32f9f1e
