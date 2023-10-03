const inputBlur = document.querySelector("#validation-input");

inputBlur.addEventListener("blur", () => {
  const findLength = Number(inputBlur.dataset.length);
  const currentLength = inputBlur.value.length;
  if (findLength === currentLength) {
    inputBlur.classList.remove("invalid");
    inputBlur.classList.add("valid");
  } else {
    inputBlur.classList.remove("valid");
    inputBlur.classList.add("invalid");
  }
});
