# stubborn kittens
## A Delightful Single Player v A.I. JavaScript Game
### Version 1.0
#### Alternative title for v1.0: foster frenzy
<hr>

### WHAT IS THIS PROJECT?
     This is a joyful game of whimsy, built with pure, unadulterated vanilla JavaScript, 
     HTML, and CSS. It was created as a solo project by Nikita Madora (me!).

#### What is the Object?
     Simple! To empty your house of cats into the box before it heads to the foster agency, 
     where there are hundreds of applicants preregistered to lovingly adopt all of these cats that keep 
     flooding your home. But watch out! Your neighbor's house is getting flooded, too, and if they empty 
     theirs before you, there won't be any room left for yours!

     The cats are stubborn, though! They will only go into the box if they either match the **breed** of 
     the cat most recently placed in the box, or if they're in the same **mood** as the previous cat.

     It makes sense.
![shipit](https://github.com/nikitamadora/stubborn-kittens/blob/master/assets/shipit.png)

### WHY DID I MAKE IT?
     This project was built so that I could learn by doing! After learning some of 
     the fundamentals of HTML, CSS, and JavaScript, building this game was a way for me to bridge 
     my understanding of the three, and get to know the languages through a realistic application. 
     
     The challenge was to complete it in under five days, shipping a usable, 
     aesthetically pleasant UI with AI logic.

     stubborn kittens started as a copycat of the popular card game UNO, but it quickly evolved into 
     something more whimsical. I was excited by the differences between the physical game UNO 
     and the virtual world of code, and as I was not limited to physical playing cards, 
     I let my imagination have a bit of fun!

### USER STORIES


     i.        The user opens the game in their browser.

     ii.       The game deals seven cats to the player, which are visible at the bottom of the screen, 
                    and places a [randomly generated] cat immediately into the box. The user compares 
                    their cats against the one at the top of the box, looking for match against the 
                    cat's **color** (pink, orange, goldenrod, green, blue, purple, biscuit, gray, or soot), 
                    or the cat's **mood** (happy, angry, neutral, or sleeping).

     iii.      When the user clicks an cat that doesn't match, it shakes, then bounces back (happily). 
                    The user then either selects an applicable cat, or else takes a new cat home by 
                    clicking the "draw" button.

     iv.       When the user clicks a cat that matches, the cat enters the box and bounces (happily). 
                    This triggers the computer's turn.

     v.        The user waits for the computer (neighbor) to select a cat. If the computer has 
                    no valid (willing) cat, the computer is dealt a new cat.

     vi.       After the computer takes a turn, the user and computer trade turns.

     vii.      As the user selects their last remaining cat to put in the box, the game ends, with a 
                    message popping up that reads "You win!"

     xii.      When the user loses to the computer, because the computer shipped all their cats first, 
                    the game screen fades and darkens, and a boxed message pops up that reads "Computer wins!"


### TECHNOLOGIES USED

     This project was created with:
          - HTML
          - CSS
          - Vanilla JavaScript
          - Photoshop
          - Procreate
          
          And a special shout-out to **GoodNotes** for their wonderfully intuitive UI, smooth, and delightful note-taking app for iPad.


### APPROACH TAKEN
#### To build this game, I took the following steps:
          - Good old fashioned brainstorming!
          - Wireframing
          - Writing up user stories
          - Breaking down user stories into digestible, programmable steps
          - Pseudocoding
          - Coding and testing in small pieces, then building on those pieces
          - Obsessive Commits
          - Equally obsessive Googling
          - Drinking loads of coffee, but also sleeping
          - Squishing lots of digital cats

#### Function First
     I approached the project with a *function first* mindset. I believe that, though design is fundamentally important, it doesn't matter how pretty an app is if it doesn't work at all. In other words, I let the game look terrible until the functionality was sound, and then I put the graphics together during a polishing process on the last day. The result is a cute, playable game!
     
#### JS/Dom Manipulation == Priority
     I also wanted to use as much JavaScript as possible, so I built out the game board and many of the page elements through the DOM. A lot of the original code is redundant, but my focus was on making it functional before I go back and refactor it to be cleaner and easier to scale or maintain.

#### Challenges and Triumphs
##### Challenges First!
     - Whiteboarding: Laying out the bones of the project proved more challenging than I expected. Once I figured out how to lay it out, though, it started to move fairly quickly. 
     - Organization: My functions felt verbose and disorganized. Gaining momentum in writing them was tough, **because I kept getting hung up on organization.** ie. using classes vs. objects, etc.
     - CSS is harder than it looks

##### Triumphs!
     - Time Management! I kept my MVP reasonable, and had time for lots of stretch goals!
     - Troubleshooting issues felt intuitive, which was also surprising.
     - Building a modal is easier than I thought
     - Animations! I managed to get animations in


### INSTALLATION INSTRUCTIONS
     Simply open the link in any modern browser! No special installation is required.


### UNSOLVED/KNOWN ISSUES
     - The **end game alert is rudimentary.**
     - **Users can currently play an unlimited amount of cats** in the span of one turn if they click quickly enough.
     - The computer's hand shows! This is clearly a feature, not a bug. >.> On that note, see features for more details on why I didn't block out the computer's cats!

### FUTURE RELEASE FEATURES
     - **Rework of core game functionality.** Rather than have a computer's hand at all, there will be a timer, or an event triggered by the user, that will push a random number of cats from the box back into the user's house. 
     - Tooltip for how to play
     - A replay button
     - Graphic for the player's house (maybe)
     - Cleaner functions! Refactored code!



### OTHER COMPONENTS PREVIOUSLY INDICATED (if applicable)
Not applicable.

### WIREFRAMES
#### Wireframe for the stubborn cats Rebrand
![sc wireframe](https://github.com/nikitamadora/stubborn-kittens/blob/master/assets/stubborn-kittens-wireframe-6.jpg)

#### Original Wireframe
The concept started as an UNO copycat, and then, because cards don't thrill me, I changed the subject matter to squishy cats.
![og wireframe](https://github.com/nikitamadora/stubborn-kittens/blob/master/assets/uno-wireframe.jpg)
