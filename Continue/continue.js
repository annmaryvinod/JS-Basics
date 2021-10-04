for ( i = 0; i < 10; i++) {
   

    if ( i=== 5 || i ===3){    
        continue;
    }

        console.log(i) ;
}
 /*"continue" breaks the code at specified points like 3 and 5 as in here!
 It does not execute the entire code below it for 5 and 3.
 Hence 5 and 3 are not displayed in the console!*/
   


console.log("I have broken out of the loop")