const numbers = document.getElementById('operation');
const equal = document.getElementById('equal');
let operations = [];
let operator = "";
let result = 0;

// adds digit to input
function addDigit(num) {
  if (num == ".") {
    numbers.value += num;
    return;
  }

  num = parseFloat(num);
  if (num || num == 0) numbers.value += num; 
}

document.addEventListener('keydown', e => {
  switch (e.key) {
    case "Escape":
      clearAll();
      break;

    case "Backspace":
      clearDigit();
      break;

    case "+":
      operate("add");
      break;

    case "-":
      operate("substract");
      break;

    case "*":
      operate("multiplication");
      break;

    case "/":
      operate("division");
      break;

    case ".":
      numbers.value += e.key;
      break;

    case "Enter":
    case "=":
      operate("equal");
      break;

    default:
      addDigit(e.key);
      break;
  }
});

function operate(opt) {
  if (numbers.value == "") return;

  operations.push(numbers.value);
  let operationsNum = operations.map(parseFloat); // converts all digits to numbers
  clearInput();

  // Determining the operator to use later on
  if (opt == "add") operator = "add";
  else if (opt == "substract") operator = "substract";
  else if (opt == "multiplication") operator = "multiplication";
  else if (opt == "division") operator = "division";
  else if (opt == "percentage") operator = "percentage";
  else if (opt == "square") operator = "square";

  // The actual operations
  if (opt == "equal") {
    switch (operator) {
      case "add":
        for (let n = 0; n < operationsNum.length; n++) {
          if (n == operationsNum.length) break;
      
          result += operationsNum[n];
        }

        break;
      
      case "substract":
        result = operationsNum[0];
        for (let n = 0; n < operationsNum.length; n++) {
          if (n == operationsNum.length) break;
      
          result -= operationsNum[operationsNum.length - 1];
          operationsNum.pop();
        }

        break;

      case "multiplication":
        result = operationsNum[0];
        for (let n = 0; n < operationsNum.length; n++) {
          if (n == operationsNum.length - 1) break;
      
          result = result * operationsNum[n + 1];
        }

        break;

      case "division":
        result = operationsNum[0];
        for (let n = 0; n < operationsNum.length; n++) {
          if (n == operationsNum.length - 1) break;
      
          result = result / operationsNum[n + 1];
        }

        break;
      
      case "percentage":
        result = operationsNum[1] * (operationsNum[0] / 100)

        break;

      case "square":
        let powered = Math.pow(operationsNum[0], operationsNum[1]);
        result = powered;
        break;
    }

    if (result == "Infinity") {
      numbers.value = "too much gng ngl✌️";
      return;
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
