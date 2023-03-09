import React, { useState,useEffect } from 'react';
import phoneCountryCodes from '../data/phoneCountryCodes.json';

const TelephoneInput = ({ label,selectedCountry,name,value,pattern,placeholder='', onChange }) => {
  const [formattedValue, setFormattedValue] = useState(value);
  const [selectedValue, setSelectedValue] = useState(selectedCountry);
  const [telNumber, setTelNumber] = useState();


  const handleChange = (event) => {
    setFormattedValue(event.target.value);
    onChange( selectedValue + " " +formattedValue ,name);
  };

  const handleCountryCodeChange = (event) => {
    setSelectedValue( event.target.value);
    onChange( selectedValue + " " +formattedValue ,name);
  };

 
  return (
    <div>
      <label>{label}</label><br/>
    <select className='countryCode' id="countryCode" value={selectedValue} onChange={handleCountryCodeChange}>
          {phoneCountryCodes.map((option) => (
            <option key={option.code}  value={option.code}  >
              {option.country + " " + option.code}
            </option>
          ))}
      </select>
      <input className='phoneNumber'
      name={name}
      value={formattedValue}
      onChange={handleChange}
      placeholder={placeholder}
      type="tel"
      pattern={pattern}
      
    />
  
    </div>
  );
};

export default TelephoneInput;
