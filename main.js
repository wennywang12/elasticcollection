///console.log("hello!");//

var Airtable = require("airtable");
//console.log(Airtable);

var base = new Airtable({ apiKey: "keyOJEyyrzK4Zgs8e" }).base(
    "app1Yba2ZxWooj7qr"
  );

  base("Vinyls").select({}).eachPage(gotPageOfSongs, gotAllSongs);

  // an empty array to hold our song data
 var songs = [];


// callback function that receives our data
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
      

       var msnry = new Masonry('.container', { itemSelector: '.song-container' });

        var songContainer = document.createElement("li");
        songContainer.classList.add("song-container");
        document.querySelector(".container").append(songContainer);

        var diamater=Math.floor(Math.random() * 300) + 200;
        console. log('diamater'+diamater)

        var songImage = document.createElement("img");
        songImage.src = song.fields.vinyls[0].url;
        songImage.style.height = diamater +"px";
        songImage.style.width = diamater +"px";
        songContainer.append(songImage);

  

        var songGenre = song.fields.main_color;
        songGenre.forEach(function(genre) {
        songContainer.classList.add(genre);
         });


         var filterPop = document.querySelector(".blue");
         filterPop.addEventListener("click", function() {
          if (songContainer.classList.contains("Blue")) {
            container.style.background = "blue";
          } else {
            songContainer.style.background = "white";
            songContainer.style.display = "none";
          }
        });


        var filterPop = document.querySelector(".green");
        filterPop.addEventListener("click", function() {
         if (songContainer.classList.contains("Green")) {
           container.style.background = "green";
         } else {
           songContainer.style.background = "white";
           songContainer.style.display = "none";
         }
       });


        
    //var songTitle = document.createElement("h1");
        //songTitle.innerText = song.fields.title;
        //document.body.append(songTitle);

        //var nameOfAlbum = document.createElement("h2");
        //nameOfAlbum.innerText = song.fields.album;
        //document.body.append(nameOfAlbum);


        //var songImage = document.createElement("img");
        //songImage.classList.add("song-image");
        //songImage.src = song.fields.vinyls[0].url;
        //document.querySelector(".vinyls").append(songImage);

        //var songColor = document.createElement("h2");
        //songColor.innerText = song.fields.main_color;
        //document.querySelector(".vinyls").append(songColor);


        //var songColor = song.fields.main_color;
        //songColor.forEach(function(color) {
          //document.querySelector(".vinyls").add(color)
       //});


         //var filterPop = document.querySelector(".blue");
         //filterPop.addEventListener("click", function() {
         // if (songContainer.classList.contains("blue")) {
         //   card.classList.add('is-hidden');
          //} else {
         //   card.classList.remove('is-hidden')};
      


        //var songGenre = song.fields.main_color;
        //songGenre.forEach(function(genre){
            //document.classlist.add(genre);
        //})


    });
  }

  var canvas = document.querySelector('canvas');
  var ctx = canvas.getContext('2d');
  
  
  function Pixel( x, y ) {
    this.x = x;
    this.y = y;
    this.hue = Math.floor( Math.random() * 360 );
    var direction = Math.random() > 0.5 ? -1 : 1;
    this.velocity = ( Math.random() * 30 + 20 ) * 0.01 * direction;
  }
  
  Pixel.prototype.update = function() {
    this.hue += this.velocity;
  };
  
  Pixel.prototype.render = function( ctx ) {
    var hue = Math.round( this.hue );
    ctx.fillStyle = 'hsl(' + hue + ', 100%, 50% )';
    ctx.fillRect( this.x, this.y, 1, 1 );
  }
  
  var pixels = [
    new Pixel( 0, 0 ),
    new Pixel( 1, 0 ),
    new Pixel( 0, 1 ),
    new Pixel( 1, 1 ),
  ];
  
  function animate() {
    pixels.forEach( function( pixel ) {
      pixel.update();
      pixel.render( ctx );
    });
    requestAnimationFrame( animate );
  }
  
  animate();
  