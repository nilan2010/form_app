import React, { useState } from 'react';

const Input = ({ label,type,name,value,pattern,placeholder='', onChange }) => {
  const [formattedValue, setFormattedValue] = useState(value);

  const handleChange = (event) => {
    const inputValue = event.target.value;
    const inputName = event.target.name;
    setFormattedValue(inputValue);
    onChange(inputValue,inputName);
  };

  return (
    <div>
    <label>{label}</label><br/>
    <input className='ant-input'
      name={name}
      value={formattedValue}
      onChange={handleChange}
      placeholder={placeholder}
      type={type}
      pattern={pattern}
      
    />
    </div>
  );
};

export default Input;
