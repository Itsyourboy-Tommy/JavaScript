const key = "fe7c8ded0ef864773085abd3b591f72d"
const url = "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=fe7c8ded0ef864773085abd3b591f72d"

async function check(){
     const response = await fetch(url);
     var data = await response.json();

     console.log(data);

     const temp = data.main.temp - 273.15;
     
     document.querySelector(".temp").innerHTML = temp += "°C"
     document.querySelector(".humidity").innerHTML = data.main.humidity += "%"
     document.querySelector(".windspeed").innerHTML = data.wind.speed += "km/h"
     document.querySelector(".precipitation").innerHTML = data.rain["1h"] += "%"
     document.querySelector(".description").innerHTML = data.weather[0].description
};

check()