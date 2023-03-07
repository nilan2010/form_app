import React, { useState } from 'react';

const NumberInput = ({ value, onChange }) => {
  const [formattedValue, setFormattedValue] = useState(value);

  const handleChange = (event) => {
    const inputValue = event.target.value;
    const formattedNumber = inputValue.replace(/[^0-9]/g, '');
    setFormattedValue(formattedNumber);
    onChange(formattedNumber);
  };

  return (
    <input
      type="number"
      value={formattedValue}
      onChange={handleChange}
      placeholder="Enter a number"
    />
  );
};

export default NumberInput;