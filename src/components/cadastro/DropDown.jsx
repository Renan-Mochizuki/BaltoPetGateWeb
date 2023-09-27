import React, { useState } from 'react';

const Dropdown = (props) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    props.set(event.target.value);
  };

  return (
    <div >
      <select
        style={style.opcoes}
        className='select'
        id={props.texto}
        value={selectedOption}
        onChange={handleChange}
      >
        <option value="">Selecione...</option>
        {props.options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

const style = {
  opcoes: {
    color: '#000000',
    margin: 8,
  },
};

export default Dropdown;