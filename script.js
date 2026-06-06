
const result = document.getElementById("result");
const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

function getWeather() {
    const city = cityInput.value.trim();

    if (city === "") {
        result.innerHTML = "<p>Please enter a city name</p>";
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(res => res.json())
        .then(data => {

            // check API response
            if (data.cod !== 200) {
                result.innerHTML = "<p>City not found</p>";
                return;
            }

            result.innerHTML = `
                <h2>${data.name}</h2>
                <p>🌡️ Temp: ${data.main.temp}°C</p>
                <p>💧 Humidity: ${data.main.humidity}%</p>
                <p>☁️ Weather: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            result.innerHTML = "<p>Something went wrong</p>";
            console.log(error);
        });
}

searchBtn.addEventListener("click", getWeather);
cityInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        getWeather();
    }
});