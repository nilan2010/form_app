import React, { useState } from 'react';
import InputMask from 'react-input-mask';

const MaskInput = ({ label,name,value,mask='',placeholder='', onChange }) => {
  const [formattedValue, setFormattedValue] = useState(value);

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setFormattedValue(inputValue);
    onChange(inputValue);
  };

  return (
    <div>
    <label>{label}</label><br/>
    <InputMask 
      name={name}
      mask={mask}
      value={formattedValue}
      onChange={handleChange}
      placeholder={placeholder}
    />
    </div>
  );
};

export default MaskInput;
