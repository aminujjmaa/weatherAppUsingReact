import React from "react";
import TemperatureToggle from "./TemperatureToggle";

const WeatherDisplay = ({ weatherData, unit, setUnit }) => {
  if (!weatherData) return null;

  const temperature = Math.round(weatherData.main.temp);
  const feelsLike = Math.round(weatherData.main.feels_like);
  const windSpeed = unit === "metric" ? weatherData.wind.speed : (weatherData.wind.speed * 2.237).toFixed(1);
  const unitSymbol = unit === "metric" ? "°C" : "°F";
  const windSpeedUnit = unit === "metric" ? "m/s" : "mph";

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center mb-4 w-full max-w-xl">
      <h2 className="text-2xl font-bold mb-2">{weatherData.name}, {weatherData.sys.country}</h2>
      <p className="text-xl mb-2 capitalize">{weatherData.weather[0].description}</p>
      <div className="flex justify-center items-center mb-4">
        <img
          src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          alt={weatherData.weather[0].description}
          className="h-16 w-16 mx-2"
        />
        <p className="text-5xl font-bold">{temperature}{unitSymbol}</p>
      </div>
      <div className="grid grid-cols-2 gap-2 text-lg">
        <div>Feels like: {feelsLike}{unitSymbol}</div>
        <div>Humidity: {weatherData.main.humidity}%</div>
        <div>Wind Speed: {windSpeed} {windSpeedUnit}</div>
        <div>Pressure: {weatherData.main.pressure} hPa</div>
      </div>
      <TemperatureToggle unit={unit} setUnit={setUnit} />
    </div>
  );
};

export default WeatherDisplay;
