//  ЗАДАЧА: СТВОРЮЄМО ЕЛЕМЕНТИ І ОЧИЩАЄМО ПО НАТИСНЕННЮ ВІДПОВІДНИХ КНОПОК

const boxAmountInput = document.querySelector("#controls > input");
const divBoxesWrapper = document.querySelector("#boxes");

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

//******   СЛУХАЧІ ПОДІЙ   ******

createBtn.addEventListener("click", () => {
  const amount = boxAmountInput.value;
  createBoxes(amount);
});

destroyBtn.addEventListener("click", destroyBoxes);

// *********      КОЛБЕКИ     *********

// Створення розмітки та додавання в DOM
function createBoxes(amount) {
  const divMarkupArray = [];
  let defaultWidth = 30;
  let defaultHeight = 30;

  //залежно від значення інпуту створюємо необхідну кількість елементів div
  for (let i = 1; i <= amount; i++) {
    const divMarkup = `<div style="width: ${defaultWidth}px; height: ${defaultHeight}px; background-color: ${getRandomHexColor()}"></div>`;
    divMarkupArray.push(divMarkup);

    defaultWidth += 10;
    defaultHeight += 10;
  }

  // додаємо розмітку
  const markup = divMarkupArray.join("");
  divBoxesWrapper.insertAdjacentHTML("beforeend", markup);
}

// Видалення розмітки створеної розмітки
function destroyBoxes() {
  divBoxesWrapper.innerHTML = "";
}

//  Рандомайзер кольорів
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
