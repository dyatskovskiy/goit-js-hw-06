const body = document.body;
const changeColorBtn = document.querySelector(".change-color");
const currentColorEl = document.querySelector(".color");

changeColorBtn.addEventListener("click", onBtnColorChange);

function onBtnColorChange() {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  currentColorEl.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
