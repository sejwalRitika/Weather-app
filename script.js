const options = {
  method: "GET",
  header: {
    "openweather-Key": "fb4497f675b2dd48bf57133b027b824a",
    "openweather-Host": "openweathermap.org/current#current_JSON",
  },
};
const getWeather = (city) => {
cityName.innerHTML = city;
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=bengaluru&appid=fb4497f675b2dd48bf57133b027b824a"
  )
    .then((response) => response.json())
    .then((response) => {
      console.log("Check Response of API", response, response.wind.speed);
      temp.innerHTML = response.main.temp;
      temp2.innerHTML = response.main.temp;
      feels_like.innerHTML = response.main.feels_like;
      min_temp.innerHTML = response.main.temp_max;
      max_temp.innerHTML = response.main.temp_max;
      pressure.innerHTML = response.main.pressure;
      humidity.innerHTML = response.main.humidity;
      humidity2.innerHTML = response.main.humidity;
      sunrise.innerHTML = response.sys.sunrise;
      sunset.innerHTML = response.sys.sunset;
      deg.innerHTML = response.wind.deg;
      all.innerHTML = response.clouds.all;
      cod.innerHTML = response.cod;
      lat.innerHTML = response.coord.lat;
      speed.innerHTML = response.wind.speed;
      speed2.innerHTML = response.wind.speed;
      id.innerHTML = response.id;
    })
    .catch((err) => console.error(err));
};
submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});
getWeather("bengaluru");
