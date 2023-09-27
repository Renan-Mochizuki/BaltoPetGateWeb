import React, { useState } from 'react';
import { corBotaoCad } from '../../constants';

const RadioButton = (props) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    let valor = event.target.value;
    if (valor == 'Doente') {
      props.set(false)
    } else if (valor == 'Saudável') {
      props.set(true)
    } else {
      props.set(valor)
    } 
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