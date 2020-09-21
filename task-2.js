const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

// const listOfIngredients = document.createElement("li");
// console.log(listOfIngredients);
// (listOfIngredients.textContent = "Картошка";

const prescription = document.querySelector(".prescription");
console.log(prescription);

const components = document.createElement("h2");
components.textContent = "Ингредиенты для тушенной картошки";
prescription.prepend(components);

const listOfIngredients = ingredients.map((ingredient) => {
  const allIngredients = document.createElement("li");
  allIngredients.textContent = ingredient;

  return allIngredients;
});

console.log(listOfIngredients);

prescription.append(...listOfIngredients);
