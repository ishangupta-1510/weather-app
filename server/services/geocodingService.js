const axios = require("axios");

// Function to convert coordinates to location name
exports.getLocationName = async (latitude, longitude) => {
  try {
    // Make a request to a geocoding service API
    const apiKey = "YOUR_API_KEY";
    const geocodingApiUrl = `http://api.weatherapi.com/v1/current.json?key=e22130a47ff149a9bb0164323240403&q=${latitude},${longitude}`;
    const response = await axios.get(geocodingApiUrl);
    // Extract location name from the response data
    const locationName =
      response.data.location.name ||
      "error: the free api does not provide location name";

    return locationName;
  } catch (error) {
    // Handle errors
    console.error("Error fetching location data:", error);
    throw new Error("Error fetching location data");
  }
};
//https://geocoding-api.open-meteo.com/v1/search?latitude=23.2599&longitude=77.4126
