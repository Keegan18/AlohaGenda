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
	document.getElementById("main-items").style.display = "block";
}