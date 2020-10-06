import React from 'react';
import './form.css'

function Form(props) {
  return (
    <div className="Form" onSubmit={props.loadWeather}>
      <form>
        <input className='city' type="text" name="city" placeholder='City'/>
        <input className='country' type="text" name="country" placeholder='Country'/>
        <input className='button' type="submit" value="Get Weather" />
      </form>
    </div>
  );
}

export default Form;
