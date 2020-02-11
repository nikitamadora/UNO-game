console.log("sanity check");

const game = {
     cats: {
          moods: ["happy", "neutral", "angery", "sleeping"],
          colors: ["pink", "orange", "golden", "green", "blue", "purple", "soot", "biscuits", "ghost"]
     },

     makeCats() {
          // combine a cat mood with a cat color from the object
          // create a div element with class values that map to the corresponding css classes
          // append the cat to the dom
          // return created cat?
     },

     catBox: [],
     playerHouse: [],
     cpuHouse: []

};

// Can create an element in js, and give it a class, based on this array of strings
// Then I could append it to the html in the dom
// Then, if there are css styles that map to an existing class (ie. .pink ), they will automatically apply to the new element
// Those css properties can include background images, or to start, background colors, border color, etc. 


// 