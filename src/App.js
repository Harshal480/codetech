import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const fetchWeather = async () => {
    const apiKey = "087ab178dcc548d08aa81038250901"; // Replace with your actual WeatherAPI key
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    try {
      const response = await axios.get(url);
      console.log("WeatherAPI Response:", response.data);

      // Update state with weather data
      setWeather({
        name: response.data.location.name,
        description: response.data.current.condition.text,
        temp: response.data.current.temp_c,
        humidity: response.data.current.humidity,
        wind: response.data.current.wind_kph,
      });

      setError("");
    } catch (err) {
      console.error("Error Fetching Data:", err);
      if (err.response && err.response.status === 400) {
        setError("City not found. Please try again.");
      } else {
        setError("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="App">
      <h1>Weather Dashboard</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather}>Search</button>
      </div>

      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="weather-card">
          <h2>{weather.name}</h2>
          <p>{weather.description}</p>
          <p>Temperature: {weather.temp}°C</p>
          <p>Humidity: {weather.humidity}%</p>
          <p>Wind Speed: {weather.wind} kph</p>
        </div>
      )}
    </div>
  );
}

export default App;
