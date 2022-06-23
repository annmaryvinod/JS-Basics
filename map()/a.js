// map method basic idea 


const arr = [3,7,9,78,234];
console.log(arr);



// double
const double = (x)=> {
    return x*2;
}
const output_1 = arr.map(double);
console.log(output_1);


// triple

const triple =(x)=>{
    return x*3;
}
const output_2 = arr.map(triple);
console.log(output_2);

// binary
const binary=(x)=> {
    return x.toString(2);
}
const output_3 = arr.map(binary);
console.log(output_3);