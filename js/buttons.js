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