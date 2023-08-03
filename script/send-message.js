const input1 = document.querySelector(".text-input");
const input2 = document.querySelector(".number-input");
const submitBtn = document.querySelector(".submit-btn");
const textarea = document.querySelector(".textarea");
const form = document.querySelector(".form");
const WrongInputName = document.querySelector(".WrongInputName");
const WrongInputNumber = document.querySelector(".WrongInputNumber");

submitBtn.addEventListener("click", function (form) {
  form.preventDefault();
  let value1 = input1.value;

  if (value1.length < 4) {
    return (
      input1.classList.add("wrong"), (WrongInputName.style.display = "block")
    );

    // (input1.placeholder = "Ismingizni to'gri kiriting!"),

    // (input1.value = "")
  } else {
    input1.classList.add("wrong"),
      (WrongInputName.style.display = "none"),
      input1.classList.remove("wrong");
  }

  let value2 = input2.value;
  // input2.value = "";

  if (!(value2.length == 12 || value2.length == 9)) {
    return (
      input2.classList.add("wrong"), (WrongInputNumber.style.display = "block")
    );
    // (input2.placeholder = "Telefon raqamingizni to'gri kiriting!"),
    // (input2.value = "")
  } else {
    input2.classList.remove("wrong"), (WrongInputNumber.style.display = "none");
    // (input2.placeholder = "Telefon raqamingiz");
  }

  let value3 = textarea.value;
  textarea.value = "";

  //   console.log(value3);

  const BOT_TOKEN = "6012806041:AAG-Wn6RGHzxLQTgjBphTqFtn0r2-OCtJ_Y";
  const URI_API = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  //   if (value1.length < 4 || value2.length < 11 || value2.length > 12) return;

  function sendLocationToTelegram(latitude, longitude) {
    const BOT_TOKEN = "6012806041:AAG-Wn6RGHzxLQTgjBphTqFtn0r2-OCtJ_Y";
    const CHAT_ID = "-1001931896326";

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendLocation?chat_id=${CHAT_ID}&latitude=${latitude}&longitude=${longitude}`;

    let orders = document.createElement("P");
    foodNamesArray.forEach((value) => {
      orders.append(value.trim(), "\n");
    });

    let message = `<i><b>Yangi zakaz</b></i>\n`;
    message += `<b>Zakaz beruvchi: ${value1} </b>\n`;
    message += `<b>Telefon raqami: ${"+" + value2} </b>\n`;
    if (!value3 == "") {
      message += `<b>Izoh: ${value3} </b>\n`;
    }
    message += `<b>\n${orders.innerHTML} </b>\n`;
    message += `<b>Jami: ${totalCost}</b>`;

    // submitBtn.setAttribute("disabled", "");
    // submitBtn.style.cursor = "no-drop";

    // submitBtn.addEventListener("click", function () {});

    fetch(URI_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message,
      }),
    })
      .then((response) => {
        if (response.ok) {
          console.log(response);
        } else {
          console.log("Произошла ошибка при отправке сообщения в Telegram.");
        }
      })
      .catch((error) => {
        console.warn(
          "Произошла ошибка при отправке сообщения в Telegram:",
          error
        );
      })
      .finally(() => {
        document.querySelector(".success").style.display = "flex";
        document.querySelector(".spin").style.display = "none";
        document.querySelector(".close-shoping-card").display = "none";
        console.log("finish");
      });
    setTimeout(() => {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            console.log(response);
            console.log("Геолокация успешно отправлена в Telegram!");
          } else {
            console.log("Произошла ошибка при отправке геолокации в Telegram.");
          }
        })
        .catch((error) => {
          console.log(
            "Произошла ошибка при отправке геолокации в Telegram:",
            error
          );
        });
    }, 800);
  }

  function getLocation() {
    if (navigator.geolocation) {
      const options = { enableHighAccuracy: true };

      setTimeout(
        function () {
          navigator.geolocation.getCurrentPosition(
            showPosition,
            handleError,
            options
          );
        },

        2000
      );
    } else {
      console.log("Геолокация не поддерживается вашим браузером.");
    }
  }

  function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log("Широта:", latitude);
    console.log("Долгота:", longitude);

    sendLocationToTelegram(latitude, longitude);
  }

  function handleError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("Geolokatsiyani yoqing!");
        break;
      case error.POSITION_UNAVAILABLE:
        console.log("Информация о геолокации недоступна.");
        break;
      case error.TIMEOUT:
        console.log("Время ожидания запроса геолокации истекло.");
        break;
      default:
        console.log("Произошла ошибка при получении геолокации.");
        break;
    }
  }
  getLocation();
  document.querySelector(".spin").style.display = "flex";
  document.querySelector(".close-shoping-card").display = "none";
});
