const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const container = document.querySelector(`ul`);
const creatLiElement = ingredients.map((item) => {
  const li = document.createElement(`li`);
  li.textContent = item;
  li.className = `item`;
  return li;
});
container.append(...creatLiElement);
