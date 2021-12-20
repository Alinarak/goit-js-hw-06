const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");

const ingrList = ingredients.map((value) => {
  const createListLi = document.createElement("li");
  createListLi.textContent = value;
  return createListLi;
});
list.append(...ingrList);

const newClass = document.querySelectorAll("li");
newClass.forEach((item) => {
  item.classList.add("item");
});
