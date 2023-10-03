function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const colorWrite = document.querySelector(`.color`);
const buttonColor = document.querySelector(`.change-color`);
const body = document.querySelector(`body`);

buttonColor.addEventListener(`click`, () => {
  const ranColor = getRandomHexColor();
  body.style.backgroundColor = `${ranColor}`;
  colorWrite.textContent = `${ranColor}`;
});
