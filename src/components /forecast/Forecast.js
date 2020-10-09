import React from 'react';
import './forecast.css'



function Forecast(props) {
  console.log('props', props)
  return (
    <div className="Forecast">
      <h1>Hourly forecast</h1>
      <div className='forecastSets'>
        <div clasName='card'>
        <p>Date & Time:</p>
        <p>Min-temp: </p>
        <p>Max-temp: </p>
        </div>
        <div clasName='card'>
        <p>Date & Time:</p>
        <p>Min-temp: </p>
        <p>Max-temp: </p>
        </div>
        <div clasName='card'>
        <p>Date & Time:</p>
        <p>Min-temp: </p>
        <p>Max-temp: </p>
        </div>
        <div clasName='card'>
        <p>Date & Time:</p>
        <p>Min-temp: </p>
        <p>Max-temp: </p>
        </div>
        <div clasName='card'>
        <p>Date & Time:</p>
        <p>Min-temp: </p>
        <p>Max-temp: </p>
      </div>
      </div>
      
    </div>
  );
}

export default Forecast;
//  fix the 5 sec waiting time