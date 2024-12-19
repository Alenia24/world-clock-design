function updateCurrent() {
  let currentTimezone = document.querySelector("#current-timezone");
  let currentLocation = moment.tz.guess();
  let currentCity = currentLocation.replace("_", " ").split("/")[1];
  let current = moment().tz(currentLocation);

  currentTimezone.innerHTML = `
    <div class="current-timezone" id="current-timezone">
        <div id="current-time">${current.format(
          "h:mm:ss"
        )} <small>${current.format("A")}</small></div>
        <div id="current-date">${current.format("MMMM Do YYYY")}</div>
    </div>
    `;
}
function updateTime() {
  let taipeiElement = document.querySelector("#taipei");
  if (taipeiElement) {
    let tapeiDateElement = taipeiElement.querySelector(".date");
    let tapeiTimeElement = taipeiElement.querySelector(".time");
    let taipeiTimeZone = moment().tz("Asia/Taipei");

    tapeiDateElement.innerHTML = taipeiTimeZone.format("MMMM Do YYYY");
    tapeiTimeElement.innerHTML = taipeiTimeZone.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let newyorkElement = document.querySelector("#new-york");
  if (newyorkElement) {
    let newyorkDateElement = newyorkElement.querySelector(".date");
    let newyorkTimeElement = newyorkElement.querySelector(".time");
    let newyorkTimeZone = moment().tz("America/New_York");

    newyorkDateElement.innerHTML = newyorkTimeZone.format("MMMM Do YYYY");
    newyorkTimeElement.innerHTML = newyorkTimeZone.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let kingstownElement = document.querySelector("#kingstown");
  if (kingstownElement) {
    let kingstownDateElement = kingstownElement.querySelector(".date");
    let kingstownTimeElement = kingstownElement.querySelector(".time");
    let kingstownTimeZone = moment().tz("America/St_Vincent");

    kingstownDateElement.innerHTML = kingstownTimeZone.format("MMMM Do YYYY");
    kingstownTimeElement.innerHTML = kingstownTimeZone.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTimeZone = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonTimeZone.format("MMMM Do YYYY");
    londonTimeElement.innerHTML = londonTimeZone.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let samoaElement = document.querySelector("#samoa");
  if (samoaElement) {
    let samoaDateElement = samoaElement.querySelector(".date");
    let samoaTimeElement = samoaElement.querySelector(".time");
    let samoaTimeZone = moment().tz("US/Samoa");

    samoaDateElement.innerHTML = samoaTimeZone.format("MMMM Do YYYY");
    samoaTimeElement.innerHTML = samoaTimeZone.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimezone = event.target.value;
  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let citiesElement = document.querySelector("#cities");
  let cityTime = moment().tz(cityTimezone);
  citiesElement.innerHTML = `
    <div class="city cityselected">
        <div>
            <h2>${cityName}</h1>
            <div class="date">${cityTime.format("dddd Do YYYY")}</div>  
        </div>
        <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format(
    "A"
  )}</small></div>
    </div>`;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);

updateTime();
setInterval(updateTime, 1);
setInterval(updateCurrent, 1);
