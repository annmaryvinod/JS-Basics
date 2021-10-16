// constructor function can be used to create more objects later on


// Example 1

    //  Creating the constructor 1:

var Car = function(maxSpeed,driver){

    // let us initialise the maxSpeed and driver
    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed,time){
        console.log(speed * time);
    };
    this.logDriver = function(){
        console.log("driver name is " + this.driver);
    };
}

// Note : here we named the constructor function as "Car" with a capital C.
// Conventionally we start the name of the constructor function with a capital letter.



// Assigning Objects

//   See the syntax : var "new object's name" = new "Constructor name" (arguments)
    
  var myCar1 = new Car(70,"Ninja");
  var myCar2 = new Car(60,"Santa");
  var myCar3 = new Car(23,"Severus");
  var myCar4 = new Car(54,"Malfoy");


// Calling the constructor by creating more objects

  myCar1.drive(30,5);
  myCar2.drive(56,9);
  myCar2.logDriver();


//   Here you cannot call objects that you have not created. Eg ; myCar5 etc






// Example 2
var g = 10;

var Food = function(){
    this.weight = function(mass,g){
        console.log( "The weight is :" + (mass * g));
    };
    this.price = function(weight,cpw){
        console.log("The price is :" + (cpw * weight));
    };
}

var chapathi = new Food();
var biriyani = new Food();
var samosa = new Food();

chapathi.weight(12,3);
biriyani.price(45,70);
samosa.price(10,5);
samosa.weight(9,4);





// The Date object in JS


//  1. Current Date:

var myDate = new Date();
console.log(myDate);



//   syntax in bracket : year,month,date,hour,min,sec
// month is from 0 t 11 not 0 to 12.


// 2. Past Date :
var myPastDate = new Date(2020,11,3);
console.log(myPastDate);

// 3. Future Date

var myFutureDate = new Date(2096,0,4,5,34,59);
console.log(myFutureDate);




// -------------------------------------------------------------------------------------------------------------------------------

// Some Methods of the Date object

var birthday = new Date(1985,0,15,11,15,25);

// get the month of the date (0-11)
console.log(birthday.getMonth());

// get the full year (YYYY)
console.log(birthday.getFullYear());

// get the date(0-31)
console.log(birthday.getDate());


// get the day of the week (0-6)
console.log(birthday.getDay());

// get the hour of the day (0-23)
console.log(birthday.getHours());

// get the number of milliseconds since 1st Jan 1970
console.log(birthday.getTime());





// Why or when do we use the "getTime" method
// We it to compare time


// some caomparisons : let us define a new birthday2 object with same values

var birthday2 = new Date(1985,0,15,11,15,25);

// Case 1: When we compare objects

if (birthday == birthday2){
    console.log("Birthdays are equal!");
} else{
    console.log("Birthdays are not equal!");
}

// We got here unequal because we compared the two different objects


// Case 2 : When we compare with the method "getTime"

if (birthday2.getTime == birthday.getTime){
    console.log("Birthdays are equal!");
} else{
    console.log("Birthdays are not equal!");
}

// Now we get them equal!












