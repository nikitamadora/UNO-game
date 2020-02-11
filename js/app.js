console.log("sanity check");

const game = {
     catBox: [],
     playerHouse: [],
     cpuHouse: [],

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
          const newCat = document.createElement("div");
          newCat.setAttribute("class", newCatMood + " " + newCatColor + " cat");
          // append the cat to the dom
          document.querySelector("#kittenFactory").appendChild(newCat);
     },

     // Fill the computer house and the player's house with cats!
     populateHouses() {

     },

     // When user selects a cat from their house, it's placed into the box. This triggers the computer's turn
     putCatInBox() {

     },

     // The computer selects a matching cat(check for match), and then puts it into the box
     cpuTurn() {

     },

     // Computer's dumb brain
     cpuCheckForMatch() {
          // Loop through the computer's hand
          // If the cat matches the previous cat, put it in the box
          // If there are no matches, (draw cat from factory)
     },

     // Trigger the end of game result screen
     endGame() {
          // When the computer or user runs out of cats, trigger the end of game screen
     }

    

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