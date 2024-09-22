import React, { useState } from "react";
import { SearchIcon } from '@heroicons/react/solid';

const CitySearch = ({ setCity }) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);

  const predefinedCities = [
    "New York", "Los Angeles", "Chicago", "Houston", "Miami", 
    "San Francisco", "London", "Tokyo", "Paris", "Sydney"
  ];

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setFilteredCities(value ? predefinedCities.filter(city => 
      city.toLowerCase().includes(value.toLowerCase())) : []);
  };

  const handleCitySelect = (city) => {
    setInputValue(city);
    setFilteredCities([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setCity(inputValue.trim());
      setFilteredCities([]);
    }
  };

  return (
    <div className="relative w-full max-w-xs mb-4">
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter city"
          className="w-full p-2 rounded-l-lg text-gray-900 outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600">
          <SearchIcon className="h-5 w-5" />
        </button>
      </form>
      {filteredCities.length > 0 && (
        <ul className="absolute left-0 right-0 bg-gray-800 text-white rounded-b-lg shadow-lg max-h-48 overflow-y-auto z-10">
          {filteredCities.map((city, index) => (
            <li
              key={index}
              onClick={() => handleCitySelect(city)}
              className="p-2 hover:bg-gray-700 cursor-pointer"
            >
              {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CitySearch;
