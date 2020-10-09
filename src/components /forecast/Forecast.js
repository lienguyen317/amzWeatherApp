import React from 'react';
import './forecast.css'
import * as ReactBootStrap from 'react-bootstrap';

function Forecast(props) {
  console.log('propshit', props)
  return (
    <div className="Forecast">
      <ReactBootStrap.Card style={{ width: '18rem' }}>
        <ReactBootStrap.Card.Body>
          <ReactBootStrap.Card.Title>{props.data.city.name}</ReactBootStrap.Card.Title> 
          <ReactBootStrap.Card.Subtitle>{props.data.list[0].dt_txt}</ReactBootStrap.Card.Subtitle>
          <ReactBootStrap.Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </ReactBootStrap.Card.Text>
        </ReactBootStrap.Card.Body>
      </ReactBootStrap.Card>

    </div>
  );
}

export default Forecast;
//  fix the 5 sec waiting time