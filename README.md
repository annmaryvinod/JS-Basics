# JS-Basics
Learning basics of JS!



1. JS is not the same as Java.
2. To link a JS file to an an HTML file:
   a)Go to the html file.
   b)Within the <body> tag type
           <script src="filename.js"> </script>
3. JS is case sensitive.
4. Every JS statement ends in semicolon;
5. Comment in JS
     a) Inline comment : //
     b) Multiline comment : /* comment here!*/
6. JS follows the sequence as instructed by the code!
7. Data Type 1: Variable

     1. Variable is initialised with a 'var' keyword.
     2. The name of the var can have any number or alphabet but not start with a number.
     3. Variable values can be changed or updated.
     4. String: kept inside a quotation.


8. Math Operators In JS
       = ; assingnment  +,/,- has their usual meanings 
                        <!--  == stands for equal-->
 
 

9. === :
      == deals with the value and the last one can be used to evaluate whether we are dealing with a string or a number.


10. Please note the use of "if" , "else", "else if"

           1. "if" provides a clause before condition
           2. "else" provides code for operation in case the if condition is not satisfied.
           3. "else if" can be used to give multiple conditionings after "if".

11. Comparison tools
        == , < , > , ===            
        negation: !

    != stands for not equal to( also !==)


    (>= stands for "greater than or equal to"{similar for the other})

12. Logical Operators:
         1. AND------    && ----- valid when both conditions work!    
         2. OR-------    || ------ valid when atleast one holds true!


         { 1. To write on the document ::: document.write(content)
           2. To write on the console ::: console.log(content)}


13. Check the code for use of WHILE LOOP.
        The syntax looks similar to that of IF


14. FOR loop can put together the "var name" , "condition" , "increment" together

15. " Break" is used to break a loop at specified points!

16. LOCAL and GLOBAL variable
     * Local : coded within a function and can be called out only within that function!
     * Global : Present outside any function and can be called out anywhere in the code!

     
17. Checkout use of JS timers

18. Check out :'
   * ternary operators
   * Object.freeze
   * const and let




19. JS Timers :

  * " setTimeout(function, milliseconds) "   : Executes a function, after waiting a specified number of milliseconds.

  * " setInterval(function, milliseconds) "   : Same as setTimeout(), but repeats the execution of the function continuously.


  * The setTimeout() and setInterval() are both methods of the HTML DOM Window object. Hence the syntax is " window.setTimeout(function, milliseconds); ".


20. Ternary Operator:

* It is used instead of "if".

* Syntax : " 'condition' '?' 'expression to execute if the condition is truthy'  ':'  'expression to execute if the condition is falsy' "



21. Object.freeze()

* The Object.freeze() method freezes an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed. In addition, freezing an object also prevents its prototype from being changed. freeze() returns the same object that was passed in.


* Syntax : "Object.freeze(objectname);"

