import React, { useState, useEffect } from "react";
import axios from "axios";
import CitySearch from "./components/CitySearch";
import WeatherDisplay from "./components/WeatherDisplay";
import FiveDayForecast from "./components/FiveDayForecast";

const App = () => {
  const [city, setCity] = useState(localStorage.getItem("city") || "New York"); // Default city or from local storage
  const [weatherData, setWeatherData] = useState(null);
  const [fiveDayData, setFiveDayData] = useState(null);
  const [unit, setUnit] = useState(localStorage.getItem("unit") || "metric"); // Default unit or from local storage
  const [error, setError] = useState(null);
  const [isBlinking, setIsBlinking] = useState(false); // For blinking effect

  const apiKey = "bcb667304c7023bf2546c44d9d51739c"; // Replace with your OpenWeather API key

  // Fetch current weather data
  const fetchWeatherData = async (cityName, unitType) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather`,
        {
          params: {
            q: cityName,
            units: unitType,
            appid: apiKey,
          },
        }
      );
      setWeatherData(response.data);
      setError(null);
      // Fetch five-day forecast using coordinates
      fetchFiveDayForecast(response.data.coord, unitType);
    } catch (err) {
      setError("City not found or network issue.");
      setWeatherData(null);
      setFiveDayData(null);
    }
  };

  // Fetch five-day forecast data
  const fetchFiveDayForecast = async (coord, unitType) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast`,
        {
          params: {
            lat: coord.lat,
            lon: coord.lon,
            units: unitType,
            appid: apiKey,
          },
        }
      );
      setFiveDayData(response.data);
      setError(null);
    } catch (err) {
      setError("Could not fetch forecast data.");
      setFiveDayData(null);
    }
  };

  // Handle city search
  const handleCitySearch = (selectedCity) => {
    setCity(selectedCity);
  };

  // Toggle temperature unit
  const toggleUnit = () => {
    const newUnit = unit === "metric" ? "imperial" : "metric";
    setUnit(newUnit);
  };

  // Refresh weather data
  const refreshData = () => {
    setIsBlinking(true);
    fetchWeatherData(city, unit);
    setTimeout(() => {
      setIsBlinking(false);
    }, 1000); // Blinking for 1 second
  };

  // Fetch weather data when city or unit changes
  useEffect(() => {
    fetchWeatherData(city, unit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city, unit]);

  // Save to local storage
  useEffect(() => {
    localStorage.setItem("city", city);
    localStorage.setItem("unit", unit);
  }, [city, unit]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-4 flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-4">Weather App</h1>

      {/* City Search Component */}
      <CitySearch setCity={handleCitySearch} />

      {/* Display Error Message */}
      {error && <p className="text-red-500 mb-4">{error}</p>}

      {/* Current Weather Display */}
      {weatherData && (
        <WeatherDisplay
          weatherData={weatherData}
          unit={unit}
          setUnit={toggleUnit}
        />
      )}

      {/* Five-Day Forecast */}
      {fiveDayData && <FiveDayForecast fiveDayData={fiveDayData} unit={unit} />}

      {/* Refresh Button */}
      <button
        onClick={refreshData}
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Refresh Data
      </button>

    </div>
  );
};

export default App;
