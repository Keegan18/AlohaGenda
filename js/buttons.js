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
	if(sessionStorage.getItem("seasonToggle"))
		ColorChange(currentMonth);
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
	if(sessionStorage.getItem("seasonToggle"))
		ColorChange(currentMonth);
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
		
		if(percentOf(tempArr,hold) > 0.1) {
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
	sessionStorage.setItem("seasonToggle", true)
}

function Checkset() {
	if(sessionStorage.getItem("seasonToggle") === null) {
		sessionStorage.setItem("seasonToggle",true)
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
	EssentialsBro.body.style.backgroundColor = "#BFFAFF"; //styles for body
	EssentialsBro.topBar.style.backgroundColor = "#036AB6 "; //styles for top bar
	EssentialsBro.calendar.style.backgroundColor = "#DDF6FD"; //styles for calendar
	
	for(i; i < EssentialsBro.weekendNames.length; i++) { //styles for week names
		EssentialsBro.weekendNames[i].style.backgroundColor = "#6ECAED";
		EssentialsBro.weekendNames[i].style.border = "1px solid #6ECAED";
	}
	for(i=0; i < EssentialsBro.days.length; i++) { //styles for the days
		EssentialsBro.days[i].style.backgroundColor = "#9BD3E8"
		EssentialsBro.days[i].style.border = "1px solid #9BD3E8"
	}
}

function SpringChange() {
	var i=0;
	console.log("ran in spring change");
	EssentialsBro.body.style.backgroundColor = "#B2D500";
	EssentialsBro.topBar.style.backgroundColor = "#FDE027";
	EssentialsBro.calendar.style.backgroundColor = "#EDF28A";
	
	for(i; i < EssentialsBro.weekendNames.length; i++) {
		EssentialsBro.weekendNames[i].style.backgroundColor = "#5FA123";
		EssentialsBro.weekendNames[i].style.border = "1px solid #5FA123";
	}
	
	for(i=0; i < EssentialsBro.days.length; i++) {
		EssentialsBro.days[i].style.backgroundColor = "#5FA123"
		EssentialsBro.days[i].style.border = "1px solid #5FA123"
	}
}

function SummerChange() {
	var i=0;
	console.log("ran in Summer change");
	EssentialsBro.body.style.backgroundColor = "#E9F76C"; //styles for body
	EssentialsBro.topBar.style.backgroundColor = "#F6AD4E"; //styles for top bar
	EssentialsBro.calendar.style.backgroundColor = "#FDEFAA"; //styles for calendar
	
	for(i; i < EssentialsBro.weekendNames.length; i++) { //styles for week names
		EssentialsBro.weekendNames[i].style.backgroundColor = "#1EA9E4";
		EssentialsBro.weekendNames[i].style.border = "1px solid #1EA9E4";
	}
	for(i=0; i < EssentialsBro.days.length; i++) { //styles for the days
		EssentialsBro.days[i].style.backgroundColor = "#F6AD4E"
		EssentialsBro.days[i].style.border = "1px solid #F6AD4E"
	}
}

function AutumnChange() {
	var i=0;
	console.log("ran in Autumn change");
	EssentialsBro.body.style.backgroundColor = "#CF5C36"; //styles for body
	EssentialsBro.topBar.style.backgroundColor = "#470500"; //styles for top bar
	EssentialsBro.calendar.style.backgroundColor = "#EC8E2C-"; //styles for calendar
	
	for(i; i < EssentialsBro.weekendNames.length; i++) { //styles for week names
		EssentialsBro.weekendNames[i].style.backgroundColor = "#D6593E";
		EssentialsBro.weekendNames[i].style.border = "1px solid #D6593E";
	}
	for(i=0; i < EssentialsBro.days.length; i++) { //styles for the days
		EssentialsBro.days[i].style.backgroundColor = "#F6AD4E"
		EssentialsBro.days[i].style.border = "1px solid #F6AD4E"
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