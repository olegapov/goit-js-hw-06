const inputBlur = document.querySelector("#validation-input");
console.log(inputBlur);
// const numberInput = document.querySelector("#validation-input[data-length]");
// console.log(numberInput);
// inputBlur.addEventListener("focus");

inputBlur.addEventListener("blur", () => {
  const findLength = Number(inputBlur.dataset.length);
  const currentLength = inputBlur.value.length;
  console.log(findLength);
  console.log(currentLength);
  if (findLength === currentLength) {
    inputBlur.classList.remove("invalid");
    inputBlur.classList.add("valid");
  } else {
    inputBlur.classList.remove("valid");
    inputBlur.classList.add("invalid");
  }
});
