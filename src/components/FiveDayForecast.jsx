import React from "react";

const FiveDayForecast = ({ fiveDayData, unit }) => {
  if (!fiveDayData) return null;

  const unitSymbol = unit === "metric" ? "°C" : "°F";
  const dailyForecast = fiveDayData.list.filter(forecast => forecast.dt_txt.includes("12:00:00"));

  return (
    <div className="w-full max-w-4xl mt-4">
      <h3 className="text-xl font-bold mb-4 text-center">5-Day Forecast</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {dailyForecast.map((day, index) => {
          const date = new Date(day.dt * 1000);
          const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
          const tempMax = Math.round(day.main.temp_max);
          const tempMin = Math.round(day.main.temp_min);
          const description = day.weather[0].description;

          return (
            <div key={index} className="bg-gray-700 p-3 rounded-lg shadow-lg text-center hover:bg-gray-600 transition duration-200">
              <h4 className="font-bold mb-1">{dayName}</h4>
              <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt={description} className="mx-auto mb-1" />
              <p className="text-lg">{tempMax}{unitSymbol} / {tempMin}{unitSymbol}</p>
              <p className="capitalize">{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FiveDayForecast;
