const input1 = document.querySelector(".text-input");
const input2 = document.querySelector(".number-input");
const submitBtn = document.querySelector(".submit-btn");
const textarea = document.querySelector(".textarea");
const form = document.querySelector(".form");

submitBtn.addEventListener("click", function (form) {
  form.preventDefault();

  let value1 = input1.value;
  input1.value = "";

  let value2 = input2.value;
  input2.value = "";

  let value3 = textarea.value;
  textarea.value = "";

  console.log(value1);
  console.log(value2);
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
        console.log("finish");
      });
    setTimeout(() => {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          parse_mode: "html",
          latitude: latitude,
          longitude: longitude,
          title: "Order Location", // Title for the venue
          // address: `<b>Zakaz beruvchi: ${value1} </b>\n<b>Telefon raqami: ${
          //   "+" + value2
          // } </b>`, // You can provide the address here if needed
          // text: message,
        }),
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
    }, 300);
  }

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, handleError);
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
});
