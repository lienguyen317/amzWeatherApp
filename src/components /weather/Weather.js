import React, {useState} from 'react';
import './weather.css'
import Current from '../current/Current.js';
import Forecast from '../forecast/Forecast.js';
import { Alert } from 'react-bootstrap';


function Weather() {
  const apiKey = '77c638c4087dc16d2d6ba94671248266';
  
  const [form, setForm] = useState ({city:''});
  const [weather, setWeather] = useState([])
  const [forecast, setForecast] =useState([])

  // async function weatherData(e){
  //   e.preventDefault();
  //   if (form.city === ''){
  //     alert('Add city')
  //   }else{
  //     // 
  //     const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${form.city},${null},${form.country}&units=imperial&appid=${apiKey}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log('data', data)
  //         setWeather({data: data});
  //       }
  //       // fetch another api
  //     )}
  //   } 

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
      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${form.city}&cnt=5&units=imperial&appid=${apiKey}`) 
        .then((response)=>response.json())
        .then((data)=>{
          console.log('forecast', data)
          setForecast({data:data})
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
        <input className='city' type="text" name="city" placeholder='City' onChange={e => handleChange(e)}/> 
        <input className='button' type="submit" value="Get Weather" onClick={e => weatherData(e)}/>
      </form>
      {
        weather.data !== undefined ?
          <div>
            <Current data = {weather.data}/>
          </div>
        :null
      }
      {
        weather.data !== undefined ?
          <div>
            <Forecast data= {forecast}/>
          </div>
        :null
      }  
    </div>
    )
}

  

export default Weather;
