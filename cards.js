let songs = [
    {
        id: 1,
        track: "Locomotive",
        genre: "Rock",
        album: "Use Your Illusion",
        image: "loco.jpg",
        info: "info for Locomotive"
    },
    {
        id: 2,
        track: "Tight Connection to my Heart",
        genre: "Rock",
        album: "Empire Burlesque",
        image: "empire.jpg",
        info: "info for Bob"
    },
    {
        id: 3,
        track: "Under Pressure",
        genre: "Rock",
        album: "Hot Space",
        image: "hotspace.png",
        info: "info for Under Pressure"
    },
    {
        id: 4,
        track: "Shock the Monkey",
        genre: "Pop",
        album: "Peter Gabriel",
        image: "peter.jpg",
        info: "info for shock"
    },
    {
        id: 5,
        track: "Adult Education",
        genre: "Pop",
        album: "Rock n Soul part 1",
        image: "hallandOates.jpg",
        info: "info for adult"
    },
    {
        id: 6,
        track: "Relax",
        genre: "Pop",
        album: "Welcome to the Pleasure Dome",
        image: "frankie.jpg",
        info: "info for locomotive"
    },
    {
        id: 7,
        track: "Dream Warriors",
        genre: "Metal",
        album: "Back for the Attack",
        image: "dream.jpg",
        info: "info for Dream"
    },
    {
        id: 8,
        track: "Lay it down",
        genre: "Metal",
        album: "Invasion of your Privacy",
        image: "invasion.jpg",
        info: "info for ratt"
    },
    {
        id: 9,
        track: "I wanna be somebody",
        genre: "Metal",
        album: "W.A.S.P",
        image: "wasp.jpg",
        info: "info for Wasp"
    },
    {
        id: 10,
        track: "Mr Dobalina",
        genre: "Rap",
        album: "I wish my brother George was here",
        image: "del.jpg",
        info: "info for Bob Dobalina"
    }
];

let generateCard = (array, key) => {
    // function generateCard(array, key)
    let card = `   
        <div id="info-${array[key].id}" class="modal">
        <p>${array[key].info}</p>
        <a href="#" rel="modal:close">Close</a>
        </div>
            
            <div class="col-6 col-md-4 col-lg-3 mb-4">
            <div class="card mx-auto text-center">
            <img src="./images/${array[key].image}" width="10" height="320" class="card-img-top" alt="Sample Title" />
            <div class="card-body">     
                <h4>${array[key].track}</h4>
                <h3>${array[key].genre}</h3><br/>  
                <span>${array[key].album}</span><br/> 
                <input type="button" value="more info" class="info" id="${array[key].id}"> 

            </div>
            </div>
        </div>
    `;
    $("#cardContent").append(card);
};

function showAll(songs) {
    for (let i = 0; i < songs.length; i++) {
        generateCard(songs, i);
    }
}




//1. document ready = jquery object and arrow function
//2. create the selector

$(() => {

    // first load
    showAll(songs);

    let checkboxes = document.querySelectorAll("input[type='checkbox']");
    $("input[type='checkbox']").click(function () {
        $("#cardContent").html("");
        let result = [];
        for (let i = 0; i < checkboxes.length; i++) {

            // console.log(checkboxes[i].value);
            // console.log(checkboxes[i].checked);
            if (checkboxes[i].checked) {
                result.push(checkboxes[i].value);
            }
        }

        if (result.length === 0) {
            for (let i = 0; i < songs.length; i++) {
                generateCard(songs, i);
            }
        }


        // console.log(result); filters
        for (let i = 0; i < result.length; i++) {
            // loop your filter needle
            let needle = result[i];
            let regEx = new RegExp(needle, "gi");

            for (let j = 0; j < songs.length; j++) {
                // how many cards will be generated
                let haystack = songs[j].genre;
                let res = haystack.match(regEx);
                console.log(res);
                if (res != null) {
                    generateCard(songs, j);
                }
            } // haystack
        } // needle loop

        showModal();
    }); // click
    

        showAll(songs);
        showModal();
        
    // search
  $("#searchBtn").click(function () {
    // needle
    let needle1 = $("#searchTerm").val();
    let regEx1 = new RegExp(needle1, "gi");
    // validation
    if (needle1) {
      let result1 = []; // this the container of match results
        for (let i = 0; i < songs.length; i++) {
          //console.log(fruits[i]);
          //for (let j = 0; j < fruits[i].length; j++) {
            // goal is to get the value of each property
            // haystack
            let haystack1 = songs[i].track;
            // matching 
            let match1 = haystack1.match(regEx1);
            // if match found, update the list 
            if (match1) { // will get the id of matched data
              result1.push(i);          
            }
          //}
          //break;
        }
      $("#cardContent").html("");
      for (let i = 0; i < result1.length; i++) {
        generateCard(songs, result1[i]);
      }   
      showModal();
    } else {
      console.log("no searchterm input");
    }
  });

  $("#sortAZ").click(function () {
    // get the "track" property
    let tracks = [];
    for (let i = 0; i < songs.length; i++) {
      tracks.push(songs[i].track);
    }
    // sort the tracks
    tracks.sort();
    // clear the container first
    $("#cardContent").html("");
    // creat the sorted card
    // apple, banana, grapes, orange
    for (let i = 0; i < tracks.length; i++) {
      let track = tracks[i]; // apple
      for (let j = 0; j < songs.length; j++) {
        let trackSongs = songs[j].track; // apple
        if (track === trackSongs) {
          generateCard(songs, j);
        }
      }
    }
    showModal();
  });

  $("#sortZA").click(function () {
    // get the "track" property
    let tracks = [];
    for (let i = 0; i < songs.length; i++) {
      tracks.push(songs[i].track);
    }
    // sort the tracks
    tracks.sort();
    tracks.reverse();
    // clear the container first
    $("#cardContent").html("");
    // creat the sorted card
    // apple, banana, grapes, orange
    for (let i = 0; i < tracks.length; i++) {
      let track = tracks[i]; // apple
      for (let j = 0; j < songs.length; j++) {
        let trackSongs = songs[j].track; // apple
        if (track === trackSongs) {
          generateCard(songs, j);
        }
      }
    }
    showModal();
  });



}); // ready
function showModal() {
    $(".info").click(function () {
        console.log(this.id);
        $("#info-" + this.id).modal({
            showClose: false


        });
    });
}


