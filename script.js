
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function getInputValues() {
  const aValue = document.getElementById('a').value;
  const bValue = document.getElementById('b').value;

  return {
    aValue,
    bValue,
    a: Number(aValue),
    b: Number(bValue)
  };
}

function displayResult(value) {
  document.getElementById('result').textContent = value;
}

function handleOperation(operation, requireBothInputs = false) {
  const { aValue, bValue, a, b } = getInputValues();

  if (
    requireBothInputs &&
    (aValue.trim() === '' || bValue.trim() === '')
  ) {
    displayResult('Please enter both numbers.');
    return;
  }

  displayResult(operation(a, b));
}

document.getElementById('btn-add').addEventListener('click', () => {
  handleOperation(add);
});

document.getElementById('btn-subtract').addEventListener('click', () => {
  handleOperation(subtract, true);
});

document.getElementById('btn-multiply').addEventListener('click', () => {
  handleOperation(multiply);
});
  