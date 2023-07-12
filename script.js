// Create an array called hobbies with 6 hobbies as elements.
var hobbies = [
  "painting",
  "listening to music",
  "learning JavaScript",
  "drawing",
  "reading books",
  "watching movies"
];

// Use the length property to log out the length of the hobbies array.
console.log(hobbies.length);
// 6

// Add a new hobby at the end of the array using push().
hobbies.push("swimming");
console.log(hobbies);
/* (7) ["painting", "listening to music", "learning JavaScript", 
"drawing", "reading books", "watching movies", "swimming"] */

// Log out the element at index 2.
console.log(hobbies[2]);
// learning JavaScript

// Remove the last element using pop().
console.log(hobbies.pop());
// swimming

// After the 2nd element, add two new elements using splice().
hobbies.splice(2, 0, "dancing", "playing videogames");
console.log(hobbies);
/* 
(8) ["painting", "listening to music", "dancing", "playing videogames", 
"learning JavaScript", "drawing", "reading books", "watching movies"] */

// Remove the first element using shift().
hobbies.shift();
console.log(hobbies);
/* (7) ["listening to music", "dancing", "playing videogames", "learning 
JavaScript", "drawing", "reading books", "watching movies"] */

// Add a new element at the beginning of the array using unshift().
hobbies.unshift("self defence classes");
console.log(hobbies);
/* (8) ["self defence classes", "listening to music", "dancing", "playing 
videogames", "learning JavaScript", "drawing", "reading books", "watching movies"] */

// Create a second array called goals and add 3 personal goals as elements.
var goals = [
  "working remote as front end developer",
  "creating my portfolio website",
  "training for the ski season"
];

// Write a variable called allTheThings to join the hobbies and goals arrays.
// You can use concat() or the spread operator to combine the arrays.
var allTheThings = hobbies.concat(goals);
console.log(allTheThings);
/* (11) ["self defence classes", "listening to music", "dancing", "playing videogames", 
"learning JavaScript", "drawing", "reading books", "watching movies", "working remote as 
front end developer", "creating my portfolio website", "training for the ski season"] */

// Choose an element in the middle of your allTheThings array and use indexOf() to log out its index.
console.log(allTheThings.indexOf("drawing"));
// 5

// Using the index of the element you just discovered, remove the element using splice() and the index position.
allTheThings.splice(5, 1);
console.log(allTheThings);
/* 
(10) ["self defence classes", "listening to music", "dancing", "playing videogames", 
"learning JavaScript", "reading books", "watching movies", "working remote as front end 
developer", "creating my portfolio website", "training for the ski season"] */

// Create a new variable called plans.
// In the value of the plans variable, use map() to map over the allTheThings array.
// Pass a parameter called item to the map() callback function.
// Inside the body of the callback function, modify each item to return something like: I can't wait to start ${item}.
var plans = allTheThings.map(function (item) {
  return `I can't wait to start ${item}.`;
});

// Outside the function, log out the value of the plans variable so that you can see the new array built from mapping another array.
console.log(plans);
/* (10) ["I can't wait to start self defence classes.", "I can't wait to start listening to music.", 
"I can't wait to start dancing.", "I can't wait to start playing videogames.", "I can't wait to 
start learning JavaScript.", "I can't wait to start reading books.", "I can't wait to start watching 
movies.", "I can't wait to start working remote as front end developer.", "I can't wait to start 
creating my portfolio website.", "I can't wait to start training for the ski season."] */
