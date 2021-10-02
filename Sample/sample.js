// Use of if, else and else if


var myAge =20

if (myAge > 50) {
    document.write("You are over 50!")
}
else if (myAge > 40) {
    document.write("You are over 40!")
}
else if (myAge > 30) {
    document.write("You are over 30!")
}
else if (myAge > 20) {
    document.write("You are over 20!")
}
else if (myAge > 10) {
    document.write("You are over 10!")
}
else  {
    document.write("You are not over 10!")
}

// Use of Logical Operators

// 1. AND &&

var myAge = 20

if (myAge >= 18 && myAge <= 30){
    document.write("You can come, you cool dude!")
} else{
    document.write("You aint coming!")
}

// 2. OR ||

var myAge = 20

if (myAge < 18 || myAge > 30){
    document.write("You aint coming!")
} else{
    
    document.write("You can come, you cool dude!")
}

// While Loop

var age = 5;

while (age < 10){
    console.log("Your age is less than 10");   
    age++;
    // Check console to see changes
}
document.write("You are now over 10");

// FOR Loop perfoming the previous code

for (age=5; age < 10; age++) {

    console.log("You are below 10");
}
document.write("You are over 10 dear!")


