import React, { useState, useEffect } from "react";
import WeatherDisplay from "./components/WeatherDisplay";
import { getWeatherData } from "./services/weatherService";
import handleError from "./utils/errorHandler";
import axios from "axios";

const App = () => {
  const [userLocation, setUserLocation] = useState({
    latitude: "",
    longitude: "",
  });
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          console.error("Error getting user location:", error);
          setError("Failed to get user location. Please enter manually.");
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setError("Geolocation is not supported by this browser.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { latitude, longitude } = userLocation;
    try {
      const response = await axios.post("http://localhost:5000/api/weather", {
        latitude,
        longitude,
      });
      setWeather({
        location: response.data.location,
        temperature: response.data.temperature,
        icon: response.data.conditions.icon,
        text: response.data.conditions.text,
      });
      setLoading(false);
      setError(null);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      handleError(error);
      setLoading(false);
      setError("Failed to fetch weather data. Please try again.");
    }
  };

  return (
    <div className="max-w-lg mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Live Weather App</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded shadow mb-4"
      >
        <input
          type="text"
          placeholder="Latitude"
          value={userLocation.latitude}
          onChange={(e) =>
            setUserLocation({ ...userLocation, latitude: e.target.value })
          }
          className="w-full p-2 border border-gray-300 rounded mb-2"
          required
        />
        <input
          type="text"
          placeholder="Longitude"
          value={userLocation.longitude}
          onChange={(e) =>
            setUserLocation({ ...userLocation, longitude: e.target.value })
          }
          className="w-full p-2 border border-gray-300 rounded mb-2"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? "Fetching..." : "Get Weather"}
        </button>
      </form>

      {error && <div className="text-red-500 mb-4">{error}</div>}

      {weather && (
        <WeatherDisplay
          location={weather.location}
          temperature={weather.temperature}
          conditions={weather.text}
          image={weather.icon}
        />
      )}
    </div>
  );
};

export default App;
