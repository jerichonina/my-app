import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    function submitResponse (response) {
        console.log(response.data);
    }
 

    let apiKey = "fc81915063c1c948e13c1b9f6ba1e112";
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl= `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(submitResponse);

    return (
        <div className = "WeatherForecast">
            <div className = "row">
                <div className ="col">
                    <div className = "WeatherForecast-daily">
                        Sun
                    </div> 
                   <WeatherIcon code ="01d" size={30} />
                   <div>
                       <div className = "WeatherForecast-temperature-max">
                           H: 30°
                       </div>
                       <div className ="WeatherForecast-temperature-min"> 
                           L: 23°
                       </div>
                   </div>
                </div>
                <div className ="col">
                    <div className = "WeatherForecast-daily">
                        Sun
                    </div> 
                   <WeatherIcon code ="01d" size={30} />
                   <div>
                       <div className = "WeatherForecast-temperature-max">
                           H: 30°
                       </div>
                       <div className ="WeatherForecast-temperature-min"> 
                           L: 23°
                       </div>
                   </div>
                </div>
                <div className ="col">
                    <div className = "WeatherForecast-daily">
                        Sun
                    </div> 
                   <WeatherIcon code ="01d" size={30} />
                   <div>
                       <div className = "WeatherForecast-temperature-max">
                           H: 30°
                       </div>
                       <div className ="WeatherForecast-temperature-min"> 
                           L: 23°
                       </div>
                   </div>
                </div>
                <div className ="col">
                    <div className = "WeatherForecast-daily">
                        Sun
                    </div> 
                   <WeatherIcon code ="01d" size={30} />
                   <div>
                       <div className = "WeatherForecast-temperature-max">
                           H: 30°
                       </div>
                       <div className ="WeatherForecast-temperature-min"> 
                           L: 23°
                       </div>
                   </div>
                </div>
                <div className ="col">
                    <div className = "WeatherForecast-daily">
                        Sun
                    </div> 
                   <WeatherIcon code ="01d" size={30} />
                   <div>
                       <div className = "WeatherForecast-temperature-max">
                           H: 30°
                       </div>
                       <div className ="WeatherForecast-temperature-min"> 
                           L: 23°
                       </div>
                   </div>
                </div>
            </div>
        </div>
    );
}