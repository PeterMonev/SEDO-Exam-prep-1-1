
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

document.getElementById('btn-add').addEventListener('click', () => {
  const a = Number(document.getElementById('a').value);
  const b = Number(document.getElementById('b').value);

  document.getElementById('result').textContent = add(a, b);
});

document.getElementById('btn-subtract').addEventListener('click', () => {
  const aValue = document.getElementById('a').value;
  const bValue = document.getElementById('b').value;
  const result = document.getElementById('result');

  if (aValue.trim() === '' || bValue.trim() === '') {
    result.textContent = 'Please enter both numbers.';
    return;
  }

  const a = Number(aValue);
  const b = Number(bValue);

  result.textContent = subtract(a, b);
});

document.getElementById('btn-multiply').addEventListener('click', () => {
  const a = Number(document.getElementById('a').value);
  const b = Number(document.getElementById('b').value);

  document.getElementById('result').textContent = multiply(a, b);
});
