// How Operations work on Numbers

var a = 7;
var b = 5;

console.log( a + b);
console.log( typeof(a + b)) ;

// How Concatenation works!
var c = "8";
var d = 3;

console.log(c + d);
console.log(typeof (c + d));

 /*object - Math
syntax :   Math.any math function or constant (content)
*/


// round - usual rounding

console.log(Math.round(8.8));
console.log(Math.round(8.3));
console.log(Math.round(8.5));

// floor- rounds back (like a GIF)

console.log(Math.floor(5.8));
console.log(Math.floor(5.3));


// ceil - rounds up

console.log(Math.ceil(4.1));
console.log(Math.ceil(5.7));
console.log(Math.ceil(3));


//  max - to find the maximum number among the input numbers


console.log(Math.max(5456,4657,676476,67.55));
console.log(Math.max(54,46,1234,67.55));

// You can use PI

console.log(Math.PI);


/*NaN*/

// Multiplication does not work for strings!

var x = "7";
var y = 9 ;

console.log(x * y);
// Here JS uses it's logic and gives us the answer we need eventhough what we have done in the code is wrong{autocorrection}


// BUT NOT HERE!

var n = 'apple';
var m = 72;

console.log(n* m);



// Use of NAN

var u = 'orange';
var v = 10;

if (isNaN(u)){
    console.log('That is not even a number dear!');
}else {
    console.log('Meaning of Life is' + (u * v));
}

var t = 32 ;
var r = 10;

if (isNaN(t)){
    console.log('That is not even a number dear!');
}else {
    console.log('Meaning of Life is ' +  (t * r));
}

// For using the opposite of (isNaN), use (!isNaN)


