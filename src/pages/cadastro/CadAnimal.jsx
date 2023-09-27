import GroupBox from "../../components/cadastro/GroupBox"
import CampoSimples from "../../components/cadastro/CampoSimples"
import Campo from "../../components/cadastro/Campo"
import BotaoCadastrar from "../../components/cadastro/BotaoCadastrar"
import ContainerCadastro from "../../components/cadastro/ContainerCadastro"
import { useEffect, useState } from "react"
import { corBotaoCad, urlAPI, urlLocal } from "../../constants"
import Dropdown from "../../components/cadastro/DropDown"
import axios from "axios"
import CampoOpcoes from "../../components/cadastro/CampoOpcoes"
import DecodificarToken from "../../utils/DecodificarToken"
import RadioButton from "../../components/cadastro/RadioButton"
import CampoEndereco from "../../components/cadastro/CampoEndereco"

let TB_PESSOA_IDD;

const CadAnimal = () => {

    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState();
    const [idadeTipo, setIdadeTipo] = useState('');
    const [porte, setPorte] = useState('');
    const [peso, setPeso] = useState();
    const [sexo, setSexo] = useState('');
    const [especie, setEspecie] = useState('');
    const [saude, setSaude] = useState('');
    const [descricao, setDescricao] = useState('');
    const [localResgate, setLocalResgate] = useState('');
    const [castrado, setCastrado] = useState('');
    const [vermifugado, setVermifugado] = useState('');
    const [microchip, setMicrochip] = useState('');
    const [cuidadoEspecial, setCuidadoEspecial] = useState('');
    const [uf, setUf] = useState('');
    const [cidade, setCidade] = useState('');
    const [bairro, setBairro] = useState('');
    const [rua, setRua] = useState('');
    const [alerta, setAlerta] = useState(false);

    const [situacoesBanco, setSituacoesBanco] = useState([]);
    const [traumasBanco, setTraumasBanco] = useState([]);
    const [temperamentosBanco, setTemperamentosBanco] = useState([]);


    const [situacoes, setSituacoes] = useState();
    const [traumas, setTraumas] = useState();
    const [temperamentos, setTemperamentos] = useState();

    const [carregando, setCarregando] = useState(true);

    const Cadastrar = () => {
        const camposObrigatorios = [nome, idade, idadeTipo, porte, peso, sexo, especie, saude, descricao, castrado, vermifugado, microchip, uf, cidade, bairro, alerta, temperamentos];
        const camposCadastro = { nome, idade, idadeTipo, porte, peso, sexo, especie, saude, descricao, localResgate, castrado, vermifugado, microchip, cuidadoEspecial, uf, cidade, bairro, alerta, rua }
        if (!image) {
            return console.error('Nenhuma imagem selecionada.');
        }
        InserirDados();
    }

    const PegarId = async () => {
        const decodedToken = await DecodificarToken();
        TB_PESSOA_IDD = decodedToken.TB_PESSOA_IDD;
    }

    const ListarOpcoes = async () => {
        axios.get(urlAPI + 'selsituacao')
            .then(response => {
                const dados = response.data;
                const options = dados.map(item => ({
                    label: item.TB_SITUACAO_DESCRICAO,
                    value: item.TB_SITUACAO_ID,
                }));
                setSituacoesBanco(options)
            }).catch(error => {
                console.error(error)
            });
        axios.get(urlAPI + 'seltrauma')
            .then(response => {
                const dados = response.data;
                const options = dados.map(item => ({
                    label: item.TB_TRAUMA_DESCRICAO,
                    value: item.TB_TRAUMA_ID,
                }));
                setTraumasBanco(options)
            }).catch(error => {
                console.error(error)
            });
        axios.get(urlAPI + 'seltemperamento')
            .then(response => {
                const dados = response.data;
                const options = dados.map(item => ({
                    label: item.TB_TEMPERAMENTO_TIPO,
                    value: item.TB_TEMPERAMENTO_ID,
                }));
                setTemperamentosBanco(options)
            }).catch(error => {
                console.error(error)
            });
    }

    useEffect(() => {
        PegarId().then(() => {
            ListarOpcoes().then(() => {
                setCarregando(false);
            })
        })
    }, []);

    const InserirDados = async () => {
        setMessageCad('Cadastrando...')
        try {
            const response = await axios.post(urlLocal + 'cadanimal', {
                TB_PESSOA_ID: TB_PESSOA_IDD,
                TB_ANIMAL_NOME: nome,
                TB_ANIMAL_IDADE: idade,
                TB_ANIMAL_IDADE_TIPO: idadeTipo,
                TB_ANIMAL_PORTE: porte,
                TB_ANIMAL_PESO: peso,
                TB_ANIMAL_SEXO: sexo,
                TB_ANIMAL_ESPECIE: especie,
                TB_ANIMAL_SAUDE: saude,
                TB_ANIMAL_DESCRICAO: descricao,
                TB_ANIMAL_LOCALIZACAO_UF: uf,
                TB_ANIMAL_LOCALIZACAO_CIDADE: cidade,
                TB_ANIMAL_LOCALIZACAO_BAIRRO: bairro,
                TB_ANIMAL_LOCALIZACAO_RUA: rua,
                TB_ANIMAL_CUIDADO_ESPECIAL: cuidadoEspecial,
                TB_ANIMAL_VERMIFUGADO: vermifugado,
                TB_ANIMAL_CASTRADO: castrado,
                TB_ANIMAL_MICROCHIP: microchip,
                TB_ANIMAL_LOCAL_RESGATE: localResgate,
                TB_ANIMAL_ALERTA: alerta,
                TEMPERAMENTOS: temperamentos,
                SITUACOES: situacoes,
                TRAUMAS: traumas,
            })
            const formData = new FormData();
            formData.append('image', image);

            const url = urlLocal + 'altanimal/' + response.data.TB_ANIMAL_IDD;
            console.log(url)
            const responseImg = await axios.put(url, formData)
            setMessageCad(responseImg.data.message)
        } catch (error) {

            setMessageCad('Houve um erro ao cadastrar')
            console.error('Erro ao cadastrar:', error);
        }
    };

    const [image, setImage] = useState(null);
    const [message, setMessage] = useState('');
    const [messageCad, setMessageCad] = useState('');

    const Enviar = async () => {
        if (!image) {
            return console.error('Nenhuma imagem selecionada.');

        }
        const formData = new FormData();
        formData.append('image', image);

        await axios.put(urlAPI + 'upload', formData)
            .then(response => {
                console.log(response.data);
                setMessage(response.data)
            }).catch(error => {
                console.error(error);
                setMessage(error)
            })
    }

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];

        if (selectedImage) {
            setImage(URL.createObjectURL(selectedImage));
            setMessage('');
        } else {
            setImage(null);
            setMessage('Nenhuma imagem selecionada');
        }
    };

    return (
        <ContainerCadastro>
            {carregando ? <p>Carregando</p> :
                <>
                    <GroupBox titulo='Insira uma imagem do animal'>
                        <form style={style.form}>
                            {image && <img style={style.Imagem} src={image} alt='Imagem do animal' />}
                            <input style={style.Img} type='file' id='image' onChange={handleImageChange} />
                            <label style={style.Label} className="escolhaImg" htmlFor="image">Escolha um arquivo</label>
                        </form>
                        {message && <p>{message}</p>}
                    </GroupBox>
                    <GroupBox titulo='Informações'>
                        <CampoSimples placeholder="Nome do animal" set={setNome} />

                        <div style={style.containerCampos}>
                            <Campo placeholder="Idade" type="numeric" set={setIdade} />
                            <Dropdown options={['Meses', 'Anos']} set={setIdadeTipo} texto='Ano(s) ou Mes(es)' />
                        </div>
                        <div style={style.ContainerDublo}>
                            <div style={style.campo}>
                                <p style={style.Texto}>Porte:</p>
                                <Dropdown options={['Pequeno', 'Médio', 'Grande']} texto='Porte' set={setPorte} />
                            </div>
                            <div style={style.campo}>
                                <Campo placeholder="Peso" type="numeric" set={setPeso} />
                                <p style={style.Texto}>Kg</p>
                            </div>
                        </div>
                        <div style={style.containerCampos}>
                            <Dropdown options={['Cachorro', 'Gato']} texto='Especie' set={setEspecie} />
                            <Dropdown options={['Macho', 'Fêmea']} texto='Sexo' set={setSexo} />
                        </div>
                    </GroupBox>

                    <GroupBox titulo='Descrição'>
                        <CampoSimples placeholder="Minha historia" set={setDescricao} />
                        <CampoSimples placeholder="Local do resgate" set={setLocalResgate} opcional />
                        <CampoSimples placeholder="Cuidados necessarios com o pet" set={setCuidadoEspecial} opcional />
                    </GroupBox>
                    <GroupBox titulo='Saúde'>
                        <RadioButton options={['Saudável', 'Doente']} set={setSaude} />
                    </GroupBox>
                    <GroupBox titulo='Castrado'>
                        <RadioButton options={['Sim', 'Não']} set={setCastrado} />
                    </GroupBox>
                    <GroupBox titulo='Vermifugado'>
                        <RadioButton options={['Sim', 'Não']} set={setVermifugado} />
                    </GroupBox>
                    <GroupBox titulo='Microchipado'>
                        <RadioButton options={['Sim', 'Não']} set={setMicrochip} />
                    </GroupBox>
                    <GroupBox titulo='Temperamento'>
                        <CampoOpcoes dados={temperamentosBanco} set={setTemperamentos} />
                    </GroupBox>
                    <GroupBox titulo='Situação'>
                        <CampoOpcoes dados={situacoesBanco} set={setSituacoes} />
                    </GroupBox>
                    <GroupBox titulo='Traumas (opcional)'>
                        <CampoOpcoes dados={traumasBanco} set={setTraumas} />
                    </GroupBox>
                    <GroupBox titulo='Localização'>
                        <CampoEndereco set2={setUf} set3={setCidade} set4={setBairro} set5={setRua} />
                    </GroupBox>
                    {/* <CheckBoxComponent texto='Animal em estado de alerta' set={setAlerta} /> */}
                    {messageCad && <p style={{ color: '#fff' }}>{messageCad}</p>}
                    <BotaoCadastrar onClick={Cadastrar} texto='Cadastrar' />
                </>
            }
        </ContainerCadastro>
    )
}
const style = ({
    container: {
        backgroundColor: '#a5cbd3',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    campo: {
        width: '46%',
        fontSize: 18,
        paddingHorizontal: 10,
        color: '#8EBF81',
        backgroundColor: "#fff",
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 5,
        justifyContent: "space-evenly",
        display: "flex",

    },
    containerCampos: {
        width: '95%',
        justifyContent: "space-evenly",
        flexDirection: "row",
        backgroundColor: '#fff',
        borderRadius: 20,
        alignItems: "center",
        display: "flex",
    },
    ContainerDublo: {
        width: '95%',
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5,
        marginBottom: 5,
    },
    Texto: {
        color: '#447837',
        fontSize: 18
    },
    Img: {
        display: 'none',
    },
    Label: {
        color: '#447837',
        fontSize: 18
    },
    form: {
        padding: 14,
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 5
    },
    BotaoImg: {
        marginTop: 10,
        backgroundColor: corBotaoCad,
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        width: '100%',
        fontSize: 16,
        padding: 12,
    },
    Imagem: {
        maxWidth: '95%',
        maxHeight: 500,
    }
});
export default CadAnimal