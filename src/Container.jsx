import { useEffect, useState } from "react";

import Styles from "./styles/container.module.css";
import { getImage } from "./GetImage";
function Container({ location,setLoading }) {
    useEffect(() => {
        getWeather();
    }, [location]);
    const [weeklyWeather, setWeeklyWeather] = useState([]);
    
    // const url = 'http://localhost:3000/timelines';
    const url = `https://api.tomorrow.io/v4/weather/forecast?location=${location.lat},${location.lon}&apikey=M17XNzCJQ3IJgHdgU9mACASsa8bTUJ0y`;
    
    function getDate(date){
        return new Date(date).toLocaleDateString();
    }
    async function getWeather() {
        
        try {
            setLoading(true);
            
            const response = await fetch(url);
            const result = await response.json();
            setWeeklyWeather(result.timelines.daily);
            console.log(result.timelines.daily);
            setLoading(false);
        }
        catch (err) {
            alert(err.message);
        }

    }
    return (
        <>
            {
                weeklyWeather && <div className={Styles.container}>
                    
                    
                    {
                        weeklyWeather && <>
                            {
                                weeklyWeather.map((day, index) =>

                                    <div className={Styles.cards} key={index}>
                                        <img src={getImage(day.values.weatherCodeMax)} alt="weather image" />
                                        <span>{getDate(day.time)}</span>
                                        <div className={Styles.weather}>
                                            <div className={Styles.rain}>
                                                <span>rain</span>
                                                <span>{day.values.precipitationProbabilityMax}%</span>
                                            </div>
                                            <div className={Styles.humidity}>
                                                <span>humidity</span>
                                                <span>{day.values.humidityAvg}%</span>
                                            </div>
                                            <div className={Styles.temp}>
                                                <span>
                                                    temp
                                                </span>
                                                <span>
                                                    {day.values.temperatureMin}°C-{day.values.temperatureMax}°C
                                                </span>
                                            </div>
                                            <div className={Styles.wind}>
                                                <span>wind speed</span>
                                                <span>{day.values.windSpeedAvg} m/s</span>
                                            </div>

                                        </div>
                                    </div>

                                )
                            }
                        </>
                    }
                    
                </div>
            }
        </>
    )
}
export default Container;