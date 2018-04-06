function Overlay(className,number,month,year) {
	
	/* declaration of everything to be in the overlay intially */
	
	Overlay.imgIndex = 1;
	
	var moreDescript = document.createElement("DIV"); //overlay divs
	
	var infoContainer = document.createElement("DIV"); //where title,line are
	
	var descriptTitle = document.createElement("h3"); //title
	
	var line = document.createElement("hr"); //segregation
	
	var imgShow = document.createElement("DIV"); //where all the images will go 
	imgShow.style.display = "none";
	
	var flexShow = document.createElement("DIV"); //where paragraph and images are held
	
	
	var imgLeft = document.createElement("button");
	imgLeft.style.display = "none";
	var imgRight = document.createElement("button");
	imgRight.style.display = "none";
	var exitButton = document.createElement("button"); //button to exit overlay
	
	imgLeft.innerHTML = "<";
	imgRight.innerHTML = ">";
	exitButton.innerHTML = "X";
	/* end */
	
	/* appending everything with its elements respectfully */
	document.body.insertBefore(moreDescript, document.body.firstChild); //appends overlay to document
	
	moreDescript.appendChild(exitButton); //appends button to overlay
	moreDescript.appendChild(infoContainer);  //appends cotainer to overlay
	
	infoContainer.appendChild(descriptTitle); // appends title to info container
	infoContainer.appendChild(line); //appends line to info Container
	infoContainer.appendChild(flexShow); // appends flex box which contains text to container

	flexShow.appendChild(imgLeft);
	flexShow.appendChild(imgRight);
	flexShow.appendChild(imgShow);
	
	/*lexShow.appendChild(button); */ //button
	
	/*end */
	
	/* giving the all the elements class name for stylization */
	moreDescript.id = "overlay-"+ number + "-month-" + month + "-year-" + year; //id for overlay, to access specific overlay
	moreDescript.className = "overlay"; //class name for overlay
	
	infoContainer.className = "infoContainer"; //class name for the container that holds every content
	
	descriptTitle.className = "containerTitle"; //class name container for the titles
	
	line.className = "containerLine"; // class name for container line 
	
	flexShow.className = "containerFlexNoImage"; //class name for par and img holder div
	
	imgShow.className = "imageContainer";
	
	exitButton.className = "exitButton";
	imgLeft.className = "imgLeft";
	imgRight.className = "imgRight";
	
	/* end */
	
	/* all the contents that are and customally added */
	for(var temp in className) {
		if(temp === "title") 
			descriptTitle.innerHTML = className[temp];
		
		if(temp.search("header") !== -1) {
			var descriptHeader = document.createElement("h3");
			descriptHeader.innerHTML = className[temp];
			descriptHeader.className = "Overlay-headers";
			flexShow.appendChild(descriptHeader);
		}

		if(temp.search("par") !== -1) { 				//finds if its a paragraph key respectfully
			var descriptPar = document.createElement("p");
			descriptPar.innerHTML = className[temp];
			descriptPar.className = "Overlay-paragraphs";
			flexShow.appendChild(descriptPar);
		}
		if(temp.search("img") !== -1) {
			var descriptImg = document.createElement("img");
			descriptImg.src = className[temp];
			descriptImg.className = "Overlay-images";
			imgShow.appendChild(descriptImg);
			if(imgShow.getElementsByTagName("img").length > 1) {
				descriptImg.style.display = "none";
				imgRight.style.display = "block";
				imgLeft.style.display = "block";
			}
			if(imgShow.getElementsByTagName("img").length === 1) {
				flexShow.className = "containerFlex";
				imgShow.style.display = "block";
			} 
		} 
	}
	/* end */
	
	
	function imgShowIndex() {
		if (Overlay.imgIndex < 1) {
			Overlay.imgIndex = imgShow.getElementsByTagName("img").length;
		}
		
		if (Overlay.imgIndex > imgShow.getElementsByTagName("img").length) {
			Overlay.imgIndex = 1;
		}
		
		for(var i=0; i < imgShow.getElementsByTagName("img").length; i++) {
			imgShow.getElementsByTagName("img")[i].style.display = "none";
		}
		imgShow.getElementsByTagName("img")[Overlay.imgIndex-1].style.display = "block";
	} 
	
	/* this is for the exit button */
	exitButton.onclick = function() {
		moreDescript.style.display = "none";
		Overlay.imgIndex = 1;
		imgShowIndex();
	}
	
	imgLeft.onclick = function() {
		Overlay.imgIndex -= 1;
		imgShowIndex();
	}
	
	imgRight.onclick = function() {
		Overlay.imgIndex += 1;
		imgShowIndex();
	}
	
	console.log(moreDescript.id);
}