const body = document.querySelector("body");
const sideBar = document.querySelector(".side-bar");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const cart = document.querySelector(".cart");
const content = document.querySelector(".content");
const addToCart = document.querySelector(".add-to-cart");
const counter = document.querySelector(".counter");

//////////////// shoping cart //////////////

const shoppingCartItem = document.querySelector(".shoping-cart-items");
const closeShopingCard = document.querySelector(".close-shoping-card");
const shopingCart = document.querySelector(".cart-overlay");
const submit = document.querySelector(".submit-btn");
// const totalDiv = document.querySelector(".total-div");
// const totalp = document.querySelector(".total");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.add("hidden");
  sideBar.classList.add("active");
});

closeBtn.addEventListener("click", function () {
  sideBar.classList.remove("active");
  menuBtn.classList.remove("hidden");
});

content.addEventListener("click", function () {
  sideBar.classList.remove("active");
  menuBtn.classList.remove("hidden");
  shopingCart.style.display = "none";
});

cart.addEventListener("click", function () {
  shopingCart.style.display = "block";
  // if (totalp.value == "") {
  //   totalDiv.style.display = "none";
  // }
});

// addToCart.addEventListener("click", function () {
//   counter.style.display = "flex";
//   addToCart.style.display = "none";
// });

// submit.addEventListener("click", function () {
//   shopingCart.style.display = "none";
// });

closeShopingCard.addEventListener("click", function () {
  shopingCart.style.display = "none";
});
