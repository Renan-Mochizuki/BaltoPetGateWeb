import React, { useEffect, useState } from "react";
import DecodificarToken from "../utils/DecodificarToken";
import axios from "axios";
import { urlAPI, urlLocal } from "../constants";

const AlterarImg = () => {
  const [autorizado, setAutorizado] = useState(false);
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');


  const Enviar = async () => {
    if (!image) {
      return console.error('Nenhuma imagem selecionada.');
    }

    const formData = new FormData();
    formData.append('image', image);
    console.log(formData)
    await axios.put(urlAPI + 'altpessoa/14', formData)
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
          <input type='file' id='image' onChange={e => setImage(e.target.files[0])} /> <br />
          <button onClick={Enviar}>Enviar Imagem</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </>
  );
}

export default AlterarImg;
