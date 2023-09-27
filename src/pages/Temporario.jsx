import axios from "axios";
import { useEffect, useState } from "react";
import { urlAPI } from "../constants";

const Temporario = () => {
    const [pessoas, setPessoas] = useState([]);

    useEffect(() => {
        axios.get(urlAPI + 'selpessoa')
            .then(response => {
                const data = response.data;
                setPessoas(data);
            }).catch(error => {
                console.error(error);
            })
    }, []);

    return (
        <>
            <div>Temporario</div>
            <br />
            <a href='/CadAnimal'>CadAnimal</a>
            <br />
            <a href='/Login'>Login</a>
            <br />
            <a href='/Animal'>Animal</a>
            <br />
            <a href='/CadUsuario'>CadUsuario</a>
            <br />
            <a href='/Ficha/1'>Ficha</a>
            <br />
            <a href='/Testes'>Ficha</a>
            <ul>
                {pessoas.map((item, index) => {
                    const url = urlAPI + "selpessoaimg/" + item.TB_PESSOA_ID;
                    return (
                        <li key={index}>
                            <strong>Nome do Perfil:</strong> {item.TB_PESSOA_NOME_PERFIL}<br />
                            <img src={url} alt="Imagem" style={{ width: 'auto', height: 350 }} />
                            <br />
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default Temporario