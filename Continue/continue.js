for ( i = 0; i < 10; i++) {
   

    if ( i=== 5 || i ===3){    
        continue;
    }

        console.log(i) ;
}
// continue will not execute the code below for the condition provided
// Here when i is 5 or 3 the code below to print in console or anything below that within the for loop do not work.
   


console.log("I have broken out of the loop");



for (i=0; i<8; i++){

    if(i === 1){
        continue;
    }
    console.log("I want " + i + " icecreams!");

    
}




for(i=0 ; i < 5; i++){

    if(i ===0){
        continue;
    }
    console.log('All ' + i + ' idiots get lost!');
}