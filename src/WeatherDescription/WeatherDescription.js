import { useEffect, useState } from "react";
import "./WeatherDescription.css";


export default function WeatherDescription (props){
    const [forecasts, setForecasts] = useState({ temperature: "" });
    console.log(forecasts)
    
    useEffect(() => {
        fetch('https://netcraft2.s3-eu-west-1.amazonaws.com/weather.json')
        .then(res => res.json())
        .then(data => setForecasts(data))
        
        


    }, []);
    

    return (
        <span className = "container">
            <span className = "weatherdescription">{props.temp + "°C "}</span><span calssName = "description"> {" " + props.desc}</span>
        </span>
    )
        

}