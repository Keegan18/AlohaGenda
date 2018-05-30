function ClickNext() { //this makes calender display the next date
	var temp = sessionStorage.getItem("seasonToggle");
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
	if(temp) {
		ColorChange(currentMonth);
	}
	console.log(sessionStorage.getItem("seasonToggle"));
}

function ClickPrevious() { //vice versa 
	var temp = sessionStorage.getItem("seasonToggle");
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
	if(temp) {
		ColorChange(currentMonth);
	}
	console.log(sessionStorage.getItem("seasonToggle"));
}

//Search bar stuff//
function active(){
	var search = document.getElementById("search");
	if(search.value == "Search..."){
		search.value = ""
		search.placeholder = "Search...";
	}
}

function inactive(){
	var search = document.getElementById("search");
	if(search.value == ""){
		search.value = "Search...";
		search.placeholder = "";
	}
}

function percentOf(searchArr,mainArr) {
	var j = 0;
	var i = 0;

	var percenTan = searchArr.length;
	var numberOfRight = 0;

	for(i; i < searchArr.length; i++) {
		for(j = 0; j < mainArr.length; j++) {
			if(mainArr[j] === searchArr[i]) {
				numberOfRight += 1;
			}
		}
	}
	return numberOfRight / percenTan;
}

 function SearchBar() {
	var hold = document.getElementById("search").value.toLowerCase().split(" ");
	var searchOverlays = document.getElementsByClassName("overlay");
	for(var i=0; i < searchOverlays.length; i++) {
		
		var tempArr = searchOverlays[i].childNodes[1].childNodes[0].innerHTML.toLowerCase().split(" ");
		
		if(percentOf(tempArr,hold) > 0.5) {
			searchOverlays[i].style.display = "block";
		}
	}
} 

function SwitchCags(option) {
	sessionStorage.setItem('category', option.value);
	sessionStorage.setItem('categoryName', option.innerHTML);
	location.reload();
}

function ToggleDrop(option) {
	var temp = option.innerHTML;
	var temo = document.getElementsByClassName("top-down-items-lower");
	for(var i=0; i < temo.length; i++) {
		temo[i].style.display = "none";
	}
	if(temp === " Categories ") {
		console.log("categories");
		document.getElementById("Category-container").style.display = "block";
	}
	else if(temp === " Features ") {
		console.log("Features");
		document.getElementById("Search_and_stuff").style.display = "block";
	}
	
	else if(temp === " Upcoming ") {
		console.log("Upcoming");
		document.getElementById("upcoming-drop").style.display = "block";
	}
}

function ToggleDrops(option) {
	if(document.getElementById("main-items").style.display === "none")
		document.getElementById("main-items").style.display = "block";
	else
		document.getElementById("main-items").style.display = "none";
}

function SetFalse() {
	sessionStorage.setItem("seasonToggle",false)
}

function SetTrue() {
	sessionStorage.setItem("seasonToggle",true)
}

function Checkset() {
	if(sessionStorage.getItem("seasonToggle") === null) {
		sessionStorage.setItem("seasonToggle",1)
		Checkset.temp = 1;
	} else if(Checkset.temp === 1) {
		Checkset.temp = 2;
		SetFalse();
	} else {
		Checkset.temp = 1;
		SetTrue();
	}
	console.log(sessionStorage.getItem("seasonToggle"));
}

function WinterChange() {
	var i=0;
	console.log("ran in Winter change");
	EssentialsBro.body.style.backgroundColor = "rgb(3, 106, 182)"; //styles for body
	
	EssentialsBro.topBar.style.background = "rgb(3, 106, 182)"; //styles for top bar
	
	EssentialsBro.calendar.style.background = "rgb(3,106,182)"; //styles for calendar
	EssentialsBro.calendar.style.background = "linear-gradient(180deg, rgba(3,106,182,1) 1%, rgba(221,246,253,1) 86%)"; //styles for calendar
	
	for(i; i < EssentialsBro.weekendNames.length; i++) { //styles for week names
		EssentialsBro.weekendNames[i].style.backgroundColor = "#6ECAED";
		EssentialsBro.weekendNames[i].style.border = "1px solid #6ECAED";
	}
	for(i=0; i < EssentialsBro.days.length; i++) { //styles for the days
		EssentialsBro.days[i].style.backgroundColor = "#9BD3E8";
		EssentialsBro.days[i].style.border = "1px solid #9BD3E8";
	}
}

