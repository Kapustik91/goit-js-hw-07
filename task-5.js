const input = document.querySelector(".js-input");
console.log(input);
const nameLabel = document.querySelector(".js-label > span");
console.log(nameLabel);

function onInputFocus() {}
function onInputBlur() {}
function onInputChange(event) {
  // console.log(event.currentTarget.value);
  if (input.value === "") {
    nameLabel.innerHTML = "незнакомец";
  } else {
    nameLabel.innerHTML = input.value;
  }
}

input.addEventListener("focus", onInputFocus);
input.addEventListener("blur", onInputBlur);
input.addEventListener("input", onInputChange);
