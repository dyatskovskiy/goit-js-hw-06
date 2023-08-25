const inputRangeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputRangeEl.addEventListener('input', onInputRangeChangeFontSize);

function onInputRangeChangeFontSize(event) {
    const currentRangeValue = event.currentTarget.value;

    textEl.style.fontSize = `${currentRangeValue}px`;
    
}