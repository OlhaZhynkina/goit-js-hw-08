function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputElement = document.querySelector('[type="number"]');
const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const boxElement = document.querySelector('#boxes');

buttonCreate.addEventListener('click', createBoxes);
buttonDestroy.addEventListener('click', destroyBoxes);

function createBoxes() {
  boxElement.innerHTML = '';
  const inputValue = inputElement.value;
  const markup = [];
  if (inputValue < 1 || inputValue > 100) {
    return alert('Error! Incorrect number');
  }

  for (let i = 0; i < inputValue; i += 1) {
    markup.push(
      `<div style="width: ${30 + i * 10}px; height: ${
        30 + i * 10
      }px; background-color: ${getRandomHexColor()};"></div>`
    );
  }

  const strMarkup = markup.join('');
  boxElement.insertAdjacentHTML('afterBegin', strMarkup);
  inputElement.value = '';
  return;
}

function destroyBoxes() {
  boxElement.innerHTML = '';
}
