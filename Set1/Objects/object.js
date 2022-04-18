// We create an object[myCar as here!] and assign it some properties... {Clearly, cooked up!}

   var myCar = new Object();

         //   Like we created an empty object with new Object we may create arrays too!
   myCar.maxSpeed = "55 miles/hour";
   myCar.driver = "Ann";
   myCar.fuel = 'petrol';
   myCar.drive = function () { console.log ("Now Driving!");};


//    Above we have created properties for this object of ours!
// Now let's check the properties of our object!

      console.log(myCar.driver);
      console.log(myCar.maxSpeed);
      console.log(myCar.fuel);
      myCar.drive();


// Shorthand for object creation!
//  Just as we used [] for creating and defining array, we use {} to create and define an object! 
                  //     var variablename = { property1 : property1 value , property2 : property2 value , property3 : property3 value} ;


      var myCar2  = { maxSpeed: 70 , driver : "Ninja" , drive : function() { console.log("Now Driving Dear!");}};



      console.log(myCar2.driver);
      console.log(myCar2.maxSpeed);
      myCar2.drive();

// Let us make a function with a calculation { DISTANCE as here!}

myCar2.distance = function(speed,time) { console.log (speed * time)}

myCar2.distance(150,34);






