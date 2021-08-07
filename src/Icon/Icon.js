import firstimage from "../icons/1.png"
import secondimage from "../icons/6.png"
import thirdimage from "../icons/7.png"
import fourthimage from "../icons/14.png"
import fifthimage from "../icons/18.png"
const imagesArr = [firstimage,secondimage,thirdimage,fourthimage, fifthimage]

export default function Icon (props){

    return (
        <img src={imagesArr[props.iconnum]} />
    )
}