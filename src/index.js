function showTemperature(response) {
  let temperatureToDisplay = document.querySelector("#temperature");
  let newTemperature = response.data.temperature.current;

  let cityToDisplay = document.querySelector("#city-name");
  let descriptionToDisplay = document.querySelector("#description");
  let humidityToDisplay = document.querySelector("#humidity");
  let windSpeedToDisplay = document.querySelector("#wind-speed");
  let newWindSpeed = Math.round(response.data.wind.speed);

  let timeToDisplay = document.querySelector("#time");

  let date = new Date(response.data.time * 1000);
  console.log(date);

  console.log(response.data);

  cityToDisplay.innerHTML = response.data.city;
  timeToDisplay.innerHTML = formatDateAndTime(date);
  windSpeedToDisplay.innerHTML = `${newWindSpeed}KM/H`;
  humidityToDisplay.innerHTML = `${response.data.temperature.humidity}%`;
  descriptionToDisplay.innerHTML = response.data.condition.description;

  temperatureToDisplay.innerHTML = Math.round(newTemperature);

  console.log(timeToDisplay);
}

function formatDateAndTime(date) {
  let year = date.getFullYear();
  let month = 1 + date.getMonth();
  let actualDate = date.getDate();
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (month < 10) {
    month = `0${month}`;
  }
  if (actualDate < 10) {
    actualDate = `0${actualDate}`;
  }

  return `${actualDate}/${month}/${year} ${hours}:${minutes}`;
}

function searchCity(city) {
  let apiKey = "027a944a8237bdeb2dcbfffteb55oca7";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function searchEnteredCity(event) {
  event.preventDefault();
  let newCity = document.querySelector("#text-field");

  searchCity(newCity.value);
}

let city = document.querySelector("#search-form");
city.addEventListener("submit", searchEnteredCity);

searchCity("Tokyo");
