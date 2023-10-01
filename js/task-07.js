const fontSize = document.querySelector("#font-size-control");
const spanSize = document.querySelector("#text");

fontSize.addEventListener(`input`, () => {
  const sizeText = fontSize.value;
  spanSize.style.fontSize = `${sizeText}px`;
});

console.log(spanSize);
console.log(fontSize);
