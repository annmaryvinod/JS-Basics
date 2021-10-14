// String Length! It gives back the number of characters in the string

var myString = "This is a  ninja String!";

console.log(myString.length);

/*
METHODS
Functions that we use on strings are called METHODS! 
*/

// Convert everything to capitals ----  toUpperCase

console.log(myString.toUpperCase(myString));

// indexOf ----- finds the position at which it is found

console.log(myString.indexOf("String"));

// when we check index of a word not inside the string we get -1!

console.log(myString.indexOf("ninja"));

//We can put this to use in an IF. For example;

if (myString.indexOf("ninja") === -1) {
  console.log("The word ninja is not in the string!");
} else {
  console.log("The word ninja starts at position " + myString.indexOf("ninja"));
}

// SLICE

var myWord = "Hello World";

// If I want to display "ello wo" only I can use slice bn the index of e and r : means includes "e" not "r

myPoc = myWord.slice(1, 8);
console.log(myPoc);

var myName = 'annmarypriyavinod';
var itsMe = myName.slice(0,7);
console.log(itsMe);
var myMom = myName.slice(7,12);
console.log(myMom);

var myDad = myName.slice(12);
console.log(myDad);





// SPLIT

//  split divides the string at a given landmark like a comma,| etc.
 // split gives back an array divided at the landmark (I don't get what I mean! Just check this example)

var food = "samosa,cutlet,rolls,sandwich,fries";
var foodie = food.split(",");
console.log(foodie);

var places = "mountain,valley,city,park,orchard,fields,hill,riverside,beach,resort,home,ground";
var trip = places.split(",");
console.log(trip);








//    THERE ARE METHODS TO COMPARE STRINGS TOO!
