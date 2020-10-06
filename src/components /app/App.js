import React from 'react';
import './App.css';
import Nav from '../nav/Nav.js';
import Home from '../home/Home.js';
import Weather from '../weather/Weather.js';
import About from '../about/About.js';
// React Router Import
import { Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route> 
        <Route path='/weather'>
          <Weather />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
