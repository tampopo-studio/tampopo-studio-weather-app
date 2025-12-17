function showTemperature(response) {
  let temperatureToDisplay = document.querySelector("#temperature");
  let newTemperature = response.data.temperature.current;
  let cityToDisplay = document.querySelector("#city-name");

  cityToDisplay.innerHTML = response.data.city;

  temperatureToDisplay.innerHTML = Math.round(newTemperature);
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
