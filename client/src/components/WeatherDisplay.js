import React from "react";

const WeatherDisplay = ({ location, temperature, conditions, image }) => {
  return (
    <div className="bg-white p-4 rounded shadow flex">
      <div>
        <h2 className="text-xl font-semibold mb-4">Current Weather</h2>
        <p>
          <span className="font-semibold">Location:</span> {location}
        </p>
        <p>
          <span className="font-semibold">Temperature:</span> {temperature} °C
        </p>
        <p>
          <span className="font-semibold">Conditions:</span> {conditions}
        </p>
      </div>
      <div className="flex-1 ml-4">
        <img className="h-full" src={image} alt="Weather Icon" />
      </div>
    </div>
  );
};

export default WeatherDisplay;
