import React, { useEffect, useState } from "react";
import DecodificarToken from "../../utils/DecodificarToken";
import axios from "axios";
import { urlAPI, urlLocal } from "../../constants";

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
                <div style={styles.container}>
                    {animais.map((item, index) => (
                        <div key={index} style={styles.card}>
                            <div style={styles.cardHeader}>
                                <div style={styles.cardUser}>
                                    <div className="profileImg">
                                        <img src="http://via.placeholder/200" alt="Perfil" />
                                    </div>
                                    <p>{item.TB_PESSOA_ID}</p>
                                </div>
                            </div>
                            <div className="animalImgContainer">
                                <img src="http://via.placeholder/500" alt="Imagem do animal" />
                            </div>
                            <div style={styles.cardContent}>
                                <p>Nome: {item.TB_ANIMAL_NOME} </p>
                                <br />
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
    },
    card: {
        width: '100%',

    },
    cardHeader: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60
    },
    cardUser: {
        display: 'flex',
        flexDirection: 'row',
        columnGap: 40,
        marginLeft: 10,
    },
    cardContent: {

    }
})
export default Animal;
