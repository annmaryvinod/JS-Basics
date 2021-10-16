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













