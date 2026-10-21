
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

document.getElementById('btn-add').addEventListener('click', () => {
  const { a, b } = getInputValues();

  document.getElementById('result').textContent = add(a, b);
});

document.getElementById('btn-subtract').addEventListener('click', () => {
  const { aValue, bValue, a, b } = getInputValues();
  const result = document.getElementById('result');

  if (aValue.trim() === '' || bValue.trim() === '') {
    result.textContent = 'Please enter both numbers.';
    return;
  }

  result.textContent = subtract(a, b);
});

document.getElementById('btn-multiply').addEventListener('click', () => {
  const { a, b } = getInputValues();

  document.getElementById('result').textContent = multiply(a, b);
});
