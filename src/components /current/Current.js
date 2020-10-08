import React from 'react';
import './current.css';

const Current = (props) => {
  const {data} = props;

  return (
    <div>
      <h1>Current Weather</h1>
      <p>{data.name}, {data.sys.country}</p>
      <p>Temperature: {data.main.temp} F</p>
      <p>Humidity: {data.main.humidity}</p>
      <p>Pressure: {data.main.pressure}</p>
      <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt='weather icon'/>
      <p>Condition: {data.weather[0].description}</p>
    </div>
  ) 
}

export default Current;
