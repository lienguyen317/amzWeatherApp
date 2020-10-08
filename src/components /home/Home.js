import React from 'react';
import './home.css'

function Home() {
  // function handleResponse(position) {
  //   console.log("this is position: ", position)
  //   buildMap(position.coords.latitude, position.coords.longitude)
  //   fetchWeather(position.coords.latitude, position.coords.longitude)
  // }
  // function buildMap(latitude, longitude) {
  //   var map = new google.maps.Map(document.querySelector('#map'), {
  //     center: {
  //       lat: latitude,
  //       lng: longitude,
  //     },
  //     zoom: 12,
  //   })
  
  //   var marker = new google.maps.Marker({
  //     position: {
  //       lat: latitude,
  //       lng: longitude,
  //     },
  //     map: map,
  //   })
  // }
  
  // navigator.geolocation.getCurrentPosition(handleResponse)

  // function fetchWeather(latitude, longitude) {
  //   var URL = 'https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=' + latitude + '&lon=' + longitude + '&APPID=bf051e197da4655b52447684d8d279d3'
  
  //   $.ajax({
  //     type: 'GET',
  //     url: URL,
  //     success: handleWeatherResponse,
  //   })
  // }
  
  // function handleWeatherResponse(response) {
  //   $('#weather').html(response.main.temp)
  // }
  
  // const apiKey = '77c638c4087dc16d2d6ba94671248266';
  
  // async function geoWeatherData(e) {
  //   const data = await fetch (`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${apikey}`)
  // }
  

  return (
    <div className="Home">
      <h1>Wellcome to the amazing weather App</h1>
      {/* <div class="container">
		    <h1>Geo Locator</h1>
		    <div id="map"></div>
		    <h2 id="weather"></h2>
	    </div> */}
    </div>
  );
}

export default Home;
