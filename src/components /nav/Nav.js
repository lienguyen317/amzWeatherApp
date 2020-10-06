import React from 'react';
import './nav.css';
import * as ReactBootStrap from 'react-bootstrap';
import hot from './hot.svg';
// import {Link} from 'react-router-dom';

function Nav() {
  return (
    <div ClassName='Nav'>
        {/* react-bootstrap navbar */}
        <ReactBootStrap.Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
          <ReactBootStrap.Navbar.Brand href="#home">MY WEATHER APP <img src={hot} alt='logo' style={{width:'35px'}}/></ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootStrap.Nav className="ml-auto">
              {/* add ```&nbsp;<frontawesom>``` */}
              <ReactBootStrap.Nav.Link href="/">Home&nbsp;<i class="fas fa-home"></i></ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link href="/weather">Weather&nbsp;<i class="fas fa-umbrella"></i></ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link href="about">About&nbsp;<i class="fas fa-address-card"></i></ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
    </div>
    
  );
}

export default Nav;
