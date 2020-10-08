import React from 'react';
import './current.css';

// function Current(props) {
//   return (
//     <div className="Current">
//       {props.country && props.city && <p>Location: {props.city}, {props.country} </p>}
//       {props.temperature && <p> Temperature: {props.temperature} </p>}
//       {props.humidity && <p> Humidity: {props.humidity} </p>}
//       {props.pressure && <p> Pressure: {props.pressure} </p>}
//       {props.icon && <img src={`http://openweathermap.org/img/wn/${props.icon}.png`} alt='weather icon'/>}
//       {props.description && <p> Conditions: {props.description} </p>}
//       {props.error && <p>{props.error}</p>}
//     </div>
//   );
// }




const Current = (props) => {
  const {data} = props;

  console.log(props)
  return (
    <div>
      <h1>Current Weather</h1>
      <p>{props.name}</p>
      <p>{props.sys.country}</p>
      <p>Temperature: {props.main.temp}</p>
      <p>Humidity: {props.main.humidity}</p>
      <p>Pressure: {props.main.pressure}</p>
      <img src={`http://openweathermap.org/img/wn/${props.icon}.png`} alt='weather icon'/>
      <p>Condition: {data.description}</p>
    </div>
  ) 
}

export default Current;
