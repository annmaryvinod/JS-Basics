// Using the switch to hold multiple stataements with the same output

// Just change the position of the "break"

function testMultiples(val) {
  var answer;

  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "You've Got Mail!";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Loading the Page... Please wait!";
      break;

    case 7:
    case 8:
    case 9:
      answer = "Better Get Some Sleep!";
      break;
  }
  return answer;
}



console.log(testMultiples(2));
console.log(testMultiples(6));
console.log(testMultiples(8));
console.log(testMultiples(1));
console.log(testMultiples(4));
console.log(testMultiples(9));