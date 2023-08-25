const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', onInputName);


function onInputName(event) {
    nameOutput.textContent = event.currentTarget.value;
};