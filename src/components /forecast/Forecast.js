import React from 'react';
import './forecast.css'



function Forecast(props) {
  console.log('props', props)

  const card =props.data.map((elem,index) => {
    return (
      <div className='card'>
        <p><b>Date:</b> {elem.valid_date}</p>
        <p><b>Min-temp:</b> {elem.low_temp} </p>
        <p><b>Max-temp:</b> {elem.high_temp}</p>
        </div>
    )
  })
  return (
    <div className="Forecast">
      <h1>5 Days Forecast</h1>
      <div className='cardSets'>
        {card}
      </div>   
    </div>
  );
}

export default Forecast;
//  fix the 5 sec waiting time