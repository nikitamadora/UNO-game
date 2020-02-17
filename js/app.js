const game = {
     // Container for the discarded cats
     catBox: [],

     // Cat options
     cats: {
          moods: ["happy", "neutral", "angery", "sleeping"],
          colors: ["pink", "orange", "golden", "green", "blue", "purple", "soot", "biscuits", "ghost"]
     },

     // Make a new cat!
     makeNewCat() {
          // Select a random mood and color
          const newCatMood = game.cats.moods[Math.floor(Math.random()*3.99)];
          const newCatColor = game.cats.colors[Math.floor(Math.random()*8.99)];
          // Make a div to hold the cat
          const newCat = document.createElement("div");
          // Give it classes that map to the CSS file
          newCat.setAttribute("class", newCatColor + " " + newCatMood + " cat rubberband");
          return newCat;
     },


     // Make a cat for the player's hand
     makePlayerCat() {
          // Make a cat
          const playerCat = this.makeNewCat();
          // Listen for clicks on player cats. If they click, trigger checkForMatch()
          playerCat.addEventListener("click", game.checkForMatch);
          // Add the cat to the player's house on the DOM
          document.querySelector("#house").appendChild(playerCat);  
     },

     // Make a cat for the computer's hand
     makeCpuCat() {
          // Make a cat
          const cpuCat = this.makeNewCat();
          // Add the cat to the computer's house on the DOM
          document.querySelector("#cpuContainer").appendChild(cpuCat);
     },

     // Fill the computer house and the player's house with cats!
     populateHouses() {
          for (let i = 0; i < 7; i++) {
               this.makeCpuCat();
               this.makePlayerCat();
          };
     },

     // Put a cat in the box at the beginning of the game
     initCatInBox() {
          const boxCat = this.makeNewCat();
          this.catBox.push(boxCat);
          document.querySelector("#box").appendChild(boxCat);
     },

     // Player's whole turn
     checkForMatch() {
          // If the mood or color matches the card at the top of the box array, run the putCatInBox function.

          // variable that references the card at the top of the box array
          const topCat = game.catBox[game.catBox.length - 1];

          // variable that references the div that the user clicked
          const userChoice = this;

          // get the classList of the catBox element
          const topCatClasses = topCat.classList;

          // get the classList of the userChoice
          const userChoiceClasses = userChoice.classList;

          // This is a hacked together, brute force way to add cats to the box. Another method is to loop through the arrays to check for a match within the whole arrays.
          if (topCatClasses[0] === userChoiceClasses[0] || topCatClasses[0] === userChoiceClasses[1] || topCatClasses[1] === userChoiceClasses[0] || topCatClasses[1] === userChoiceClasses[1]) {
               // If there's a match, push the user's choice to the top of the catBox array
               game.catBox.push(userChoice);
               // Append the user's choice to the DOM as well so it's visible
               document.querySelector("#box").appendChild(userChoice);
               // Check to see if the player's hand is empty. If it is, trigger a win. 
               if (document.querySelector("#house").childNodes.length === 0) {
                    game.winGame();
               } 
               else {
                    // Otherwise, trigger the computer's turn after a delay
                    setTimeout(game.cpuTurn, 1250)
               };
          }
          else {
               // If the classList of userChoice does not contain "shake", add it
               userChoiceClasses.toggle("shake");
               setTimeout(function() { userChoiceClasses.toggle("shake")}, 1000 );
          };
     },

     winGame() {
          // Display modal
          alert("You win!");
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
               if (catClasses[0] === topCatClasses[0] || catClasses[0] === topCatClasses[1] || catClasses[1] === topCatClasses[0] || catClasses[1] === topCatClasses[1]) {
                    game.catBox.push(cpuChoice);
                    document.querySelector("#box").appendChild(cpuChoice);
                    matched = true;
                    if (document.querySelector("#cpuContainer").childNodes.length === 0) {
                         setTimeout(function() { game.loseGame(); }, 500);
                    }
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

     loseGame() {
          // Show lose modal
          alert("Computer wins!");
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
// Build the Board //
//-------//

const buildBoard = () => {
     document.querySelector(".startScreen").classList.toggle("hide");
     game.populateHouses();
     game.initCatInBox();
     game.passButton();
};

//-------//
// Start Game
//-------//

const startButton  = document.querySelector("#startButton");
startButton.addEventListener("click", buildBoard);