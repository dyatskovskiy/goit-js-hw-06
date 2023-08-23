// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');
const valueTextEl = document.querySelector('#value');
let counterValue = 0;


decrementButton.addEventListener('click', onButtonDecrementValue);
incrementButton.addEventListener('click', onButtonIncrementValue);

function onButtonDecrementValue() {
    counterValue -= 1;
    valueTextEl.textContent = `${counterValue}`;
};

function onButtonIncrementValue() {
    counterValue += 1;
    valueTextEl.textContent = `${counterValue}`;
};