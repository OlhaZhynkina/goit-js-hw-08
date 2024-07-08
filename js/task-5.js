function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const spanElement = document.querySelector('.color');
const buttonElement = document.querySelector('.change-color');
const body = document.querySelector('body');

buttonElement.addEventListener('click', onChangeColor);

function onChangeColor() {
  const newColor = getRandomHexColor();
  spanElement.style.color = newColor;
  body.style.backgroundColor = newColor;
}
