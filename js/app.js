console.log("sanity check");

const game = {
     cats: {
          moods: ["happy", "neutral", "angery", "sleeping"],
          colors: ["pink", "orange", "golden", "green", "blue", "purple", "soot", "biscuits", "ghost"]
     },

     makeCats() {
          // combine a cat mood with a cat color from the object
          // select a random mood, save to variable newCatMood
          const newCatMood = this.cats.moods[Math.floor(Math.random())];
          // select a random color, save to variable newCatColor
          const newCatColor = this.cats.colors[Math.floor(Math.random())];
          // create a div element with class values that map to the corresponding css classes
          const newCat = document.createElement("div")
          newCat.setAttribute("class", newCatMood + " " + newCatColor);
          // append the cat to the dom
          document.querySelector("#kittenGenerator").appendChild(newCat);
          // return created cat?
     },

     catBox: [],
     playerHouse: [],
     cpuHouse: [],

     // makeAngery() {
     //      const angeryCat = document.createElement("div");
     //      // angeryCat.setAttribute("class", //Random Color);

     //      const textFace = document.createTextNode("angery");
     //      angeryCat.appendChild(textFace);
     // }

};


// Can create an element in js, and give it a class, based on this array of strings
// Then I could append it to the html in the dom
// Then, if there are css styles that map to an existing class (ie. .pink ), they will automatically apply to the new element
// Those css properties can include background images, or to start, background colors, border color, etc. 

// Establish all of the variables I'm going to need to construct the board

// Write code to make cats

// On load, the cats populate/are dealt into the player's hand
// When a user clicks on a cat, the game checks to make sure the cat can be played into the box. If it can't, the cat shakes (stretch goal).
// After the user puts one cat in the box, the computer takes a turn.
// 