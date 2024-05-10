let city = document.getElementById("city")
    temperature = document.getElementById("temperature")
    weather = document.getElementById("weather")
    middleTemperature = document.getElementById("middle-temperature")
    input = document.getElementById("input")
    backgroundImage = document.getElementById("background-image")

let enterKeyCode = 13

let Api = {
    key: "5e6de1d4230c80dbf1e701252b8743da",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}

input.addEventListener("keyup", (event) => {
    if (event.keyCode === enterKeyCode) {
        getWeather(event.target.value)
    }
})

function getWeather(cityName) {
    fetch(`${Api.baseUrl}?q=${cityName}&appid=${Api.key}`)
    .then(res => res.json())
    .then(res => {
        console.log(res)
        city.innerHTML = `${res.name}, ${res.sys.country}`
        temperature.innerHTML = `${Math.round(res.main.temp - 273)} °C`
        middleTemperature.innerHTML = `${Math.round(res.main.temp_max - 273)} °C / ${Math.round(res.main.temp_min - 273)} °C`
        weather.innerHTML = `${res.weather[0].main}`
        if (weather.innerHTML === "Clouds") {
            backgroundImage.src = "img/clouds.jpg"
        }
    })
}
