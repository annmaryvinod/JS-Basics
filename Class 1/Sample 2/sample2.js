// Use of FOR loop in a different context!

var links = document.getElementsByTagName("a");
// i represents a standard name like 'age' etc. You may use j,h etc


// link length deals with the number of links i the file


for ( i = 1; i < links.length; i++){
    console.log("this is link number" + i);
}
document.write("all links are now looped");

// If you wanted the 6th link, then use <= instead of <






// Use of boolean!

console.log(Boolean(3<9));

/* Boolean value of all numbers is true except for 0 and -0.
   All strings show true values but empty strings show false.*/