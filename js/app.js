console.log("sanity check");

const game = {
     catBox: [],

     cats: {
          moods: ["happy", "neutral", "angery", "sleeping"],
          colors: ["pink", "orange", "golden", "green", "blue", "purple", "soot", "biscuits", "ghost"]
     },

     

     makePlayerCat() {
          // All cats must come with a mood and a color, and then they need to exist within the HTML.
          // The will have css attributes that make them appear, and moving them around the page happens through the DOM.

          // select a random mood, save to variable newCatMood
          const newCatMood = game.cats.moods[Math.floor(Math.random()*3.99)];
          // select a random color, save to variable newCatColor
          const newCatColor = game.cats.colors[Math.floor(Math.random()*8.99)];
          // create a div element with class values that map to the corresponding css classes
          const newCat = document.createElement("div");
          newCat.setAttribute("class", newCatMood + " " + newCatColor + " cat rubberband");
          // add a (temporary) text face to stand in until graphics are made
          const catFace = document.createTextNode(newCatMood);
          newCat.appendChild(catFace);
          // append the cat to the dom?
          document.querySelector("#house").appendChild(newCat);
          // if a user clicks on one of their cats, trigger checkForMatch() on the cat selected
          newCat.addEventListener("click", game.checkForMatch);
          
     },

     makeCpuCat() {
          // All cats must come with a mood and a color, and then they need to exist within the HTML.
          // The will have css attributes that make them appear, and moving them around the page happens through the DOM.

          // select a random mood, save to variable newCatMood
          const newCatMood = this.cats.moods[Math.floor(Math.random()*3.99)];
          // select a random color, save to variable newCatColor
          const newCatColor = this.cats.colors[Math.floor(Math.random()*8.99)];
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

     shakeCat() {
          // Toggle the shake class on

          // After a small delay, toggle it off again so it can be called again

     },

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
               // Toggle off the animation?
               setTimeout(game.cpuTurn, 1250);
          }
          // TODO Stretch Goal: trigger a shake animation on the div.
          else {
               // If the classList of userChoice does not contain "shake", add it
               userChoiceClasses.toggle("shake");
               setTimeout(function() { userChoiceClasses.toggle("shake")}, 1000 );
          };
     },

     passTurn() {
          this.makePlayerCat();
     },

     // The computer selects a matching cat(check for match), and then puts it into the box
     cpuTurn() {
          // Find the computer's hand in the DOM
          const cpuHand = document.querySelector("#cpuContainer").childNodes;

          // Needed for the if...else statement below
          let matched = null;

          // Loop through the computer's hand
          for (let i = 0; i < cpuHand.length; i++) {
               // Cat selected by the loop...
               const cpuChoice = cpuHand[i];
               // Retrieve a classList from the cat element
               const catClasses = cpuChoice.classList;
               // Find the cat at the top of the box
               const topCat = game.catBox[game.catBox.length - 1]; 
               // Retrieve a classList from the cat in the box
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
          const playerHand = document.querySelector("#house").childNodes
          const cpuHand = document.querySelector("#cpuContainer").childNodes
          
          // If the player's hand is empty, trigger a "You win!" alert.
          if (playerHand.length === 0) {
               alert("You win!");
          }
          // Else if the computer's hand is empty, trigger a "Computer wins!" alert.
          else if (cpuHand.length === 0) {
               alert("Computer wins!");
          };
          // If neither is true, do nothing.

     },

     clickPass() {
          game.makePlayerCat();
          setTimeout(game.cpuTurn, 1250);
     },

     passButton() {
          // Find the pass button in the HTML!
          const button = document.querySelector("#pass");
          // makePlayerCat();
          button.addEventListener("click", game.clickPass);
     }
};

//-------//
// On Page Load, Build the Board //
//-------//

window.onload = () => {
     game.populateHouses();
     game.initCatInBox();
     game.passButton();
};