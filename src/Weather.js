import React, {useState} from "react";
import axios from "axios";
import CurrentDate from "./CurrentDate";
import { FaSistrix } from "react-icons/fa";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready : false});
  function submitResponse(response){
    console.log(response.data);

     setWeatherData({
       ready:true,
       description:response.data.weather[0].description,
       temperature: response.data.main.temp,
       date: new Date(response.data.dt*1000),
       wind: response.data.wind.speed,
       city: response.data.name,
       humidity: response.data.main.humidity,
       feels_like:response.data.main.feels_like,
       pressure:response.data.main.pressure,
       imgUrl: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg",
     });
  }

  if (weatherData.ready) {
return (
  <div className="container">
    <div className="weather-app-wrapper">
      <div className="Weather">
        <div className="search-form">
          <form className="search-bar">
            <input
              className="city-input"
              placeholder="Enter your city"
              autoFocus="on"
            />
            <button className="search-button">
              <strong className="search-icon">
                <FaSistrix />
              </strong>
            </button>
          </form>
          <div className="date">
            <CurrentDate date={weatherData.date} />
          </div>
        </div>

        <h1>
          <div className="city">{weatherData.city}</div>
          <span className="weather-description">{weatherData.description}</span>
        </h1>

        <h2>
          <img
            src={weatherData.imgUrl}
            alt="weather-widget"
            className="weather-widget"
          />
          <span className="temperature">
            {Math.round(weatherData.temperature)}
          </span>
          <span className="temperature-icon">
            <span className="celcius-icon">
              <a href="/">°C </a>
            </span>
            | <a href="/">°F </a>
          </span>
        </h2>

        <div className="weather-details">
          <div className="row g-3">
            <div className="col-6 feels-like-temp">
              <div className="p-0.8 border">
                <strong>Feels Like</strong>
                <br />
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
                <span className="humidity"> {weatherData.humidity}%</span>
              </div>
            </div>

            <div className="col-6 pressure-index">
              <div className="p-0.8 border">
                <strong>Pressure</strong>
                <br />
                <span className="pressure"> {weatherData.pressure}</span>
              </div>
            </div>

            <div className="col-6 wind-speed">
              <div className="p-0.8 border">
                <strong>Wind</strong>
                <br />
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
        Open source code{" "}
      </a>
      Jericho Li 👩🏻‍💻
      <div>
        Animated weather icons designed by{" "}
        <a href="https://bas.dev" target="blank">
          Bas Milius.
        </a>
      </div>
    </small>
  </div>
);
  } else {
  const apiKey = "fc81915063c1c948e13c1b9f6ba1e112";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(submitResponse);
  return "Loading...";
  }
}
