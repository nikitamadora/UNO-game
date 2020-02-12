console.log("sanity check");

const game = {
     catBox: [],
     playerHouse: [],
     cpuHouse: [],

     cats: {
          moods: ["happy", "neutral", "angery", "sleeping"],
          colors: ["pink", "orange", "golden", "green", "blue", "purple", "soot", "biscuits", "ghost"]
     },

     makePlayerCat() {
          // All cats must come with a mood and a color, and then they need to exist within the HTML.
          // The will have css attributes that make them appear, and moving them around the page happens through the DOM.

          // select a random mood, save to variable newCatMood
          const newCatMood = this.cats.moods[Math.floor(Math.random()*4)];
          // select a random color, save to variable newCatColor
          const newCatColor = this.cats.colors[Math.floor(Math.random()*9)];
          // create a div element with class values that map to the corresponding css classes
          const newCat = document.createElement("div");
          newCat.setAttribute("class", newCatMood + " " + newCatColor + " cat");
          // add a (temporary) text face to stand in until graphics are made
          const catFace = document.createTextNode(newCatMood);
          newCat.appendChild(catFace);
          // append the cat to the dom?
          document.querySelector("#playerContainer").appendChild(newCat);
          //
          newCat.addEventListener("click", this.checkForMatch);
     },

     makeCpuCat() {
          // All cats must come with a mood and a color, and then they need to exist within the HTML.
          // The will have css attributes that make them appear, and moving them around the page happens through the DOM.

          // select a random mood, save to variable newCatMood
          const newCatMood = this.cats.moods[Math.floor(Math.random()*4)];
          // select a random color, save to variable newCatColor
          const newCatColor = this.cats.colors[Math.floor(Math.random()*9)];
          // create a div element with class values that map to the corresponding css classes
          const newCat = document.createElement("div");
          newCat.setAttribute("class", newCatMood + " " + newCatColor + " cat");
          // add a (temporary) text face to stand in until graphics are made
          const catFace = document.createTextNode(newCatMood);
          newCat.appendChild(catFace);
          // append the cat to the dom?
          document.querySelector("#cpuContainer").appendChild(newCat);

          newCat.addEventListener("click", this.checkForMatch);
     },

     // TODO Figure out how to connect the playerDraw() with makeCat() so there aren't two make cat functions
     // playerDraw() {
     //      document.querySelector("#playerContainer").appendChild(makeCat(#playerContainer));
     // },

     // Fill the computer house and the player's house with cats!
     // TODO Stretch Goal: Animate the kittens popping into the window
     populateHouses() {
          for (let i = 0; i < 7; i++) {
               this.makeCpuCat();
               this.makePlayerCat();
          };
     },

     initCatInBox() {
          // select a random mood, save to variable newCatMood
          const newCatMood = this.cats.moods[Math.floor(Math.random()*4)];
          // select a random color, save to variable newCatColor
          const newCatColor = this.cats.colors[Math.floor(Math.random()*9)];
          // create a div element with class values that map to the corresponding css classes
          const newCat = document.createElement("div");
          newCat.setAttribute("class", newCatMood + " " + newCatColor + " cat");
          // add a (temporary) text face to stand in until graphics are made
          const catFace = document.createTextNode(newCatMood);
          newCat.appendChild(catFace);
          this.catBox.push(newCat);
          document.querySelector("#box").appendChild(newCat);
     },

     // TODO Make game.catBox[] appear over the cat box div on the browser

     checkForMatch() {
          console.log("click!", this)
          // <div class="neutral purple cat">neutral</div>);
          // this.setAttribute("class")
          // If the mood or color matches the card at the top of the box array, run the putCatInBox function.
          // variable that references the card at the top of the box array
          const topCat = game.catBox[game.catBox.length - 1];
          // variable that references the div that the user clicked
          const userChoice = this;
          // get the classList of the catBox element
          const topCatClasses = topCat.classList;
          // get the classList of the userChoice
          const userChoiceClasses = userChoice.classList;
          // console.log(topCatClasses, userChoiceClasses);
          // MAYBE LATER, brute force first loop through and compare the first two class names (.cat is irrelevant)
          // Since the first index value of each class array is always a mood class, and the second is always a color, only two comparisons are necessary. :)
          if (topCatClasses[0] === userChoiceClasses[0] || topCatClasses[1] === userChoiceClasses[1]) {
               game.catBox.push(userChoice);
               document.querySelector("#box").appendChild(userChoice);
          };
          // Otherwise, do nothing
          // TODO Stretch Goal: trigger a shake animation on the div.
          // else {

          // };
     },

     // TODO 
     // (When user selects a cat from their house), it's placed into the box. This triggers the computer's turn. This is currently wrapped up in the checkForMatch function, but I'd like to separate them to optimize.
     putCatInBox() {
          // move the cat to the top of the catBox[]
          
          // game.catBox.push(this)
     },

     // The computer selects a matching cat(check for match), and then puts it into the box
     cpuTurn() {
          // CPU hand exists within the dom html
          // Find where it is
          const cpuHand = document.querySelector("#cpuContainer").childNodes;
          // loop through the child nodes
          for (let i = 0; i < cpuHand.length; i++) {
               // retrieve a classList from the element
               const catClasses = cpuHand[i].classList;
               // compare the classes to the ones on the top cat
               const topCat = game.catBox[game.catBox.length - 1]; 
               // if there is a match 
          };
          
          const cpuHandClasses = cpuHand.classList;
          // EITHER loop through the classlist and select the first match, OR choose a random index value and if it matches, play it. Continue choosing a random number until it matches.
          console.log(cpuHand, cpuHandClasses);

          // If there are no matches, make a new cpu cat

          // Trigger end of cpu turn
     },

     endCpuTurn() {
          // Show div that says "Your turn"
     },

     // Trigger the end of game result screen
     endGame() {
          // When the computer or user runs out of cats, trigger the end of game screen
     }



};

window.onload = () => {
     game.populateHouses();
     game.initCatInBox();
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