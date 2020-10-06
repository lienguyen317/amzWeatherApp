import React from 'react';
import './form.css'

function Form() {
  return (
    <div className="Form">
      <form>
        <input className='city' type="text" name="city" value='City'/>
        <input className='country' type="text" name="country" value='Country'/>
        <input className='button' type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Form;
