import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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