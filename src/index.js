function searchEnteredCity(event) {
  event.preventDefault();
  let newCity = document.querySelector("#text-field");
  let cityToDisplay = document.querySelector("#city-name");
  cityToDisplay.innerHTML = newCity.value;
  console.log(cityToDisplay);
}

let city = document.querySelector("#search-form");
city.addEventListener("submit", searchEnteredCity);
