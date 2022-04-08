

// Function in usual syntax 

// const calArea = function (radius){
//     return 3.14 * radius ** 2;
// };



// Arrow function 

const calArea = (radius) => {
    return 3.14 * radius**2;
};


const area = calArea(5);

console.log("area is ",area);

