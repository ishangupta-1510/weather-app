import React, { useState } from "react";

const LocationInput = ({ onLocationSubmit }) => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLocationSubmit({ latitude, longitude });
    setLatitude("");
    setLongitude("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-4">
      <input
        type="text"
        placeholder="Latitude"
        value={latitude}
        onChange={(e) => setLatitude(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-2"
        required
      />
      <input
        type="text"
        placeholder="Longitude"
        value={longitude}
        onChange={(e) => setLongitude(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-2"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Get Weather
      </button>
    </form>
  );
};

export default LocationInput;
