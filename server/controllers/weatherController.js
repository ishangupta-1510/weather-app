const axios = require("axios");
const geocodingService = require("../services/geocodingService");
const weatherService = require("../services/weatherService");

const getWeather = async (req, res) => {
  try {
    const { latitude, longitude } = req.body;
    const locationName = await geocodingService.getLocationName(
      latitude,
      longitude
    );
    const weatherData = await weatherService.getWeatherData(
      latitude,
      longitude
    );
    const response = {
      location: locationName,
      temperature: weatherData.temperature,
      conditions: weatherData.conditions,
    };
    res.json(response);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = getWeather;
