const workingHour_H = document.querySelector(".workingHour-H");
const workingHour_P = document.querySelector(".workingHour-P");

function workingHour() {
  const Hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 24;

  const isOpen = Hour >= openHour && Hour < closeHour;

  if (isOpen) {
    workingHour_H.style.display = "block";
    function wellcome() {
      workingHour_H.style.display = "none";
    }
    setTimeout(wellcome, 3000);
  } else {
    console.log(1);
    (workingHour_P.style.display = "block"),
      (document.querySelector(".navbar").style.display = "none"),
      (document.querySelector(".food-cards").style.display = "none");
  }
}

workingHour();
