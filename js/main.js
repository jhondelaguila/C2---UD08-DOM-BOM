let screen = document.getElementById("screen").value;

const typeOnScreen = (value) => {
  screen += value;
  document.getElementById("screen").value = screen;
};

const clearScreen = () => {
  document.getElementById("screen").value = "";
  screen = "";
};

const result = () => {
  let numbers = screen.split(/[-+*/]/);
  let operators = screen.replace(/[0-9]|\.|\s/g, "").split("");

  let total = parseFloat(numbers[0]);
  for (let i = 0; i < operators.length; i++) {
    let number = parseFloat(numbers[i + 1]);
    let operator = operators[i];

    switch (operator) {
      case "+":
        total += number;
        break;
      case "-":
        total -= number;
        break;
      case "*":
        total *= number;
        break;
      case "/":
        total /= number;
        break;
    }
  }
  document.getElementById('screen').value = total;
  screen='';
};
