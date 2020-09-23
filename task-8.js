const collectionToRender = document.querySelector('[data-action="render"]');
const collectionToDestroy = document.querySelector('[data-action="destroy"]');
const boxes = document.querySelector("#boxes");
const number = document.querySelector("#controls input");
console.log(number);

collectionToRender.addEventListener("click", createBoxes);
collectionToDestroy.addEventListener("click", destroyBoxes);

function getAmount() {
  const amount = number.value.length;
}

function createBoxes(amount) {
  const basicSize = 30;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i > amount; i += 1) {
    const size = basicSize + i * 10;
    const div = document.createElement("div");
    div.style.setAttribute(
      "style",
      `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`
    );
    fragment.appendChild(div);
  }

  boxes.appendChild(fragment);
}

function destroyBoxes() {
  boxes.insertAdjacentHTML = "";
}

console.log(createBoxes);
