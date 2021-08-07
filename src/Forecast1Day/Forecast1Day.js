import Weekday from "../Weekday/Weekday"
import Icon from "../Icon/Icon"

import WeatherDescription from "../WeatherDescription/WeatherDescription" 
import './Forecast1Day.css';

export default function Forecast1Day(props){
    return (
    <div className="card" >
        <Weekday daynum={props.day} />
        <Icon iconnum={props.day-2} />
        <WeatherDescription daynum = {props.day} temp={props.temp} desc = {props.desc}/>
        
    </div>
    )



}
