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
		search.placeholder = "Search..."
	}
}

function inactive(){
	var search = document.getElementById("search");
	if(search.value == ""){
		search.value = "Search...";
		search.placeholder = "";
	}
}

 function SearchBar() {
	var hold = document.getElementById("search").value.toLowerCase();
	console.log(hold);
	if(hold !== "search...") {
		if(hold === "mlk day 2019" || hold === "overlay-21-month-1-year-2019") {
			document.getElementById("overlay-21-month-1-year-2019").style.display = "block";
		} else if (hold === "april fools day 2018" || hold === "overlay-1-month-4-year-2018") {
			document.getElementById("overlay-1-month-4-year-2018").style.display = "block";
		} else if (hold === "pi day 2018" || hold === "overlay-14-month-3-year-2018") {
			document.getElementById("overlay-14-month-3-year-2018").style.display = "block";
		} else if (hold === "safety fair 2018" || hold === "overlay-1-month-3-year-2018") {
			document.getElementById("overlay-1-month-3-year-2018").style.display = "block";
		} 
	}
} 