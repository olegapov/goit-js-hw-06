const numcategory = document.querySelectorAll(`.item`);
console.log(`Number of categories: ${numcategory.length}`);
const items = [...numcategory];
const categoryLi = document.querySelectorAll(`h2`);

items.forEach((number) => {
  const category = number.querySelector("h2").textContent;
  const item = number.querySelectorAll("ul li");
  console.log(`Category: ${category}`);
  console.log(`Elements: ${item.length}`);
});
// console.log(h2.children);
