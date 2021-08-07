
import './Weekday.css'

export default function Weekday (props){
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wedensday" , "Thursday", "Friday", "Saturday"]


    return(

        <div className = "weekday">
            <strong>{weekDays[props.daynum]}</strong>
        </div>

    )







}