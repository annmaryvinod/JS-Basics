// switch statements can be used instead of "if" and "else" statements

function switchOfStuff(val) {
  var answer = "";
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "box";
      break;
    case "c":
      answer = "carrot";
      break;
    case "d":
      answer = "donkey";
      break;
    case "e":
      answer = "elma";
      break;

      default :
      answer = "none of the above!"
  }
  return answer;
}



// switch says " when val == "a", return answer = "apple""
// the "default" is just the same as the "else" statement when all other conditions hold false
// switch evaluate on "==="




// calling

console.log(switchOfStuff("a"));
console.log(switchOfStuff("s"));
console.log(switchOfStuff(3));
console.log(switchOfStuff("b"));
console.log(switchOfStuff("c"));
console.log(switchOfStuff("d"));
console.log(switchOfStuff("e"));

console.log(switchOfStuff(""));
