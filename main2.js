///console.log("hello!");//

var Airtable = require("airtable");
//console.log(Airtable);

var base = new Airtable({ apiKey: "keyOJEyyrzK4Zgs8e" }).base(
    "app1Yba2ZxWooj7qr"
  );

  base("Vinyls").select({}).eachPage(gotPageOfSongs, gotAllSongs);

 var songs = [];

 function gotPageOfSongs(records, fetchNextPage) {
    console.log("gotPageOfSongs()");
    // add the records from this page to our books array
    songs.push(...records);
    // request more pages
    fetchNextPage();
  }


  // call back function that is called when all pages are loaded
function gotAllSongs(err) {
    console.log("gotAllSongs()");

    // report an error, you'd want to do something better than this in production
    if (err) {
      console.log("error loading data");
      console.error(err);
      return;
    }

    // call functions to log and show the books
    consoleLogSongs();
    showSongs();
  }

  // just loop through the books and console.log them
function consoleLogSongs() {
    console.log("consoleLogSongs()");
    songs.forEach((song) => {
      console.log("Song:", song);
    });
  }

  function showSongs() {
    console.log("showSongs()");
    songs.forEach((song) => {


        //var songTitle = document.createElement("h1");
        //songTitle.innerText = song.fields.title;
        //document.body.append(songTitle);

        //var nameOfAlbum = document.createElement("h2");
        //nameOfAlbum.innerText = song.fields.album;
        //document.body.append(nameOfAlbum);

        var songContainer = document.createElement("li");
        songContainer.classList.add("song-container");
        dragElement(songContainer);
        document.querySelector(".container").append(songContainer);


        var diamater=Math.floor(Math.random() * 300) + 200;
        console. log('diamater'+diamater)

        var songImage = document.createElement("img");
        songImage.src = song.fields.vinyls[0].url;
        songImage.style.height = diamater +"px";
        songImage.style.width = diamater +"px";


        //var songImage = document.createElement("img");
        //songImage.classList.add("song-image");
        //songImage.src = song.fields.main_color[0].url;
        //document.querySelector(".container").append(songImage);


        songContainer.append(songImage);



        var songGenre = song.fields.main_color;
        songGenre.forEach(function(genre) {
        songContainer.classList.add(genre);
         });



    });
    var msnry = new Masonry('.container', { itemSelector: '.song-container' });

    var filterBlue = document.querySelector(".blue");
    filterBlue.addEventListener("click", function() {
      document.querySelectorAll("img").forEach((i) => {
        i.style.height = "";
        i.style.width = "";
        });
      document.body.style.backgroundColor = "blue";
      document.body.style.backgroundImage = "none";
      document.querySelectorAll(".song-container").forEach((container) => container.style.display = "none");
document.querySelectorAll(".Blue").forEach((container) => container.style.display = "");
    });

    var filterPink = document.querySelector(".pink");
    filterPink.addEventListener("click", function() {
      document.querySelectorAll("img").forEach((i) => {
        i.style.height = "";
        i.style.width = "";
        });
      document.body.style.backgroundColor = "pink";
      document.body.style.backgroundImage = "none";
      document.querySelectorAll(".song-container").forEach((container) => container.style.display = "none");
document.querySelectorAll(".Pink").forEach((container) => container.style.display = "");
    });


var filterHome = document.querySelector(".home");
    filterHome.addEventListener("click", function() {
      document.querySelectorAll("img").forEach((i) => {
        i.style.width = `${Math.floor(Math.random() * 300) + 200}px`;
        });
      document.body.style.backgroundImage = "linear-gradient(to bottom right, blue, lightgreen, Red, pink, yellow, orange, purple)";
    document.querySelectorAll(".song-container").forEach((container) => container.style.display = "");
  });

  }


  var filterGreen = document.querySelector(".green");
  filterGreen.addEventListener("click", function() {
    document.querySelectorAll("img").forEach((i) => {
      i.style.height = "";
      i.style.width = "";
      });
    document.body.style.backgroundColor = "lightgreen";
    document.body.style.backgroundImage = "none";
    document.querySelectorAll(".song-container").forEach((container) => container.style.display = "none");
document.querySelectorAll(".Green").forEach((container) => container.style.display = "");
  });

  var filterRed = document.querySelector(".red");
  filterRed.addEventListener("click", function() {
    document.querySelectorAll("img").forEach((i) => {
      i.style.height = "";
      i.style.width = "";
      });
    document.body.style.backgroundColor = "red";
    document.body.style.backgroundImage = "none";
    document.querySelectorAll(".song-container").forEach((container) => container.style.display = "none");
document.querySelectorAll(".Red").forEach((container) => container.style.display = "");
  });

  var filterOrange = document.querySelector(".orange");
  filterOrange.addEventListener("click", function() {
    document.querySelectorAll("img").forEach((i) => {
      i.style.height = "";
      i.style.width = "";
      });
    document.body.style.backgroundColor = "orange";
    document.body.style.backgroundImage = "none";
    document.querySelectorAll(".song-container").forEach((container) => container.style.display = "none");
document.querySelectorAll(".Orange").forEach((container) => container.style.display = "");
  });

  var filterPurple = document.querySelector(".purple");
  filterPurple.addEventListener("click", function() {
    document.querySelectorAll("img").forEach((i) => {
      i.style.height = "";
      i.style.width = "";
      });
    document.body.style.backgroundColor = "purple";
    document.body.style.backgroundImage = "none";
    document.querySelectorAll(".song-container").forEach((container) => container.style.display = "none");
document.querySelectorAll(".Purple").forEach((container) => container.style.display = "");
  });

