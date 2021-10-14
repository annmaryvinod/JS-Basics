// const myCar2 = {
//     maxSpeed: 70,
//     driver: "Net Ninja",
//     test: function() {
//         console.log(this);
//     }
// };

// const myCar3 = {
//     maxSpeed: 80,
//     driver: "Net ",
//     test: function() {
//         console.log(this);
//     }
// };

const orange = {
    price: 30,
    number: 5,
    totalPrice: function () {
        const total = this.price * this.number
        console.log(total)
        return total; 
    }
}

const text = "Total price is ";
console.log(text + orange.totalPrice());

// console.log(myCar2);
// console.log(myCar2.maxSpeed);
// myCar2.test();
// myCar3.test();


// myCar2.test();

 