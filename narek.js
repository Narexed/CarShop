const buttonEl = document.querySelectorAll(".button");
const cartEl = document.querySelector(".cart");

// comment to test git

let cart = 0;

let a = buttonEl.forEach((buttonEl) => {
  buttonEl.addEventListener("click", (ev) => {
    cart = cart + +ev.target.title;
    cartEl.innerText = cart + "$";
    console.log(cartEl.innerText);
  });
});
