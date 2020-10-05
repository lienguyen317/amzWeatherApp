import React from 'react';
import './App.css';
import Nav from '../nav/Nav.js';
import Home from '../home/Home.js';
import Weather from '../weather/Weather.js';
import About from '../about/About.js';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Weather />
      <About />
    </div>
  );
}

export default App;
