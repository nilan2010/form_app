import React, { useState } from 'react';
import InputMask from 'react-input-mask';

const TelephoneInput = ({ value, onChange }) => {
  const [formattedValue, setFormattedValue] = useState(value);

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setFormattedValue(inputValue);
    onChange(inputValue);
  };

  return (
    <InputMask
      mask="(999) 999-9999"
      value={formattedValue}
      onChange={handleChange}
      placeholder="(123) 456-7890"
    />
  );
};

export default TelephoneInput;
