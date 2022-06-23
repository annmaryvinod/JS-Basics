
// task : from the given list get a list of full names using the map method


const users =[
    { firstName:'Anne', secondName:'Frank', age : 26},
    { firstName:'Harry', secondName:'Potter', age : 46},
    { firstName:'Robert', secondName:'Langdon', age : 56}
    
]


const output = users.map((x)=>{
    return x.firstName + " " + x.secondName;
})

console.log(output);