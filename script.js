// Get the box where we will show weather information
const result = document.getElementById("result");

// Get the input field where user types city name
const cityInput = document.getElementById("cityInput");

// Get the search button
const searchBtn = document.getElementById("searchBtn");

// This function runs when user clicks Search
function getWeather() {

    // Get what user typed and remove extra spaces
    const city = cityInput.value.trim();

    // If user didn't type anything
    if (city === "") {
        result.innerHTML = "<p>Please enter a city name</p>";
        return; // Stop the function here
    }

    // Show loading message while waiting for API
    result.innerHTML = "<p>Loading... ⏳</p>";

    // Create API URL
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    // Ask weather API for data
    fetch(url)

        // Convert API response into JavaScript object
        .then(res => res.json())

        // Now we can use the weather data
        .then(data => {

            // If city doesn't exist
            if (data.cod !== 200) {
                result.innerHTML = "<p>City not found ❌</p>";
                return;
            }

            // Get weather type
            // Examples:
            // Clear
            // Clouds
            // Rain
            const weather = data.weather[0].main;

            // Empty box for icon
            let icon = "";

            // Decide which icon to show
            if (weather === "Clear") {
                icon = "☀️";
            }
            else if (weather === "Clouds") {
                icon = "☁️";
            }
            else if (weather === "Rain") {
                icon = "🌧️";
            }
            else if (weather === "Snow") {
                icon = "❄️";
            }
            else if (weather === "Thunderstorm") {
                icon = "⛈️";
            }
            else {
                // Default icon if weather type is something else
                icon = "🌍";
            }

            // Show weather on screen
            result.innerHTML = `
                <h2>${icon} ${data.name}</h2>
                <p>🌡️ Temp: ${data.main.temp}°C</p>
                <p>💧 Humidity: ${data.main.humidity}%</p>
                <p>☁️ Weather: ${data.weather[0].description}</p>
            `;
        })

        // If something breaks (internet/API issue)
        .catch(error => {
            result.innerHTML = "<p>Something went wrong ❌</p>";

            // Show error in console for developers
            console.log(error);
        });
}

// When user clicks Search button
searchBtn.addEventListener("click", getWeather);

// When user presses Enter key inside input box
cityInput.addEventListener("keydown", (e) => {

    // Check if Enter key was pressed
    if (e.key === "Enter") {
        getWeather();
    }
});