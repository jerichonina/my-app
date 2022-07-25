import React from "react";
import "./Weather.css";

let weatherData = {
  city: "Hong Kong",
  date: "Saturday June 25 13:50",
  description: "Sunny",
  imgUrl: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg",
  cityTemp: "29",
  feelslike: "38",
  humidity: "75",
  sunray: "10",
  wind: "4",
};

export default function Weather() {
  return (
    <div className="container">
      <div className="weather-app-wrapper">
        <div className="Weather">
          <div className="search-form">
            <form className="search-bar">
              <input className="city-input" placeholder="Enter your city" />
              <button className="search-button"></button>
            </form>
            <div className="date">{weatherData.date} (UTC+8) </div>
          </div>

          <h1>
            <div className="city">{weatherData.city}</div>
            <span className="weather-description">
              {weatherData.description}
            </span>
          </h1>

          <h2>
            <img
              src={weatherData.imgUrl}
              alt="weather-widget"
              className="weather-widget"
            />
            <span className="temperature">{weatherData.cityTemp}</span>
            <span className="temperature-icon">
              <a href="/">°C </a>|<a href="/">°F </a>
            </span>
          </h2>

          <div className="weather-details">
            <div className="row g-3">
              <div className="col-6 feels-like-temp">
                <div className="p-1 border">
                  <strong>Feels Like</strong>
                  <br />
                  <span className="icon1">
                    <i className="fa-solid fa-temperature-half fa-lg"></i>
                  </span>
                  <span className="feels-like"></span>
                  {weatherData.feelslike}°C
                </div>
              </div>

              <div className="col-6 humidity-level">
                <div className="p-1 border">
                  <strong>Humidity</strong>
                  <br />
                  <span className="icon2">
                    <i className="fa-solid fa-droplet fa-lg"></i>
                  </span>
                  <span className="humidity"></span>
                  {weatherData.humidity}%
                </div>
              </div>

              <div className="col-6 UV-index">
                <div className="p-1 border">
                  <strong>UV Index</strong>
                  <br />
                  <span className="icon3">
                    <i className="fa-solid fa-sun fa-lg"></i>
                  </span>
                  <span className="sunray"></span>
                  {weatherData.sunray}
                </div>
              </div>

              <div className="col-6 wind-speed">
                <div className="p-1 border">
                  <strong>Wind</strong>
                  <br />
                  <span className="icon4">
                    <i className="fa-solid fa-wind fa-lg"></i>
                  </span>
                  <span className="wind"></span>
                  {weatherData.wind} km/h
                </div>
              </div>
            </div>
          </div>

          <h3>
            <div className="forecast-header">
              <span>
                <i className="fa-solid fa-calendar-days fa-sm"></i>
              </span>
              6-Day Forecast
            </div>
            <hr />
            <div className="weatherForecast"></div>
          </h3>
        </div>
      </div>
        <small className="coder">
          <a
            href="https://github.com/jerichonina/my-weather-app/tree/main"
            target="blank"
          >
            Open source code {" "}
          </a> 
            Jericho Li 👩🏻‍💻
          <div>
            Animated weather icons designed  by {" "}
            <a href="https://bas.dev" target="blank">
              Bas Milius.
            </a>
          </div>
        </small>
    </div>
  );
}
