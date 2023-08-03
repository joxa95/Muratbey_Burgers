const foodCards = document.querySelector(".food-cards");
const shoppingCartItems = document.querySelector(".shoping-cart-items");
const foodsCount = document.querySelector(".cart-count");
const totalDiv = document.querySelector(".total-div");
// const totalDiv = document.querySelector(".total-div");

let foodCounter = 0;
let totalCost = 0;
let foodNamesArray;

///

document.addEventListener("click", (e) => {
  let element = e.target.dataset.id;
  if (e.target.dataset.id) {
    makeCards(fastFoodData[element]);
  } else if (
    e.srcElement.tagName === "BUTTON" &&
    e.srcElement.closest(".card")
  ) {
    let myId = e.srcElement.closest(".card").dataset.cardid;

    ///// +
    if (e.srcElement.textContent === "+") {
      let value = document.querySelector(`[data-paraid="${myId}"]`).textContent;
      document.querySelector(`[data-paraid="${myId}"]`).innerHTML =
        Number(value) + 1;
    }
    ///// -
    else if (e.srcElement.textContent === "-") {
      let value = document.querySelector(`[data-paraid="${myId}"]`).textContent;
      if (value > 1) {
        document.querySelector(`[data-paraid="${myId}"]`).innerHTML =
          Number(value) - 1;
      }
    }

    ///// addToCart
    // shoppingCartItems: div: p, div(p sum  button)
    console.log(e.srcElement.classList.contains("add-to-cart"));
    if (e.srcElement.classList.contains("add-to-cart")) {
      let foodLine = document.createElement("DIV");
      let foodName = document.createElement("P");
      let foodCostAndRemove = document.createElement("DIV");
      let foodCost = document.createElement("P");
      let removeBtn = document.createElement("BUTTON");
      let total = document.querySelector(".total");

      /// styling

      foodLine.classList.add("foodLine");
      foodCostAndRemove.classList.add("foodCR");
      foodName.classList.add("foood");
      removeBtn.classList.add("revomeBtn");

      // Add a click event listener to the removeBtn
      removeBtn.addEventListener("click", removeFoodLine);

      ///

      foodName.innerHTML = `${
        document.querySelector(`[data-h4id="${myId}"]`).innerHTML
      } &times ${document.querySelector(`[data-paraid="${myId}"]`).innerHTML}
      `;

      foodCost.innerHTML = `${
        Number(document.querySelector(`[data-price="${myId}"]`).innerHTML) *
        Number(document.querySelector(`[data-paraid="${myId}"]`).innerHTML)
      }`;

      removeBtn.textContent = "delete";

      foodCostAndRemove.append(foodCost, " sum", removeBtn);
      foodLine.append(foodName, foodCostAndRemove);

      shoppingCartItems.insertAdjacentElement("beforeend", foodLine);
      totalCost += Number(foodCost.textContent);

      /// total

      total.innerHTML = totalCost;
      console.log(totalCost);

      /// foodName list

      let foodNamesNodeList = document.querySelectorAll(".foood");

      /// Food count

      foodCounter += 1;
      // Number(
      //   document.querySelector(`[data-paraid="${myId}"]`).innerHTML
      // );
      // console.log(document.querySelector(`[data-paraid="${myId}"]`).innerHTML);

      if (foodCounter > 0) {
        foodsCount.style.visibility = "visible";
        totalDiv.style.visibility = "visible";
        document.querySelector(".cart-count").style.display = "flex";
        document.querySelector(".cart-overlay").style.visibility = "visible";
      }

      ///// foodsCount
      foodsCount.innerHTML = foodCounter;

      if (totalCost > 0) {
        document.querySelector(".total-div").style.display = "flex";
      }
      console.log(foodsCount);

      foodNamesArray = [];
      foodNamesNodeList.forEach((value) => {
        foodNamesArray.push(value.textContent);
      });

      function removeFoodLine() {
        if (foodLine.parentNode) {
          const cost = parseFloat(foodCost.textContent);
          console.log(cost);
          const currentTotal = parseFloat(total.textContent);
          totalCost -= cost;
          total.textContent = currentTotal - cost;

          // Remove the food name from foodNamesArray
          const foodNameToRemove = foodName.textContent;
          const indexToRemove = foodNamesArray.indexOf(foodNameToRemove);
          if (indexToRemove !== -1) {
            foodNamesArray.splice(indexToRemove, 1);
          }

          foodLine.parentNode.removeChild(foodLine);
          foodsCount.innerHTML -= 1;
          foodCounter -= 1;
          if (foodCounter == 0) {
            document.querySelector(".cart-count").style.display = "none";
            document.querySelector(".cart-overlay").style.visibility = "hidden";
          }

          if (totalCost == 0) {
            document.querySelector(".total-div").style.display = "none";
          }
        }
      }
      // console.log(foodNamesArray);

      function backTo1() {
        document.querySelector(`[data-paraid="${myId}"]`).innerHTML = 1;
      }
      backTo1();

      ///// send data
    }
  }
});

// console.log(foodCounter);
///

function makeCards(foodArray) {
  foodCards.innerHTML = "";

  for (let food in foodArray) {
    let markup = `<div class="card" data-cardid="${food}">
    <img src="${foodArray[food].photoName}" alt="" />
    <div class="card-items">
       <h3 data-h4id="${food}">${foodArray[food].name}</h3>
       <i>${foodArray[food].ingredients}</i>
       <p class="price" >Narxi: <span data-price="${food}">${foodArray[food].prise} </span> sum</p>
       <p  >Soni: <span data-paraid="${food}" class="count">1</span></p>
    </div>
    <div class="card-buttons count">
       <button class="count-btn">-</button>
       <button class="count-btn">+</button>
       <button class="add-to-cart">savatga qo'shish</button>
    </div>
    
    </div>`;

    foodCards.insertAdjacentHTML("beforeend", markup);
  }
}

makeCards(fastFoodData[0]);
