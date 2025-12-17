function searchCity(city) {
  let apiKey = "027a944a8237bdeb2dcbfffteb55oca7";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric
`;
}

function searchEnteredCity(event) {
  event.preventDefault();
  let newCity = document.querySelector("#text-field");
  let cityToDisplay = document.querySelector("#city-name");
  cityToDisplay.innerHTML = newCity.value;
  searchCity(newCity.value);
}

let city = document.querySelector("#search-form");
city.addEventListener("submit", searchEnteredCity);
