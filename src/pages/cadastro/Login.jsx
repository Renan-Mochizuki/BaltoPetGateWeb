import { useState } from "react";
import { urlAPI, corBotaoCad, corFundoCad, corFundoCampoCad, corPlaceholderCad, corTextoBotaoCad, corBordaBoxCad } from "../../constants";
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'

const Login = () => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [carregando, setCarregando] = useState(false);

    const Logar = () => {
        if (!email || !senha) {
            alert("Insira seu email e senha.");
        } else {
            Autenticar();
        }
    };

    const Autenticar = async () => {
        await axios.post(urlAPI + 'login', {
            TB_PESSOA_EMAIL: email,
            TB_PESSOA_SENHA: senha,
        }).then(async (response) => {
            setCarregando(true);
            const TokenUsuario = response.data.token;
            await AsyncStorage.removeItem('token');
            await AsyncStorage.setItem('token', TokenUsuario);
            setTimeout(() => {
                window.location.replace('/Animal');
            }, 1500);
        }).catch(error => {
            let erro = error.response.data.message;
            setMensagem(erro);
        })
    };

    const [mostrarSenha, setMostrarSenha] = useState(false);

    return (
        <div style={style.container}>
            <img
                style={style.imagem} src="./img/Logo.png"
            />
            {mensagem && <p style={style.mensagem}>{mensagem}</p>}
            <div style={style.containercampo}>
                <input
                    onChange={(text) => setEmail(text.target.value)}
                    placeholder={"Email"}
                    style={style.campo}
                />
            </div>
            <div style={style.containersenha}>
                <div style={style.containercamposenha}>
                    <div style={style.caixacampo}>
                        <input
                            onChange={(text) => setSenha(text.target.value)}
                            placeholder={"Senha"}
                            style={style.campo}
                            type={!mostrarSenha ? 'text' : 'password'}
                        />
                        <button
                            onClick={() => setMostrarSenha(!mostrarSenha)}
                            style={style.botaoSenha}
                        >
                            {mostrarSenha ? (
                                <FaRegEye color="grey" size={30} />
                            ) : (
                                <FaRegEyeSlash color="grey" size={30} />
                            )}
                        </button>
                    </div>
                </div>

                <button onClick={() => console.log('a')} style={{ alignSelf: "flex-end" }} >
                    <p style={style.esqueceu}>Esqueci minha senha</p>
                </button>
            </div>

            <button onClick={Logar} style={style.botaologin} className="botaoCadastro">
                <p style={style.textologin}> Entrar </p>
            </button>
            <a href="/CadUsuario">
                <p style={style.textocad}> Não tenho uma conta</p>
            </a>

            {carregando &&
                <div style={style.carregandoContainer}>
                    <div style={style.carregando}>
                        {/* <ActivityIndicator size="large" color={corBordaBoxCad} /> */}
                    </div>
                </div>}

            <button onClick={async () => {
                const TokenUsuario = await AsyncStorage.getItem('token');
                if (TokenUsuario == null) {
                    await AsyncStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJUQl9QRVNTT0FfSUREIjoxNSwiVEJfVElQT19JREQiOjEsImlhdCI6MTY5NDcxMjMwMywiZXhwIjoxNjk5ODk2MzAzfQ.9fxNd1tW70-m3LXUVDD7nnb4IgH0cyoMgX78rhVtfaE');
                    setTimeout(() => {
                    }, 1500);
                }
            }}>
                <p>PULAR</p>
            </button>
        </div>
    );
};

const style = ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: corFundoCad,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
    },
    imagem: {
        backgroundColor: corFundoCad,
        height: 200,
        width: 200,
        marginBottom: 15,
    },
    botaologin: {
        display: 'flex',
        flexDirection: 'column',
        width: "40%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: corBotaoCad,
        borderRadius: 15,
        marginTop: 30,
        marginBottom: 10,
        elevation: 5,
    },
    esqueceu: {
        backgroundColor: corFundoCad,
        color: "grey",
        fontSize: 16,
        alignSelf: "flex-end",
    },
    textologin: {
        backgroundColor: corBotaoCad,
        color: corTextoBotaoCad,
        fontSize: 20,
    },
    textocad: {
        backgroundColor: corFundoCad,
        color: "#578d97",
        fontSize: 18,
    },
    containercampo: {
        display: "flex",
        flexDirection: "row",
        width: "40%",
        height: 45,
        margin: 10,
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 15,
        marginBottom: 15,
        columnGap: 10,
    },
    containercamposenha: {
        display: "flex",
        padding: 5,
        flexDirection: "row",
        width: "100%",
        height: 45,
        margin: 10,
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 15,
        columnGap: 10,
    },
    campo: {
        flex: 1,
        fontSize: 18,
        height: "100%",
        paddingLeft: 12,
        backgroundColor: corFundoCampoCad,
        borderRadius: 20,
        marginTop: 10,
        marginBottom: 10,
        color: '#000'
    },
    caixacampo: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        borderRadius: 20,
        height: "100%",
        backgroundColor: corFundoCampoCad,
    },
    containersenha: {
        width: "40%",
        display: 'flex',
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "center",
    },
    botaoSenha: {
        marginRight: 10,
    },
    mensagem: {
        color: 'red',
    },
    carregandoContainer: {
        flex: 1,
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    carregando: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 75,
        height: 75,
        borderRadius: 100,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
    }
});

export default Login;