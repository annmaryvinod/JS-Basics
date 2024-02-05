const fs = require('fs');

fs.mkdir('./myFolder',(err)=>{
    if(err){
        console.log(err);
    }

    else {
        console.log("Folder created successfully!")
    }
})


const data = "I am writing into the file";

fs.writeFile('./myFolder/nf.js',data,(err)=>{

    if(err){
        console.log(err);
    
    }
    else {
        console.log("File writing is successful!");
    }

})

const data1 = "The problem with this code is: when you run the same code multiple times, it erases the previous data that is already present in newFile.txt and writes the data to it."

fs.writeFile('./myFolder/nf.js',data1,{flag:'a'},(err)=>{
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log("Success");
    }
})




fs.readFile('./myFolder/nf.js',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    else {
        console.log(data.toString());

        console.log("Success!");
    }
})