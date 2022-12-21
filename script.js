var audio = new Audio();
var x;

audio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
},  false);


function changeStyle(announcmentIndex) {
  const element = document.getElementsByClassName("nav-item")[announcmentIndex];
    if (announcmentIndex == 2) {
    	element.className = "nav-item-selected2";
    }
    else if (announcmentIndex == 5) {
    	element.className = "nav-item-selected2";
    }
    else {
    	element.className = "nav-item-selected";
    }
}

function reset() {
	const e1 = document.getElementById("No");
	e1.className = "nav-item";
	const e2 = document.getElementById("Last");
	e2.className = "nav-item";
	const e3 = document.getElementById("All");
	e3.className = "nav-item";
	const e4 = document.getElementById("We");
	e4.className = "nav-item";
	const e5 = document.getElementById("Jingle");
	e5.className = "nav-item";
	const e6 = document.getElementById("Santa");
	e6.className = "nav-item";
}

function stop() {
	audio.pause();
}

function playLast() {
	audio.src = "last.mp3";
	audio.play();
}

function playAll() {
	audio.src = "all.mp3";
	audio.play();
}

function playWish() {
	audio.src = "wish.mp3";
	audio.play();
}

function playJingle() {
	audio.src = "jingle.mp3";
	audio.play();
}

function playSanta() {
	audio.src = "santa.mp3";
	audio.play();
}

function calculate() {
	var text = document.getElementById("text").value;
	x = Math.floor(Math.random() * 100 + 1);
	document.getElementById("name").innerHTML = text;
	document.getElementById("result-header").innerHTML = "ju pelqen:";
	document.getElementById("result").innerHTML = x + "%";
	document.getElementById("text").value = "";
}