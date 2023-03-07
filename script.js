let weather = {
  "apiKey": "5ccc8781ab6650cea6d75de46af90cf4",
  fetchWeather: function (city) {
    console.log(city)
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" 
      + city 
      + "&units=metric&appid=" 
      + this.apiKey
    ).then((response) => response.json())
    .then((data) => this.displayWeather(data));
  },
  displayWeather: function(data) {
    console.log(data)
    const { name } = data;
    const { description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, description, temp, humidity, speed);
    document.querySelector(".city").innerText = "The Weather in " + name;
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humid").innerText = "Humidity:  " + humidity + "%";
    document.querySelector(".wind-speed").innerText = "Wind Speed: " + speed + "km/h";
  
  },
    search: function() {
    this.fetchWeather(document.querySelector("#searchInput").value)
    }
};

function test(){
    let simple= document.querySelector("#gregtest")
  console.log("test",simple)
 // .addEventListener("click", function(){
 // weather.search();
//});
}
test()

weather.fetchWeather("Amsterdam");


let saved = [];
const addHome = (ev) =>{
  ev.preventDefault();

  let home = {
  id: Date.now(),
  saved: document.getElementById("saved").value
}

saved.push(home);
document.forms[0];
console.warn('added' , {saved} );
displayNewLocations()
}

document.addEventListener('DOMContentLoaded', ()=>{
document.getElementById('home').addEventListener('click', addHome);
});

function displayNewLocations(){
  let newLocation = document.getElementById("newLocation")
  let item = saved [saved.length - 1]
 let div =  document.createElement("div")
 console.log(item)
}