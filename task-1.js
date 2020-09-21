const numbersOfCategories = document.querySelectorAll(".item");
console.log(numbersOfCategories);
console.log(`В списке ${numbersOfCategories.length} категории.`);

numbersOfCategories.forEach((numberOf) => {
  const nameCategory = numberOf.querySelector("h2");
  const numberOfElInCategory = numberOf.querySelector("ul");

  console.log(`Категория: ${nameCategory.textContent}`);
  console.log(`Количество элементов: ${numberOfElInCategory.children.length}`);
});

// Можно ли решать эту задачу таким способом для каждой отдельной категории? Если да, то как уйти глубже? Дальше первой категории не получается зайти :(
// const categoryOne = document.querySelector(".item");
// console.log(`Категория: ${categoryOne.children[0].textContent}`);
// console.log(`Количество элементов: ${categoryOne.children[1].children.length}`);
