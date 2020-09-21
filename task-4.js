const counterValue = {
  value: 0,
  increment() {
    console.log("increment -> this", this);
    this.value += 1;
  },

  decrement() {
    console.log("decrement -> this", this);
    this.value -= 1;
  },
};

const decrementBtn = document.querySelector(".btn-decrement");
console.log(decrementBtn);

const incrementBtn = document.querySelector(".btn-increment");
console.log(incrementBtn);

const valueEl = document.querySelector(".js-value");
console.log(valueEl);

decrementBtn.addEventListener("click", function () {
  console.log("Кликнули на уменьшить число");

  counterValue.decrement();
  console.log(counterValue);

  valueEl.textContent = counterValue.value;
});

incrementBtn.addEventListener("click", function () {
  console.log("Кликнули на увеличить число");

  counterValue.increment();
  console.log(counterValue);

  valueEl.textContent = counterValue.value;
});
