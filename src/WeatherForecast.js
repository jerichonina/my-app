import React, { useState }from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDaily from "./WeatherForecastDaily";

export default function WeatherForecast(props) {
    let [display, setDisplay] = useState(false);
    let [forecast,setForecst] = useState(null);

    function submitResponse (response) {
        setForecst(response.data.daily);
        setDisplay(true);
    }
 
    if (display) {
        console.log(forecast)
        return (
            <div className = "WeatherForecast">
                <div className = "row">
                    <div className ="col">
                        <WeatherForecastDaily  daily={forecast[0]} />
                    </div>
                </div>
            </div>
            );
        } else {
            let apiKey = "fc81915063c1c948e13c1b9f6ba1e112";
            let lon = props.coordinates.lon;
            let lat = props.coordinates.lat;
            let apiUrl= `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
        
            axios.get(apiUrl).then(submitResponse);
    
            return null;
        }
}