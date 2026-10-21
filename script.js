
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

document.getElementById('btn-add').addEventListener('click', () => {
  const { a, b } = getInputValues();

  displayResult(add(a, b));
});

document.getElementById('btn-subtract').addEventListener('click', () => {
  const { aValue, bValue, a, b } = getInputValues();

  if (aValue.trim() === '' || bValue.trim() === '') {
    displayResult('Please enter both numbers.');
    return;
  }

  displayResult(subtract(a, b));
});

document.getElementById('btn-multiply').addEventListener('click', () => {
  const { a, b } = getInputValues();

  displayResult(multiply(a, b));
});
