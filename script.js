let displayValue = '';
let previousCalculation = '';

function appendNumber(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = displayValue;
}

function popnumber() {
  displayValue = displayValue.slice(0, -1);
  document.getElementById('display').value = displayValue;
}

function calculate() {
  try {
    previousCalculation = displayValue;
    displayValue = eval(displayValue);
    document.getElementById('display').value = displayValue;
  } catch {
    document.getElementById('display').value = 'Error';
  }
}

function showPrevious() {
  document.getElementById('display').value = previousCalculation;
}

document.getElementById('toggle-theme').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});
