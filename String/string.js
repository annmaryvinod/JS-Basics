// String Length! It gives back the number of characters in the string

var myString = 'This is a  ninja String!';

console.log(myString.length);



/*
METHODS
Functions that we use on strings are called METHODS! 
*/
 
   // Convert everything to capitals ----  toUpperCase
    
        console.log(myString.toUpperCase(myString));


// indexOf ----- finds the position at which it is found

        console.log(myString.indexOf('String')); 


   // when we check index of a word not inside the string we get -1!
              
              console.log(myString.indexOf('ninja')); 

       //We can put this to use in an IF. For example;

       if (myString.indexOf('ninja') === -1){
           console.log('The word ninja is not in the string!')
       }
       else {
           console.log('The word ninja starts at position ' + myString.indexOf('ninja'));
       }


    //  SPLIT and SLICE are some other methods!


    //    THERE ARE METHODS TO COMPARE STRINGS TOO!



             
