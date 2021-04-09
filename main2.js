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


        var songImage = document.createElement("img");
        songImage.classList.add("song-image");
        songImage.src = song.fields.main_color[0].url;
        document.querySelector(".vinyls").append(songImage);
        
      


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
