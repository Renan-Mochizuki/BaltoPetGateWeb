import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

const CampoOpcoes = (props) => {

  const options = props.dados;

  const [selected, setSelected] = useState([]);

  const escolhida = (e) => {
    setSelected(e)
    const array = e.map(item => item.value);
    const arrayJson = JSON.stringify({ array });
    props.set(array);
  };

  return (
    <div style={{ minWidth: '95%', maxWidth: '95%', margin: 10 }} >
      <MultiSelect
        options={options}
        value={selected}
        onChange={e => escolhida(e)}
        labelledBy="Selecione pelo menos um"
      />
    </div>
  );
};
const style = ({
  opcoes: {
    color: '#000000',
    margin: 8
  },
});
export default CampoOpcoes;