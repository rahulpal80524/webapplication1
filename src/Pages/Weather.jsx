import React, { useEffect, useState } from 'react';
import './Weather.css';

export default function Weather() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  let [counter, setCounter] = useState(1);
  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const apiKey = '21a27cb187c2476e8e5143133240106';
    fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.current) {
          setWeatherData({
            cityName: data.location.name,
            region: data.location.region,
            country: data.location.country,
            temperature: data.current.temp_c + '°C',
            description: data.current.condition.text,
            icon: data.current.condition.icon,
            humidity: data.current.humidity + '%',
            windSpeed: data.current.wind_kph + ' kph',
            pressure: data.current.pressure_mb + ' mb',
            feelsLike: data.current.feelslike_c + '°C',
            visibility: data.current.vis_km + ' km',
            airQuality: data.current.air_quality
          });
        } else {
          console.error('Error fetching weather data:', data.error.message);
          setWeatherData(null);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setWeatherData(null);
      });
    setCity('');
  };

  let changeCounter =()=>{
    setCounter(counter+1)
  }
   
  useEffect(()=>{
    console.log("welcome to ")
  },[counter])
  return (
    <div className="weather-container">
      {counter}
      <button onClick={changeCounter}>Count</button>
      <h1>Weather App</h1>
      <div className="search-box">
        <input
          type="text"
          value={city}
          onChange={handleInputChange}
          placeholder="Enter city name"
          className="city-input"
        />
        <button onClick={handleSearch} className="search-button">Search</button>
      </div>
      {weatherData && (
        <div className="weather-card">
          <h2>{weatherData.cityName}, {weatherData.region}, {weatherData.country}</h2>
          <img src={weatherData.icon} alt={weatherData.description} />
          <p>Temperature: {weatherData.temperature}</p>
          <p>Condition: {weatherData.description}</p>
          <p>Humidity: {weatherData.humidity}</p>
          <p>Wind Speed: {weatherData.windSpeed}</p>
          <p>Pressure: {weatherData.pressure}</p>
          <p>Feels Like: {weatherData.feelsLike}</p>
          <p>Visibility: {weatherData.visibility}</p>
          <h3>Air Quality</h3>
          <p>CO: {weatherData.airQuality.co}</p>
          <p>NO2: {weatherData.airQuality.no2}</p>
          <p>O3: {weatherData.airQuality.o3}</p>
          <p>SO2: {weatherData.airQuality.so2}</p>
          <p>PM2.5: {weatherData.airQuality.pm2_5}</p>
          <p>PM10: {weatherData.airQuality.pm10}</p>
        </div>
      )}
    </div>
  );
}
