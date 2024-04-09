// utils/Api.js
import axios from 'axios';

// Your actual API key should go here in place of 'YOUR_API_KEY'
const API_KEY = 'a74197dc3d8b81c40a6e23493e1506b8';

export const fetchWeatherData = async (location) => {
  try {
    // Update the URL with your actual API key
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`);
    // Added &units=metric to get temperature in Celsius directly
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Area not found');
    }
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error('Area not found');
    }
    console.error(error);
    return null;
  }
};