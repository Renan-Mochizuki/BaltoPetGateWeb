import React, { useState } from 'react';
import { corBotaoCad } from '../../constants';

const RadioButton = (props) => {
  const [selectedOption, setSelectedOption] = useState(props.options[0]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    props.set(event.target.value)
  };
  return (
    <div style={style.Container}>
      {props.options.map((option, index) => (
        <div key={index} style={style.Campo} className='Botoes'>
          <label style={style.Texto}>
            <input
              type="radio"
              value={option}
              checked={selectedOption === option}
              onChange={handleOptionChange}
            />
            {option}
          </label>
        </div>
      ))}
    </div>
  );
};
const style = {
  Container: {
    padding: 10,
    width: '90%',
    justifyContent: 'space-evenly',
    display: 'flex',
    alignItems: 'center',
    color: 'white',
  },
  Campo: {
    backgroundColor: corBotaoCad,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    width: '40%',
    padding: 12,
    fontSize: 16,
  },
};
export default RadioButton;