// Class Declaration


class Person {


    // constructor function
    constructor(name,year){

        // setting parameters as properties
        this.name = name;
        this.year = year;

    }

    // functions in the class

    get age() {
        return this.calaAge();
    }

    calcAge() {
        return new Date().getFullYear() - this.year;
    }


    what() {
        console.log(this.name + " is a person");
    }
}





// Creating an instance of Person :

var me = new Person("Ann",2002);
    console.log (me.name + " was born in " + me.year);



