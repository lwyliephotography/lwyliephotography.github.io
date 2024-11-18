let greece;
let italy;
let france;
let england;
let spain;
let australia;
let zealand;
let caribbean;
let usa;
let canada;
let home;
let sky;
let nature;
let stairs;
let food;
let people;
let places;

let deviceColor;

function startdrop() {
	document.getElementById("dropdowncontainer").className = 'dropping';
	document.getElementById("placesdown").style.display = "none";
	document.getElementById("placesup").style.display = "inline-block";
}

function dropup() {
	document.getElementById("dropdowncontainer").className = 'dropup';
	document.getElementById("placesdown").style.display = "inline-block";
	document.getElementById("placesup").style.display = "none";
}

function firstdrop() {
	document.getElementById("mobiledropcontainer").className = 'mobiledrop';
	document.getElementById("hamburgerdown").style.display = "none";
	document.getElementById("hamburgerup").style.display = "block";
}
function firstup() {
	document.getElementById("mobiledropcontainer").className = 'mobileup';
	document.getElementById("hamburgerdown").style.display = "block";
	document.getElementById("hamburgerup").style.display = "none";
	placesDropUp();
}

function placesDropDown() {
	document.getElementById("mobileplacecontainer").className = 'placedrop';
	document.getElementById("placesdownmobile").style.display = "none";
	document.getElementById("placesupmobile").style.display = "inline-block";
}

function placesDropUp() {
	document.getElementById("mobileplacecontainer").className = 'placedropup';
	document.getElementById("placesdownmobile").style.display = "inline-block";
	document.getElementById("placesupmobile").style.display = "none";
}

function exitfull() {
		var cancel = document.getElementsByClassName('full');
for(var i = 0; i < cancel.length; i++) { 
  cancel[i].style.display='none';
  document.getElementById("shadow").style.display = "none";
	document.body.style.overflow = "scroll";
  }
}

function loadMore(next) {
    var elements = document.querySelectorAll('.img' + next);

    elements.forEach(element => {
        element.style.display = 'block';
    });
	document.getElementById('loadmore' + (next-1)).style.display = "none";
	document.getElementById('loadmore' + next).style.display = "block";
}

function loadMobile(next) {
	var elements = document.querySelectorAll('.mimg' + next);

    elements.forEach(element => {
        element.style.display = 'block';
    });
	document.getElementById('loadmoremobile' + (next-1)).style.display = "none";
	document.getElementById('loadmoremobile' + next).style.display = "block";
}

function picShow(num) {
	document.getElementById("Pic" + num + "full").style.display = "block";
	dropup();
	document.getElementById("Pic" + num).className = "picanimation";
	setTimeout(function(){ document.getElementById("Pic" + num).style.maxHeight = "100%";}, 1000);
	setTimeout(function(){ document.getElementById("Pic" + num).style.maxWidth = "100%";}, 1000);
	setTimeout(function(){ document.getElementById("Pic" + num).classList.remove("picanimation");}, 1000);
	document.getElementById("shadow").style.display = "block";
	document.body.style.overflow = "hidden";
}

function picSlide(num) {
	exitfull();
	document.getElementById("Pic" + num + "full").style.display = "block";
    dropup();
	document.getElementById("shadow").style.display = "block";
	document.body.style.overflow = "hidden";
	
	if (num==13) {
		deviceColor = window.getComputedStyle(document.getElementById('testdevice')).getPropertyValue("color");
		if (deviceColor == "rgb(255, 0, 0)") {
			loadMobile(2)
		} else if (deviceColor == "rgb(0, 0, 255)") {
			loadMore(2)
		}
	}

	if (num==25) {
		deviceColor = window.getComputedStyle(document.getElementById('testdevice')).getPropertyValue("color");
		if (deviceColor == "rgb(255, 0, 0)") {
			loadMobile(3)
		} else if (deviceColor == "rgb(0, 0, 255)") {
			loadMore(3)
		}
	}

	if (num==37) {
		deviceColor = window.getComputedStyle(document.getElementById('testdevice')).getPropertyValue("color");
		if (deviceColor == "rgb(255, 0, 0)") {
			loadMobile(3)
		} else if (deviceColor == "rgb(0, 0, 255)") {
			loadMore(3)
		}
	}
}

var slideIndex = 0;

	showSlides();


function showSlides() {
  var i;
  var slides = document.getElementsByClassName("sspics");
  slideIndex++;
  if (slideIndex > slides.length) {
  slideIndex = 1;
	document.getElementById("ss1").style.display = "none";
  document.getElementById("ss2").style.display = "none";
  document.getElementById("ss3").style.display = "none";
  document.getElementById("ss4").style.display = "none";
	document.getElementById("ss5").style.display = "none";
	document.getElementById("ss6").style.display = "none";
  document.getElementById("ss7").style.display = "none";
  document.getElementById("ss8").style.display = "none";
  document.getElementById("ss9").style.display = "none";
	document.getElementById("ss10").style.display = "none";
	document.getElementById("ss11").style.display = "none";
  document.getElementById("ss12").style.display = "none";
  document.getElementById("ss13").style.display = "none";
  document.getElementById("ss14").style.display = "none";
	document.getElementById("ss15").style.display = "none";
	document.getElementById("ss16").style.display = "none";
  document.getElementById("ss17").style.display = "none";
  document.getElementById("ss18").style.display = "none";
  document.getElementById("ss19").style.display = "none";
	document.getElementById("ss20").style.display = "none";
	document.getElementById("ss21").style.display = "none";
  document.getElementById("ss22").style.display = "none";
  document.getElementById("ss23").style.display = "none";
  document.getElementById("ss24").style.display = "none";
	document.getElementById("ss25").style.display = "none";
	document.getElementById("ss26").style.display = "none";
  document.getElementById("ss27").style.display = "none";
  document.getElementById("ss28").style.display = "none";
  }    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 3750);
}
