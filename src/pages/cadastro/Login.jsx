import { useState } from "react";
import { urlAPI, corBotaoCad, corFundoCad, corFundoCampoCad, corPlaceholderCad, corTextoBotaoCad, corBordaBoxCad } from "../../constants";
import axios from 'axios';
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
            setMensagem('Verificando...');
            Autenticar();
        }
    };

    const Autenticar = async () => {
        await axios.post(urlAPI + 'login', {
            TB_PESSOA_EMAIL: email,
            TB_PESSOA_SENHA: senha,
        }).then(async (response) => {
            setMensagem('Login realizado.');
            setCarregando(true);
            const TokenUsuario = response.data.token;
            await localStorage.removeItem('token');
            await localStorage.setItem('token', TokenUsuario);
            setTimeout(() => {
                window.location.replace('/');
            }, 1000);
        }).catch(error => {
            let erro = error.response.data.message;
            setMensagem(erro);
        })
    };

    const [mostrarSenha, setMostrarSenha] = useState(false);

    return (
        <div style={style.container} className="ContainerCadastro">
            <img style={style.imagem} src="./img/Logo.png" alt='Logo' />
            {mensagem && <p style={{ color: mensagem == 'Usuário ou senha inválidos.' ? 'red' : '#fff' }}>{mensagem}</p>}
            <div style={style.containercampo} className="containercampo">
                <input onChange={(text) => setEmail(text.target.value)} placeholder={"Email"} style={style.campo} />
            </div>
            <div style={style.containersenha} className="containercampo">
                <div style={style.containercamposenha}>
                    <div style={style.caixacampo}>
                        <input onChange={(text) => setSenha(text.target.value)} placeholder={"Senha"} style={style.campo} type={mostrarSenha ? 'text' : 'password'} />
                        <button onClick={() => setMostrarSenha(!mostrarSenha)} style={style.botaoSenha}                        >
                            {mostrarSenha ? (
                                <FaRegEyeSlash color="grey" size={30} />
                            ) : (
                                <FaRegEye color="grey" size={30} />
                            )}
                        </button>
                    </div>
                </div>
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
                        <div className="basic"></div>
                    </div>
                </div>}
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
        height: 45,
        margin: 10,
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 15,
        marginBottom: 15,
        columnGap: 10,
    },
    containersenha: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "center",
    },
    containercamposenha: {
        display: "flex",
        padding: 5,
        flexDirection: "row",
        minWidth: "100%",
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
    botaoSenha: {
        paddingRight: 10,
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