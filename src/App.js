import './App.css';
import Forecast1Day from './Forecast1Day/Forecast1Day';
import { useEffect, useState } from "react";





 function App() {

  const [weatherfeed, setWeatherfeed] = useState([]);
    
  useEffect(() => {
      fetch('https://netcraft2.s3-eu-west-1.amazonaws.com/weather.json')
      .then(res => res.json())
      .then(data => setWeatherfeed(data))
      
      


  }, []);



  return (
    <div className="App">
    {weatherfeed.map(daily => <Forecast1Day day = {daily.day} temp={daily.temperature} desc  = {daily.description}/>)}


{/* 


    
      <Forecast1Day day="0" />
      <Forecast1Day day="1" />
      <Forecast1Day day="2" />
      <Forecast1Day day="3" />
      <Forecast1Day day="4" /> */}
    </div>
  );
}

export default App;
