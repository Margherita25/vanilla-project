function displayTemperature(response) {
  console.log(response.data.main.temp);
}

let apiKey = "0df4dea8166c0fac0b7799785e3aa71b";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
