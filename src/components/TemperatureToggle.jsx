
import React from "react";

const TemperatureToggle = ({ unit, setUnit }) => {
  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === "metric" ? "imperial" : "metric"));
  };

  return (
    <button
      onClick={toggleUnit}
      className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
    >
      Switch to {unit === "metric" ? "Fahrenheit (°F)" : "Celsius (°C)"}
    </button>
  );
};

export default TemperatureToggle;
