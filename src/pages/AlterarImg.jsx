import { useEffect, useState } from "react";
import axios from "axios";
import { corBotaoCad, corFundoCad, urlAPI, corTextoBotaoCad, corFundoCampoCad } from "../constants";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const senhaEnv = import.meta.env.VITE_SENHA;

const AlterarImg = () => {
  const [id, setId] = useState();
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');
  const [autorizado, setAutorizado] = useState(false);

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
        let erro = error.response.data;
        console.error(erro.error, error);
      })
  }

  const [texto, setTexto] = useState('');
  const [messageReativar, setMessageReativar] = useState('');

  const Reativar = () => {
    setMessageReativar('');
    if (texto)
      axios.put(urlAPI + 'reativarpessoa/' + texto)
        .then((response) => {
          console.log('reativado', response.data.message);
          setMessageReativar('Sucessso:' + response.data.message)
        })
        .catch((error) => {
          let erro = error.response.data.message;
          ToastAndroid.show(erro, ToastAndroid.SHORT);
          console.error('Erro ao reativar:', error);
        });
  }

  const Logar = () => {
    setMensagem('')
    if (senha == senhaEnv) {
      setAutorizado(true);
    } else {
      setMensagem('Senha inválida.')
    }
  }

  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mensagem, setMensagem] = useState('');

  return (
    <>
      {autorizado ?
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
          <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <input onChange={text => setTexto(text.target.value)} placeholder='ID da pessoa para reativar' />
            <button onClick={Reativar}>Reativar</button>
            {messageReativar && <p>{messageReativar}</p>}
          </div>
        </>
        :
        <>
          <div style={style.container} className="ContainerCadastro">
            <img style={style.imagem} src="./img/Logo.png" alt='Logo' />
            <p style={{ color: 'white' }}>Insira a senha</p>
            {mensagem && <p style={{ color: 'red' }}>{mensagem}</p>}
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
          </div>
        </>
      }
    </>
  );
}

const style = ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  imagem: {
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

export default AlterarImg;
