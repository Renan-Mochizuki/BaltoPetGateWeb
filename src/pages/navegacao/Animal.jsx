import React, { useEffect, useState } from "react";
import DecodificarToken from "../../utils/DecodificarToken";
import axios from "axios";
import { corFundo, corHeaderCard, corMaiorAnimal, corNomeExibirAnimal, urlAPI, urlLocal } from "../../constants";

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
            axios.get(urlLocal + 'selanimal')
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
                <div style={styles.container}>
                    {animais.map((item, index) => (
                        <div key={index} style={styles.card}>
                            <div style={styles.cardHeader} className="cardHeader">
                                <div style={styles.cardUser}>
                                    <div className="profileImg">
                                        <img src={urlAPI + 'selpessoaimg/' + item.TB_PESSOA_ID} alt="Perfil" />
                                    </div>
                                    <p>{item.TB_PESSOA.TB_PESSOA_NOME_PERFIL}</p>
                                </div>
                            </div>
                            <a href={"/Ficha/" + item.TB_ANIMAL_ID}>
                                <div className="animalImgContainer">
                                    <img src={urlAPI + 'selanimalimg/' + item.TB_ANIMAL_ID} alt="Imagem do animal" />
                                </div>
                            </a>
                            <div style={styles.cardContent}>
                                <div style={styles.nomeAnimal}>
                                    <p style={{ color: corMaiorAnimal }}>Nome: &nbsp;</p>
                                    <p style={{ color: corNomeExibirAnimal }}>{item.TB_ANIMAL_NOME} </p>
                                </div>
                                <div style={styles.nomeAnimal}>
                                    <p style={{ color: corMaiorAnimal }}>Temperamentos: &nbsp;</p>
                                    <p style={{ color: corNomeExibirAnimal }}>{item.TB_ANIMAL_LOCALIZACAO_CIDADE} </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

const styles = ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: 500,
        minHeight: '100%',
        margin: 'auto',
    },
    card: {
        width: '100%',

    },
    cardHeader: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60,
        backgroundColor: corHeaderCard,
    },
    cardUser: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 30,
        marginLeft: 20,
        paddingTop: 10,
        paddingBottom: 10,
        color: '#fff',
        fontSize: 25
    },
    cardContent: {
        height: 150,
        backgroundColor: corFundo,
        paddingTop: 20,
        paddingLeft: 20,
        fontSize: 25,
    },
    nomeAnimal: {
        display: 'flex',
        flexDirection: 'row'
    }
})
export default Animal;
