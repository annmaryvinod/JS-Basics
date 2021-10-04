// Use of FOR loop in a different context!

var links = document.getElementsByTagName("a");
// i represents a standard name like 'age' etc. You may use j,h etc


// link length deals with the number of links i the file


for ( i = 1; i < links.length; i++){
    console.log("this is link number" + i);
}
document.write("all links are now looped");

// If you wanted the 6th link, then use <= instead of <