const workingHour_H = document.querySelector(".workingHour-H");
const workingHour_P = document.querySelector(".workingHour-P");

function workingHour() {
  let Hour = new Date().getHours();
  const openHour = 3;
  const closeHour = 5;
  if (Hour == 0 || Hour == 1) {
    return (Hour = Hour + 23), console.log(Hour);
  }
  console.log(openHour);
  console.log(closeHour);
  const isOpen = Hour >= openHour && Hour <= closeHour;
  if (isOpen) {
    workingHour_H.style.display = "block";
    function wellcome() {
      workingHour_H.style.display = "none";
    }
    setTimeout(wellcome, 3000);
  } else {
    (workingHour_P.style.display = "block"),
      (document.querySelector(".navbar").style.display = "none"),
      (document.querySelector(".food-cards").style.display = "none");
  }
}

workingHour();
