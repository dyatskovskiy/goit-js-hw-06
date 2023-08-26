const textInputEl = document.querySelector("#validation-input");

textInputEl.addEventListener("blur", onInputValidation);

function onInputValidation(event) {
  const inputLength = event.currentTarget.value.trim().length;
  const validInputLength = textInputEl.getAttribute("data-length");

  //перевірка, чи дорівнює кількість введених символів значенню атрибута data-length
  if (inputLength == validInputLength) {
    textInputEl.classList.add("valid");
    if (textInputEl.classList.contains("invalid")) {
      textInputEl.classList.remove("invalid");
    }
  } else {
    textInputEl.classList.add("invalid");
    if (textInputEl.classList.contains("valid")) {
      textInputEl.classList.remove("valid");
    }
  }
}
