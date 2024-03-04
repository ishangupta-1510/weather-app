import React from "react";

const WeatherDisplay = ({ location, temperature, conditions, image }) => {
  return (
    <div className="bg-white p-6 rounded shadow-lg flex items-center">
      <div className="flex-shrink-0 mr-6">
        <img className="h-20 w-20" src={image} alt="Weather Icon" />
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-2">Current Weather</h2>
        <p className="text-gray-700">
          <span className="font-semibold">Location:</span> {location}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Temperature:</span> {temperature} °C
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Conditions:</span> {conditions}
        </p>
      </div>
    </div>
  );
};

export default WeatherDisplay;
