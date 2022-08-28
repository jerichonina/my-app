import React, { useState } from "react";
import axios from "axios";
import CurrentDate from "./CurrentDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";
import { FaSistrix } from "react-icons/fa";
import { FaTemperatureLow } from "react-icons/fa";
import { FaWind } from "react-icons/fa";
import { FaWater } from "react-icons/fa";
import { FaCompress } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";


export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function submitResponse(response) {
    console.log(response.data);

    setWeatherData({
      ready: true,
      coordindates: response.data.coord,
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      feels_like: response.data.main.feels_like,
      pressure: response.data.main.pressure,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "fc81915063c1c948e13c1b9f6ba1e112";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(submitResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="Weather">
            <div className="search-form">
              <form className="search-bar" onSubmit={handleSubmit}>
                <input
                  className="city-input"
                  placeholder="Enter your city"
                  autoFocus="on"
                  onChange={handleCityChange}
                />
                <button className="search-button">
                  <strong className="search-icon">
                    <FaSistrix size="2em" color="grey" />
                  </strong>
                </button>
              </form>
              <div className="date">
                <CurrentDate date={weatherData.date} /> (GMT+8)
              </div>
            </div>

            <h1>
              <div className="city">{weatherData.city}</div>
              <span className="weather-description">
                {weatherData.description}
              </span>
            </h1>

            <h2>
              <div className="weather-icon">
                <WeatherIcon code={weatherData.icon} size={60} />
              </div>
              <WeatherTemperature celsius = {weatherData.temperature} />
            </h2>

            <div className="weather-details">
              <div className="row g-3">
                <div className="col-6 feels-like-temp">
                  <div className="p-0.8 border">
                    <strong>Feels Like</strong>
                    <br />
                    <FaTemperatureLow />{" "}
                    <span className="feels_like">
                      {" "}
                      {Math.round(weatherData.feels_like)}°C
                    </span>
                  </div>
                </div>

                <div className="col-6 humidity-level">
                  <div className="p-0.8 border">
                    <strong>Humidity</strong>
                    <br />
                    <FaWater />
                    <span className="humidity"> {weatherData.humidity}%</span>
                  </div>
                </div>

                <div className="col-6 pressure-index">
                  <div className="p-0.8 border">
                    <strong>Pressure</strong>
                    <br />
                    <FaCompress />
                    <span className="pressure"> {weatherData.pressure}</span>
                  </div>
                </div>

                <div className="col-6 wind-speed">
                  <div className="p-0.8 border">
                    <strong>Wind</strong>
                    <br />
                    <FaWind />{" "}
                    <span className="wind">
                      {Math.round(weatherData.wind)} km/h
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <h3>
              <div className="forecast-header">
                <span>
                  <i className="fa-solid fa-calendar-days fa-sm"></i>
                </span>
                <FaCalendar /> 6-Day Forecast
              </div>
              <hr />
              <div className="weatherForecast"></div>
              <WeatherForecast coordinates = {weatherData.coordindates} />
            </h3>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
