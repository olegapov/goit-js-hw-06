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

li.textContent = ingredients;
li.className = `item`;

console.log(li);

const creatLiElement = ingredients.map((item) => `<li>${item}</li>`).join("");
li.innerHTML = creatLiElement;
container.append(li);
