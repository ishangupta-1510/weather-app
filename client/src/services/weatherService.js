import axios from "axios";

const API_BASE_URL = "/api";

export const getWeatherData = async (latitude, longitude) => {
  try {
    const response = await axios.post("http://localhost:5000/weather", {
      latitude,
      longitude,
    });
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching weather data: ${error.message}`);
  }
};
