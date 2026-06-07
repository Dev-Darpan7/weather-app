# Weather App 🌦️

A simple weather application built using HTML, CSS, and JavaScript. The app allows users to search for any city and view real-time weather information using the OpenWeather API.

## Features

* Search weather by city name
* Real-time weather data
* Temperature display
* Humidity display
* Weather condition description
* Weather icons based on conditions
* Enter key support
* Error handling for invalid city names
* Loading message while fetching data

## Technologies Used

* HTML
* CSS
* JavaScript
* OpenWeather API
* Git & GitHub

## How It Works

1. User enters a city name.
2. User clicks the Search button or presses Enter.
3. The `getWeather()` function runs.
4. The city name is added to the API URL.
5. `fetch()` sends a request to the OpenWeather API.
6. The API returns weather data.
7. The response is converted into JSON.
8. The app checks if the city exists.
9. A weather icon is selected based on the weather condition.
10. Weather information is displayed on the page.

## JavaScript Concepts Practiced

* Variables (`const`, `let`)
* Functions
* DOM Manipulation
* Event Listeners
* Conditional Statements (`if/else`)
* Fetch API
* Promises (`.then()`)
* JSON Data Handling
* Template Literals
* Error Handling

## Future Improvements

* 5-day weather forecast
* Dark mode
* Geolocation support
* Better weather icons
* Responsive mobile design

