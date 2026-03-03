// const one = document.getElementById('one');
// const two = document.getElementById('two');
// const three = document.getElementById('three');
// const four = document.getElementById('four');
// const five = document.getElementById('five');
// const six = document.getElementById('six');
// const seven = document.getElementById('seven');
// const eight = document.getElementById('eight');
// const nine = document.getElementById('nine');

const numbers = document.getElementById('operation');
const equal = document.getElementById('equal');
let operations = [];
let result = 0;

// adds digit to input
function addDigit(num) { numbers.value += num; }

function operate(opt) {
  if (numbers.value == "") return;

  operations.push(numbers.value);
  let operationsNum = operations.map(parseFloat); // converts all digits to numbers
  clearInput();
  
  if (opt == "equal") {
    for (let n = 0; n < operationsNum.length; n++) {
      if (n == operationsNum.length) break;
      
      result += operationsNum[n]
    }
    numbers.value = result;
    operations = [];
    result = 0;
  }
  
}
// after clearDigit, now it concatenes Str not Float, even though in operate function it's parsed to it.

function clearDigit() {
  let cleared = numbers.value;

  cleared = String(cleared).slice(0, -1);
  numbers.value = cleared;
}

function clearInput() { numbers.value = ""; }

function clearAll() {
  clearInput();
  operations = [];
}


// TODO 
// SUBSTRACTION, MULTI, DIV