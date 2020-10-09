import React, {useState} from 'react';
import './weather.css'
import Current from '../current/Current.js';
import Forecast from '../forecast/Forecast.js';
import { Alert } from 'react-bootstrap';


function Weather() {
  const apiKey = '06348c556be92fe47bf4349fa0391126';
// https://api.openweathermap.org/data/2.5/forecast?q=${form.city}&cnt=5&units=imperial&appid=${apiKey} - old daily forecast api

  const apiKeyTwo ='0dd212aaf23b43cea8e1ec1bdaac6b1d'
  
  const [form, setForm] = useState ({city:''});
  const [weather, setWeather] = useState([])
  const [forecast, setForecast] =useState({})

  async function weatherData(e){
    e.preventDefault();
    if (form.city === ''){
      Alert('Add City!!!')
    }else{
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${form.city}&units=imperial&appid=${apiKey}`)
        .then((response)=>response.json())
        .then((data)=>{
          console.log('current', data)
          setWeather({data: data})
        })  
      fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${form.city}&units=I&days=5&key=${apiKeyTwo}`) 
        .then((response)=>response.json())
        .then((data)=>{
          console.log('forecast', data.data)
          setForecast({data: data.data})
        })
    }
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value= e.target.value;

    if (name === 'city') {
      setForm({...form, city:value})
    }
  }
  
    return (
    <div className='Weather'>
      <form>
        <input className='city' type="text" name="city" placeholder='City' style={{textAlign: 'center'}}  onChange={e => handleChange(e)}/> 
        <input className='button' type="submit" value="Get Weather" style={{fontWeight: 'bold'}} onClick={e => weatherData(e)}/>
      </form>
      {
        weather.data !== undefined ?
          <div>
            <Current data = {weather.data}/>
          </div>
        :null
      }
      {
        forecast.data !== undefined ?
          <div>
            <Forecast data = {forecast.data}/>
          </div>
        :null
      }  
    </div>
    )
}

  

export default Weather;
