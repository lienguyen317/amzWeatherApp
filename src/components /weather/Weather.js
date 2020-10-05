import React from 'react';
import './weather.css'
import Form from '../form/Form.js'
import Current from '../current/Current.js';
import Forecast from '../forecast/Forecast.js';

function Weather() {
  return (
    <div className="Weather">
      <Form />
      <Current />
      <Forecast />
    </div>
  );
}

export default Weather;
