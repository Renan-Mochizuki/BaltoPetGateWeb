import React, { useEffect, useState } from "react";
import DecodificarToken from "../../utils/DecodificarToken";
import axios from "axios";
import { urlAPI, urlLocal } from "../../constants";
import StyleSheet from 
const Animal = () => {
    const [autorizado, setAutorizado] = useState(false);
    const [animais, setAnimais] = useState([]);

    useEffect(() => {
        const Autorizar = async () => {
            const decodedToken = await DecodificarToken();
            if (!decodedToken) {
                window.location.replace('/Login');
            } else {
                setAutorizado(true);
            }
        }
        const ListarAnimais = async () => {
            axios.get(urlAPI + 'selanimal')
                .then(response => {
                    setAnimais(response.data);
                })
        }
        Autorizar();
        ListarAnimais();
    }, []);


    return (
        <>
            {!autorizado ? (
                <></>
            ) : (
                <div>
                    {animais.map((item, index) => (
                        <div key={index}>
                            <p>Nome do Perfil: {item.TB_ANIMAL_NOME} </p>
                            <br />
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

const styles = StyleSheet.create ({
    s:{
      s
    }
})
export default Animal;
