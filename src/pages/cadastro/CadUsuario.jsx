import { useState } from 'react';
import CampoSimples from '../../components/cadastro/CampoSimples';
import CampoSenha from '../../components/cadastro/CampoSenha';
import BotaoCadastrar from '../../components/cadastro/BotaoCadastrar';
import GroupBox from '../../components/cadastro/GroupBox';
import ContainerCadastro from '../../components/cadastro/ContainerCadastro';
import ValidarCamposCad from '../../utils/ValidarCamposCad';
import axios from 'axios';
import { urlAPI } from '../../constants';

const CadUsuario = () => {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [nomePerfil, setNomePerfil] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaConfirmacao, setSenhaConfirmacao] = useState('');

  const [mensagem, setMensagem] = useState('');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');

  const Cadastrar = async () => {
    const camposObrigatorios = [email, nome, nomePerfil, senha, senhaConfirmacao];
    const camposCadastro = { email, nome, nomePerfil, senha, senhaConfirmacao };

    let mensagemErro = ValidarCamposCad(camposObrigatorios, camposCadastro);
    if (!mensagemErro) {
      InserirDados();
    } else {
      alert(mensagemErro);
    }
  }

  const InserirDados = () => {
    setMensagem('Cadastrando...');
    try {
      const formData = new FormData();
      formData.append('image', image);

      axios.post(urlAPI + 'cadpessoa', {
        TB_TIPO_ID: 1,
        TB_PESSOA_NOME: nome,
        TB_PESSOA_NOME_PERFIL: nomePerfil,
        TB_PESSOA_EMAIL: email,
        TB_PESSOA_SENHA: senha,
      }).then(async response => {
        // const TokenUsuario = response.data.token;
        // await axios.put(urlAPI + 'altpessoa/' + response.data.TB_PESSOA_IDD, formData)
        //   .then(async responsePut => {
        setMensagem('Cadastrado!');
        await localStorage.removeItem('token');
        await localStorage.setItem('token', TokenUsuario);
        setTimeout(() => {
          window.location.replace('/');
        }, 1500)
        // }).catch(error => {
        //   let erro = error.response.data.message;
        //   // setMensagem(erro);
        //   console.error(erro)
        // })
      }).catch(error => {
        let erro = error.response;
        // setMensagem(erro);
        console.error(erro)
      })
    }
    catch (erro) {
      console.error(erro)
    }
  }

  return (
    <ContainerCadastro titulo="Crie sua conta!">
      <GroupBox titulo='Insira uma imagem de perfil'>
        <form style={styles.form}>
          {image && <img style={styles.Imagem} src={image} alt='Imagem de perfil' />}
          <input style={styles.Img} type='file' id='image' onChange={e => {
            setImage(e.target.files[0]);
            setImage(URL.createObjectURL(e.target.files[0]));
          }} />
          <label style={styles.Label} className="escolhaImg" htmlFor="image">Escolha um arquivo</label>
        </form>
      </GroupBox>
      <GroupBox titulo="Informações pessoais">
        <CampoSimples set={setNome} placeholder={"Nome Completo"} />
        <CampoSimples set={setNomePerfil} placeholder={"Como gostaria de ser chamado?"} />
      </GroupBox>
      <GroupBox titulo="Informações de login">
        <CampoSimples set={setEmail} placeholder={"Email"} />
        <CampoSenha set1={setSenha} set2={setSenhaConfirmacao} />
      </GroupBox>
      {mensagem && <p style={{ color: mensagem == 'Cadastrado!' || 'Cadastrando...' ? '#fff' : 'red' }}>{mensagem}</p>}
      <BotaoCadastrar onClick={Cadastrar} />
    </ContainerCadastro>
  )
}
const styles = ({
  Img: {
    display: 'none',
  },
  Label: {
    color: '#447837',
    fontSize: 18
  },
  Imagem: {
    maxWidth: '95%',
    maxHeight: 500,
  },
  form: {
    padding: 14,
    display: 'flex',
    flexDirection: "column",
    justifyContent: "center",
    alignItems: 'center',
    marginTop: 5
  },
})
export default CadUsuario