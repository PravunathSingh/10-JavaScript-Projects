const apiKey = "030f82636cf3e54bf49da9a107caf3ba";
const url = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

const form = document.getElementById("form");
const input_search = document.getElementById("search");
const main = document.getElementById("main");

async function getWeatherByCity(city){
    const result = await fetch (url(city), {
        origin: "cors"
    });
    const resultData = await result.json();

    console.log(resultData, kelvinToCelsius(resultData.main.temp)); 

    addWeather(resultData);
}

function addWeather(data) {
    const temp = kelvinToCelsius(data.main.temp);

    const weather = document.createElement("div");
    weather.classList.add("weather");

    weather.innerHTML = `
        <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /> ${temp}°C <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /></h2>
        <small>${data.weather[0].main}</small>
    `;

    // cleanup
    main.innerHTML = "";

    main.appendChild(weather);
}

getWeatherByCity();

function kelvinToCelsius(K){
    return (K - 273.15).toFixed(2);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const city = search.value;

    if (city) {
        getWeatherByCity(city);
    }
});

