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

function addDigit(num) {
  numbers.value += num;
}

function operate(opt) {
  if (numbers.value == "") return;

  operations.push(numbers.value);
  let operationsNum = operations.map(parseFloat);
  clearInput();

  if (opt == "equal" && operationsNum.length >= 2) {
    for (n = 0; n < operationsNum.length; n++) {
      if (n == operationsNum.length - 1) break;

      result += (operationsNum[n] + operationsNum[n+1]);
      
    }
    console.log(result)
    numbers.value = result;
    operations = [];
    result = 0;
  }
}

function clearInput() {
  numbers.value = "";
}

function clearAll() {
  clearInput();
  operations = [];
}

equal.addEventListener('click', () => {
  
})