import React ,{ useState }from 'react';

const Dropdown = ({ name,label, options ,onChange}) => {
 
  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionClick = (event) => {
    const selectedValue = event.target.value;
    const inputName = event.target.name;
    
    onChange(selectedValue,inputName);
    setSelectedOption(selectedValue);
  };

  return (
    <div>
        <label>{label}</label><br/>
        <select name={name}  onChange={handleOptionClick} >
        {options.map((option) => (
            <option key={option.value}  value={option.value}  >
              {option.label}
            </option>
          ))}
        </select>
    </div>
  );
};

export default Dropdown;
