import React, {useState} from 'react';
import './weather.css'
// import Form from '../form/Form.js'
import Current from '../current/Current.js';
import Forecast from '../forecast/Forecast.js';


// const api_key = '77c638c4087dc16d2d6ba94671248266';

// class Weather extends React.Component {
//   state ={
//     temperature:'',
//     city: '',
//     humidity:'',
//     pressure:'',
//     icon:'',
//     description:'',
//     error:'' 
//   }

//   getWeather = async (e) => {
//     const city = e.target.elements.city.value;
//     const country = e.target.elements.country.value;
//     e.preventDefault();
//     const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country},$units=imperial&appid=${api_key}`);

//     const response = await api_call.json();
//     if (city && country) {
//       this.setState({
//         temperature: response.main.temp,
//         city: response.name,
//         country: response.sys.country,
//         humidity: response.main.humidity,
//         pressure: response.main.pressure,
//         icon: response.weather[0].icon,
//         description: response.weather[0].description,
//         error:''
//       })
//     } else {
//       this.setState({error:'Oops!!! Seems like you have forgoten something!'})
//     }
//   }

//   render() {
//     return(
//       <div>
//         <Form loadWeather={this.getWeather}/>
//         <Current  
//           temperature={this.state.temperature}
//           city={this.state.city}
//           country={this.state.country}
//           humidity={this.state.humidity}
//           pressure={this.state.pressure}
//           icon={this.state.icon}
//           description={this.state.description}
//           error={this.state.error}
//         />
//         <Forecast />
//       </div> 
//     )
//   }
// }


function Weather() {
const apiKey = '77c638c4087dc16d2d6ba94671248266';
  
  const [form, setForm] = useState ({
    city:'',
    country:'',
  });
  const [weather, setWeather] = useState([])

  async function weatherData(e){
    e.preventDefault();
    if (form.city === ''){
      alert('Add city')
    }else{
      const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country},$units=imperial&appid=${apiKey}`)
        .then((res) => res.json())
        .then(data => console.log(data))

        setWeather({
          data: data
        });
    }
  }

  

  const handleChange = (e) => {
    let name = e.target.name;
    let value= e.target.value;

    if (name === 'city') {
      setForm({...form, city:value})
    }
    if (name === 'country'){
      setForm({...form, country:value})
    }
    console.log(form.city,form.country)
  }
  
  
    return (
    <div className='Weather'>
      <form>
        <input className='city' type="text" name="city" placeholder='City' onChange={e => handleChange(e)}/>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <input className='country' name="country" placeholder='Country' onChange={e => handleChange(e)}/>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <input className='button' type="submit" value="Get Weather" onClick={e => weatherData(e)}/>
      </form>
      {
        weather.data !== undefined ?
          <div>
            <Current data = {weather.data}/>
          </div>
        :null
      }
      <Forecast />
    </div>
    )
  
}

  

export default Weather;
