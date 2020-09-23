const inputEl = document.querySelector("#font-size-control");
console.log(inputEl);
const textEl = document.querySelector("#text");
console.log(textEl);

inputEl.addEventListener("input", forChangeFont);

function forChangeFont(event) {
  textEl.style.fontSize = event.currentTarget.value + "px";
  console.log(textEl.style.fontSize);
}