function SpringChange() {
    var i=0;
    console.log("ran in spring change");
    EssentialsBro.body.style.background = "rgba(244,159,171,1)";
    EssentialsBro.topBar.style.background = "rgba(244,159,171,1)";
    
    EssentialsBro.calendar.style.background = "rgb(178,213,0)";
    EssentialsBro.calendar.style.background = "linear-gradient(0deg, rgba(217,247,250,1) 40%, rgba(244,159,171,1) 77%)";
    
    for(i; i < EssentialsBro.weekendNames.length; i++) {
        EssentialsBro.weekendNames[i].style.backgroundColor = "#e4e910";
        EssentialsBro.weekendNames[i].style.border = "1px solid #e4e910";
    }
    
    for(i=0; i < EssentialsBro.days.length; i++) {
        EssentialsBro.days[i].style.backgroundColor = "#f0d10c";
        EssentialsBro.days[i].style.border = "1px solid #f0d10c";
    }
}

function SummerChange() {
	var i=0;
	console.log("ran in Summer change");
	
	EssentialsBro.body.style.background = "#0eadf0"; //styles for body
	EssentialsBro.body.style.background = "#0eadf0"; //styles for body
	
	EssentialsBro.topBar.style.background = "#0eadf0"; //styles for top bar
	
	EssentialsBro.calendar.style.background = "rgb(246,173,78)"; //styles for calendar
	EssentialsBro.calendar.style.background = "linear-gradient(0deg, rgba(255,144,0,1) 11%, rgba(253,224,39,1) 66%, rgba(14,173,240,1) 100%)"; //styles for calendar
	
	for(i; i < EssentialsBro.weekendNames.length; i++) { //styles for week names
		EssentialsBro.weekendNames[i].style.backgroundColor = "#1EA9E4";
		EssentialsBro.weekendNames[i].style.border = "1px solid #1EA9E4";
	}
	for(i=0; i < EssentialsBro.days.length; i++) { //styles for the days
		EssentialsBro.days[i].style.backgroundColor = "#F6AD4E";
		EssentialsBro.days[i].style.border = "1px solid #F6AD4E";
	}
}

function AutumnChange() {
	var i=0;
	console.log("ran in Autumn change");
	EssentialsBro.body.style.background = "#ec8e2c"; //styles for body
	EssentialsBro.topBar.style.background = "#ec8e2c"; //styles for top bar
	
//background: rgb(71,5,0);
//background: linear-gradient(0deg, rgba(71,5,0,0.958420868347339) 8%, rgba(207,92,54,1) 49%, rgba(236,142,44,1) 88%);
	
	EssentialsBro.calendar.style.background = "rgb(71,5,0)"; //styles for calendar
	EssentialsBro.calendar.style.background = "linear-gradient(0deg, rgba(71,5,0,0.958420868347339) 8%, rgba(207,92,54,1) 49%, rgba(236,142,44,1) 88%)"; //styles for calendar
	
	for(i; i < EssentialsBro.weekendNames.length; i++) { //styles for week names
		EssentialsBro.weekendNames[i].style.backgroundColor = "#D6593E";
		EssentialsBro.weekendNames[i].style.border = "1px solid #D6593E";
	}
	for(i=0; i < EssentialsBro.days.length; i++) { //styles for the days
		EssentialsBro.days[i].style.backgroundColor = "#F6AD4E";
		EssentialsBro.days[i].style.border = "1px solid #F6AD4E";
	}
}

function InitiateColor() {
	SpringChange();
}

function ColorChange(month) {
	var hold = document.getElementsByClassName('Day-container');
	
	switch(month) {
		case 12:
		case 1:
		case 2:
			WinterChange();
		break;
		
		case 3:
		case 4:
		case 5:
			SpringChange();
		break;
		
		case 6:
		case 7:
		case 8:
			SummerChange();
		break;
		
		case 9:
		case 10:
		case 11:
			AutumnChange();
	}
}