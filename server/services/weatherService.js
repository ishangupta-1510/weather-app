const axios = require("axios");

exports.getWeatherData = async (latitude, longitude) => {
  try {
    const weatherApiUrl = `http://api.weatherapi.com/v1/current.json?key=e22130a47ff149a9bb0164323240403&q=${latitude},${longitude}`;
    const response = await axios.get(weatherApiUrl);
    const temperature = response.data.current.temp_c;
    const conditions = response.data.current.condition;
    // console.log(response);
    // console.log(conditions);
    return { temperature, conditions };
  } catch (error) {
    throw new Error(`Error fetching weather data: ${error.message}`);
  }
};

exports.getWeatherDataForWebSocket = async () => {
  try {
    // Simulate weather data update
    const temperature = Math.floor(Math.random() * 50) + 1;
    const conditions = "Sunny";
    return { temperature, conditions };
  } catch (error) {
    throw new Error(`Error fetching weather data: ${error.message}`);
  }
};
