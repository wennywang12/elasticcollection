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

        var songContainer = document.createElement("li");
        songContainer.classList.add("song-container");
        document.querySelector(".container").append(songContainer);

        var diamater=Math.floor(Math.random() * 400) + 100;
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

        



         //var filterPop = document.querySelector(".blue");
         //filterPop.addEventListener("click", function() {
         // if (songContainer.classList.contains("blue")) {
         //   card.classList.add('is-hidden');
          //} else {
         //   card.classList.remove('is-hidden')};
        


          

        //var songColor = song.fields.main_color;
        //songColor.forEach(function(color){
          //document.classList.add(color)
        //})

      

     


   // var array = ["songImage"];
   // array.forEach(function(song) {
    //var img = document.createElement('img');
   //img.src = song.fields.vinyls[0].url;
  // var diameter = Math.random() * 100 window.innerWidth;
   //img.style.height = diamater;
  //img.style.width = diamater;
 // })

        //var songGenre = song.fields.main_color;
        //songGenre.forEach(function(genre){
            //document.classlist.add(genre);
        //})



    });
  }