import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDaily (props) {
    function day() {
        let date = new Date(props.daily.dt*1000);
        let day = date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

        return days[day];
    }

    return (
      <div>
        <div className="WeatherForecast-daily">{day()}</div>
        <WeatherIcon code={props.daily.weather[0].icon} size={30} />
        <div>
          <div className="WeatherForecast-temperature-max">
            H: {Math.round(props.daily.temp.max)}°
          </div>
          <div className="WeatherForecast-temperature-min">
            L: {Math.round(props.daily.temp.min)}°
          </div>
        </div>
      </div>
    );
}