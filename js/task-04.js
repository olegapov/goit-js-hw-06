const counterValue = document.querySelector("#value");
const plus = document.querySelector(`button[data-action="increment"]`);
const minus = document.querySelector(`button[data-action="decrement"]`);
let counter = 0;

plus.addEventListener("click", () => {
  counter += 1;
  counterValue.textContent = counter;
});
minus.addEventListener("click", () => {
  counter -= 1;
  counterValue.textContent = counter;
});
