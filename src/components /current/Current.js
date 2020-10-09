import React from 'react';
import './current.css';

const Current = (props) => {
   const {data}= props

  return (
    <div className='currentWeather'>
      <h1>Current Weather</h1>
      <h3>{data.name}, {data.sys.country}</h3>
      <p><b>Temperature:</b> {data.main.temp} ˚F</p>
      <p><b>Humidity:</b> {data.main.humidity}</p>
      <p><b>Pressure:</b> {data.main.pressure}</p>
      <img className='icon' src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt='weather icon'/>
      <p><b>Condition:</b> {data.weather[0].description}</p>
    </div>
  ) 
}

export default Current;
