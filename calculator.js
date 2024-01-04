let Calculation = '';
const displayElement = document.getElementById('calculatorDisplay');

function appendToCalculation(value) {
  Calculation += value;
  displayElement.textContent = Calculation;
}

function calculate() {
  try {
    Calculation = eval(Calculation);
    displayElement.textContent = Calculation;
  } catch (error) {
    displayElement.textContent = 'Error';
  }
}

function clearDisplay() {
  Calculation = '';
  displayElement.textContent = '0';
}