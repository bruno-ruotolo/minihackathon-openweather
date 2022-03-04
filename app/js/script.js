let latitude = null;
let longitude = null;

function callApiWeather() {
  const promise = axios
    .get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=80a839bb2d8a77c600954c9c171bd4a5`);

  promise.then((response) => createHTML(response));
}

function createHTML(response) {
  const wheatherInformation = document.querySelector(".weather");
  const cityName = response.data.name;
  console.log(cityName);
  console.log(response.data)
  const cityTemperature = response.data.main.temp;

  wheatherInformation.innerHTML = `
      <h2>${cityName}</h2>
    <div>
      <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="" />
      <p>${cityTemperature}ºC</p>
    </div>
    `;
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  latitude = parseInt(position.coords.latitude);
  longitude = parseInt(position.coords.longitude);
  callApiWeather();
}

getLocation();