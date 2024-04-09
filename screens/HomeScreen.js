import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import SearchBar from '../components/SearchBar';
import { fetchWeatherData } from '../utils/Api';
import weatherIcons from '../utils/Icons';

const HomeScreen = () => {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [error, setError] = useState(null);

  // Function to fetch weather data
  const handleSearch = async (city) => {
    try {
      const data = await fetchWeatherData(city); 
      setWeatherInfo(data);
      setError(null); 
    } catch (err) {
      setError(err.message);
      setWeatherInfo(null); 
    }
  };

  // UseEffect to fetch weather data for Calgary on component mount
  // set the main page to Calgary
  useEffect(() => {
    handleSearch('Calgary');
  }, []);

  return (
    <ImageBackground source={require('../assets/night.jpg')} style={{ flex: 1, width: '100%', height: '100%'  }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <SearchBar onSearch={handleSearch} />
        {error && <Text style={{ color: '#fff', fontWeight: 'bold' }}>Error: {error}</Text>}
        {weatherInfo && (
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 80, color: '#fff', fontWeight: 'bold' }}> {weatherInfo.main.temp}°C</Text>
            {weatherInfo.weather[0].main in weatherIcons ? React.cloneElement(weatherIcons[weatherInfo.weather[0].main], { size: 100, marginBottom: 90, color: '#fff' }) : null}
            <View style={{ marginTop: 10 }}>
              <View style={{ borderWidth: 1, borderColor: '#fff', padding: 10, marginBottom: 10, backgroundColor: 'rgba(0, 0, 0, 0.6)', borderRadius: 10 }}>
                <Text style={{fontSize: 20,  color: '#fff', fontWeight: 'bold' }}>Description: {weatherInfo.weather[0].description}</Text>
              </View>
              <View style={{ borderWidth: 1, borderColor: '#fff', padding: 10, marginBottom: 10, backgroundColor: 'rgba(0, 0, 0, 0.6)', borderRadius: 10 }}>
                <Text style={{ color: '#fff', fontWeight: 'bold' }}>Wind Speed: {(weatherInfo.wind.speed * 3.6).toFixed(2)} km/h</Text>
              </View>
              <View style={{ borderWidth: 1, borderColor: '#fff', padding: 10, marginBottom: 10, backgroundColor: 'rgba(0, 0, 0, 0.6)', borderRadius: 10 }}>
                <Text style={{ color: '#fff', fontWeight: 'bold' }}>Humidity: {weatherInfo.main.humidity}%</Text>
              </View>
              <View style={{ borderWidth: 1, borderColor: '#fff', padding: 10, marginBottom: 10, backgroundColor: 'rgba(0, 0, 0, 0.6)', borderRadius: 10 }}>
                <Text style={{ color: '#fff', fontWeight: 'bold' }}>Pressure: {(weatherInfo.main.pressure / 10).toFixed(2)} kPa</Text>
              </View>
            </View>
          </View>
        )}
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;