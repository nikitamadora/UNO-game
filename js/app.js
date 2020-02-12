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
          const newCatMood = this.cats.moods[Math.floor(Math.random()*5)];
          // select a random color, save to variable newCatColor
          const newCatColor = this.cats.colors[Math.floor(Math.random()*9)];
          // create a div element with class values that map to the corresponding css classes
          const newCat = document.createElement("div");
          newCat.setAttribute("class", newCatMood + " " + newCatColor + " cat");
          // add a (temporary) text face to stand in until graphics are made
          const catFace = document.createTextNode(newCatMood);
          newCat.appendChild(catFace);
          // append the cat to the dom?
          document.querySelector("#house").appendChild(newCat);
          // if a user clicks on one of their cats, trigger checkForMatch() on the cat selected
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
          
     },

     // playerDraw() {
     //      this.makePlayerCat();
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
          // If the mood or color matches the card at the top of the box array, run the putCatInBox function.

          // variable that references the card at the top of the box array
          const topCat = game.catBox[game.catBox.length - 1];

          // variable that references the div that the user clicked
          const userChoice = this;

          // get the classList of the catBox element
          const topCatClasses = topCat.classList;

          // get the classList of the userChoice
          const userChoiceClasses = userChoice.classList;

          // Since the first index value of each class array is always a mood class, and the second is always a color, only two comparisons are necessary. :)
          if (topCatClasses[0] === userChoiceClasses[0] || topCatClasses[1] === userChoiceClasses[1]) {
               game.catBox.push(userChoice);
               document.querySelector("#box").appendChild(userChoice);
               // game.cpuTurn();
               setTimeout(game.cpuTurn, 1250);
          };
          // Otherwise, do nothing
          // TODO Stretch Goal: trigger a shake animation on the div.
          // else {

          // };
     },

     passTurn() {
          this.makePlayerCat();
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
          let matched = null;
          // This loops through the
          for (let i = 0; i < cpuHand.length; i++) {
               const cpuChoice = cpuHand[i];
               // retrieve a classList from the element
               const catClasses = cpuChoice.classList;
               // find the top cat element
               const topCat = game.catBox[game.catBox.length - 1]; 
               // retrieve the classList from the top cat
               const topCatClasses = topCat.classList;
               // Compare the classes for a match! If there is one, add that cat to the top of the box.
               if (catClasses[0] === topCatClasses[0] || catClasses[1] === topCatClasses[1]) {
                    game.catBox.push(cpuChoice);
                    document.querySelector("#box").appendChild(cpuChoice);
                    matched = true;
                    return "done";
               }
               // If there is not a match in the whole array, add one cat to the cpu hand.
               else {
                    matched = false;
               };
          };
          if (matched === false) {
               game.makeCpuCat();
          };
     },

     endCpuTurn() {
          // Show div that says "Your turn"
     },

     refillHouse() {
          // Look at all those cats in the box!
          const catsInBox = document.querySelector("#box").childNodes

          // See how many cats are in the box
          const numCatsInBox = catsInBox.length;

          // Get a random number of those cats
          const randomNumOfCats = Math.floor(Math.random()*numCatsInBox);

          // Add that many cats to either the computer or the player
          // TODO Stretch goal ^^^
     },

     // Trigger the end of game result screen
     endGame() {
          // When the computer or user runs out of cats, trigger the end of game screen
     },

     // TODO Fix me!
     // Attempt to make a pass button
     passButton() {
          // Find the pass button in the HTML!
          const button = document.querySelector("#pass");
          this.makePlayerCat();
          button.addEventListener("click", game.makePlayerCat);
     }

};

// Another attempt to make the pass button
const passButton = document.querySelector("#pass");
passButton.addEventListener("click", game.makePlayerCat);

window.onload = () => {
     game.populateHouses();
     game.initCatInBox();
     // game.passButton();
};