function dragElement(dragItem) {
	const container = document.querySelector('.container');
	let active = false;
	let initialX;
	let initialY;
	let currentX;
	let currentY;
	let xOffset = 0;
	let yOffset = 0;

	container.addEventListener("touchstart", dragStart, false);
	container.addEventListener("touchend", dragEnd, false);
	container.addEventListener("touchmove", drag, false);
	container.addEventListener("mousedown", dragStart, false);
	container.addEventListener("mouseup", dragEnd, false);
	container.addEventListener("mousemove", drag, false);

	function dragStart(event) {
		if (event.type === "touchstart") {
			initialX = event.touches[0].clientX - xOffset;
			initialY = event.touches[0].clientY - yOffset;
		} else {
			initialX = event.clientX - xOffset;
			initialY = event.clientY - yOffset;
		}
		if (event.target === dragItem || event.target.parentNode === dragItem) {
			active = true;
		}
	}

	function dragEnd(event) {
		initialX = currentX;
		initialY = currentY;
		active = false;
	}

	function drag(event) {
		if (active) {
			event.preventDefault();
			if (event.type === "touchmove") {
				currentX = event.touches[0].clientX - initialX;
				currentY = event.touches[0].clientY - initialY;
			} else {
				currentX = event.clientX - initialX;
				currentY = event.clientY - initialY;
			}
			xOffset = currentX;
			yOffset = currentY;
			dragItem.style.transform = `translate(${currentX}px, ${currentY}px)`;
		}
	}
}

/*(function(elementSelector) {
  var dragStartX, dragStartY; var objInitLeft, objInitTop;
  var inDrag = false;
  var dragTarget = document.querySelector(elementSelector);
  dragTarget.addEventListener("mousedown", function(e) {
    inDrag = true;
    objInitLeft = dragTarget.offsetLeft; objInitTop = dragTarget.offsetTop;
    dragStartX = e.pageX; dragStartY = e.pageY;
  });
  document.addEventListener("mousemove", function(e) {
    if (!inDrag) {return;}
    dragTarget.style.left = (objInitLeft + e.pageX-dragStartX) + "px";
    dragTarget.style.top = (objInitTop + e.pageY-dragStartY) + "px";
  });
  document.addEventListener("mouseup", function(e) {inDrag = false;});
}(".song-container"))
*/
