const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', onInputName);

function onInputName(event) {
  const enteredValue = event.target.value.trim();
  outputName.textContent = enteredValue || 'Anonymous';
}
