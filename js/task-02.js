const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const container = document.querySelector(`ul`);
const li = document.createElement(`li`);

// let addLi = [];
// for (const item of ingredients) {
//   addLi = item;
//   return addLi;
// }

li.textContent = ingredients;
li.className = `item`;

console.log(li);

// console.log(addLi);

const creatLiElement = ingredients.map((item) => `<li>${item}</li>`).join("");
li.innerHTML = creatLiElement;
container.append(li);
