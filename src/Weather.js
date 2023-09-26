// src/Weather.js

import React, { useState } from 'react';

function Weather() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const getWeatherData = () => {
    // Simulate weather data for different cities (you can add more)
    const weatherInfo = {
      London: { temperature: '18°C', description: 'Cloudy' },
      NewYork: { temperature: '24°C', description: 'Sunny' },
      Paris: { temperature: '22°C', description: 'Partly Cloudy' },
      Tokyo: { temperature: '26°C', description: 'Rainy' },
    };

    const data = weatherInfo[city];
    if (data) {
      setWeatherData(data);
    } else {
      setWeatherData(null);
    }
  };

  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeatherData}>Get Weather</button>
      {weatherData && (
        <div>
          <h2>Weather in {city}</h2>
          <p>Temperature: {weatherData.temperature}</p>
          <p>Weather: {weatherData.description}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
