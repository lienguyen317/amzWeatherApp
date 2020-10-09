import React from 'react';
import './forecast.css'



function Forecast(props) {
  console.log('props', props)
  return (
    <div className="Forecast">
      <h1>Hourly forecast</h1>
      <div className='cardSets'>
        <div className='card'>
        <p><b>Date & Time:</b></p>
        <p><b>Min-temp:</b> </p>
        <p><b>Max-temp:</b> </p>
        <p><b>Icon</b></p>
        </div>
        <div className='card'>
        <p><b>Date & Time:</b></p>
        <p><b>Min-temp:</b> </p>
        <p><b>Max-temp:</b> </p>
        <p><b>Icon</b></p>
        </div>
        <div className='card'>
        <p><b>Date & Time:</b></p>
        <p><b>Min-temp:</b> </p>
        <p><b>Max-temp:</b> </p>
        <p><b>Icon</b></p>
        </div>
        <div className='card'>
        <p><b>Date & Time:</b></p>
        <p><b>Min-temp:</b> </p>
        <p><b>Max-temp:</b> </p>
        <p><b>Icon</b></p>
        </div>
        <div className='card'>
        <p><b>Date & Time:</b></p>
        <p><b>Min-temp:</b> </p>
        <p><b>Max-temp:</b> </p>
        <p><b>Icon</b></p>
        </div>
      </div>   
    </div>
  );
}

export default Forecast;
//  fix the 5 sec waiting time