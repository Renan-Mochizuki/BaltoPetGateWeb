import React, { useEffect, useState } from "react";
import DecodificarToken from "../utils/DecodificarToken";
import axios from "axios";
import { corBotaoCad, urlAPI, urlLocal } from "../constants";

const AlterarImg = () => {
  const [id, setId] = useState();
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');


  const Enviar = async () => {
    setMessage('')
    if (!image) {
      return console.error('Nenhuma imagem selecionada.');
    }

    const formData = new FormData();
    formData.append('img', image);

    await axios.put(urlAPI + 'alt' + id, formData)
      .then(response => {
        console.log(response.data);
        setMessage(response.data.message)
      }).catch(error => {
        console.error(error);
        setMessage(error)
      })
  }

  return (
    <>
      <div>
        <form onSubmit={e => e.preventDefault()}>
          <p style={{ display: 'inline-block', margin: 5 }}>alt</p> <input type='text' id='id' onChange={e => setId(e.target.value)} placeholder="Rota para alterar" />
          <p style={{ display: 'inline-block', margin: 5 }}>Ex: pessoa/1</p><br />
          <input type='file' id='image' onChange={e => setImage(e.target.files[0])} /> <br />
          <button onClick={Enviar} style={{ backgroundColor: corBotaoCad, padding: 5, borderRadius: 25, marginTop: 20 }}>Enviar Imagem</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </>
  );
}

export default AlterarImg;
