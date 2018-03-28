# PD.7-Calendar
This is a calendar 
//idea, give every overlay a id, then pass down a toggle function where it gets the class element of the day, znd then gicing that class a event listener

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
	
	descriptTitle.innerHTML = title;
	descriptPar1.innerHTML = par1;
	descriptImage1.src = img1;
	
	button.innerHTML = "THIS IS TEMP FOR STABILITY";
	button.onclick = function(){
		moreDescript.style.display = "none";
	};
	
	moreDescript.id = "overlay-" + day;
	
	document.body.insertBefore(moreDescript, document.body.firstChild);
	
	/* 
	And in the death,
	As the last few corpses lay rotting on the slimy
	Thoroughfare,
	The shutters lifted in inches in Temperance Building,
	High on Poacher's Hill.
	And red, mutant, eyes gaze down on Hunger City.
	No more big wheels.
	Fleas the size of rats sucked on rats the size of cats,
	And ten thousand peoploids split into small tribes,
	Coveting the highest of the sterile skyscrapers,
	Like packs of dogs assaulting the glass fronts of Love-Me Avenue.
	Ripping and rewrapping mink and shiny silver fox, now leg-warmers.
	Family badge of sapphire and cracked emerald.
	Any day now,
	The year of the Diamond Dogs.
	*/
	
	what to work on: 
	-Quick Descriptions and their maximum value of words
	-Styles and color palet of the websites to prevent presentation from looking like visual AIDS and make it more simplistic
	-Adding in pictures for the add feature
	-Aargons future dream
	-Add all the redundant stuff in for the dates