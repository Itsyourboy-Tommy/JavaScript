const date = new Date();

const key = "&APPID=fe7c8ded0ef864773085abd3b591f72d"
const url = "https://api.openweathermap.org/data/2.5/weather?q="

const searchvalue = document.querySelector(".searrch")
const searchbutton = document.querySelector(".bar")
const weather = document.querySelector(".weather_image")

async function check(city){
     const response = await fetch(url + city + key);
     var data = await response.json();

     console.log(data);

     console.log(date.getHours());
     
     var time = date.getHours();

     var temp = data.main.temp - 273.15;
     var ar = temp.toFixed(2)

     var feels = data.main.feels_like - 273.15;
     var feel = Math.round(feels);

     document.querySelector(".location").innerHTML = data.name
     document.querySelector(".temp").innerHTML = ar += "°C"
     document.querySelector(".humidity").innerHTML = data.main.humidity += "%"
     document.querySelector(".windspeed").innerHTML = data.wind.speed += "km/h"
     try{
          document.querySelector(".precipitation").innerHTML = data.rain["1h"] += "%"
     }catch{
          document.querySelector(".precipitation").innerHTML = "0%"
     }
     document.querySelector(".description").innerHTML = data.weather[0].description
     document.querySelector(".feels_like").innerHTML =  "Feels Like: " + feel +"°C"

     if(time > 6){
          document.querySelector(".under").innerHTML = "This Morning"
     }else if(time > 12){
          document.querySelector(".under").innerHTML = "This "    
     }else if(time > 17){
          document.querySelector(".under").innerHTML = "Tonight"
     }else{
          document.querySelector(".under").innerHTML = "Midnight"
     }
     
     weather.src = "images/" + data.weather[0].main + ".png";

     document.querySelector(".weather").style.display = "block"
};

searchbutton.addEventListener("click", () => {
     check(searchvalue.value);
})

var input = document.querySelector(".searrch");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.querySelector(".bar").click();
  }
});