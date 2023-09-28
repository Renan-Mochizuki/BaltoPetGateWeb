import BotaoCadastrar from "../components/cadastro/BotaoCadastrar"
import TextoComum from "../components/ficha/TextoComum"
import TextoMultiplo from "../components/ficha/TextoMultiplo"
import TextoMenor from "../components/ficha/TextoMenor"
import TextoOpcional from "../components/ficha/TextoOpcional"
import { corFundo, corFundoCad, corFundoCampoCad, corPlaceholderCad, corTextoBotaoCad, corBordaBoxCad, urlAPI } from "../constants";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import axios from "axios"

const Ficha = () => {
    const { id } = useParams();

    let tipoIdade;

    const [select, setSelect] = useState([]);

    const [situacoes, setSituacoes] = useState([]);
    const [traumas, setTraumas] = useState([]);
    const [temperamentos, setTemperamentos] = useState([]);

    const Selecionar = async () => {
        axios.post(urlAPI + 'selanimal/filtrar', {
            TB_ANIMAL_ID: id
        }).then((response) => {
            setSelect(response.data[0]);
        }).catch((error) => {
            ToastAndroid.show('Erro ao exibir itens ' + error.response.data.message, ToastAndroid.SHORT);
        })
        axios.get(urlAPI + 'seltemperamentos/' + id).then(response => {
            setTemperamentos(response.data)
        })
        axios.get(urlAPI + 'selsituacoes/' + id).then(response => {
            setSituacoes(response.data)
        })
        axios.get(urlAPI + 'seltraumas/' + id).then(response => {
            setTraumas(response.data)
        })
    };

    useEffect(() => {
        Selecionar();
    }, [])

    if (select.TB_ANIMAL_IDADE_TIPO == 'MES' && select.TB_ANIMAL_IDADE == 1) {
        tipoIdade = 'Mês'
    } else if (select.TB_ANIMAL_IDADE_TIPO == 'ANO' && select.TB_ANIMAL_IDADE == 1) {
        tipoIdade = 'Ano'
    } else if (select.TB_ANIMAL_IDADE_TIPO == 'MES') {
        tipoIdade = 'Meses'
    } else {
        tipoIdade = 'Anos'
    }

    return (
        <div style={styles.ContainerMain}>
            <div style={styles.Container}>
                <div className="imgFicha">
                    <img src={urlAPI + 'selanimalimg/' + id} alt="Imagem do animal" />
                </div>
                <div style={styles.Conjunto1}>
                    <TextoComum textoTitulo='Nome:' textoDescricao={select.TB_ANIMAL_NOME} />
                    <TextoComum textoTitulo='Porte:' textoDescricao={select.TB_ANIMAL_PORTE == 'PEQUENO' ? 'Pequeno' : select.TB_ANIMAL_PORTE == 'MEDIO' ? 'Médio' : select.TB_ANIMAL_PORTE == 'GRANDE' ? 'Grande' : select.TB_ANIMAL_PORTE} />
                </div>
                <div style={styles.Conjunto2} className="groupBox">
                    <TextoComum textoTitulo={select.TB_ANIMAL_PESO} textoDescricao='Kg' />
                    <div style={styles.Barras} className="Barras">
                        <TextoComum textoDescricao={select.TB_ANIMAL_SEXO == 'MACHO' ? 'Macho' : 'Fêmea'} />
                    </div>
                    <TextoComum textoTitulo={select.TB_ANIMAL_IDADE} textoDescricao={tipoIdade} />
                </div>
                {temperamentos.length !== 0 &&
                    <div style={styles.Conjunto3}>
                        <TextoComum textoTitulo='Temperamento:' />
                        {temperamentos.map((item, index) => {
                            return (
                                <TextoMultiplo textoMultiplo={item.TB_TEMPERAMENTO.TB_TEMPERAMENTO_TIPO} key={index} />
                            )
                        })}
                    </div>}
                {situacoes.length !== 0 &&
                    <div style={styles.Conjunto3}>
                        <TextoComum textoTitulo='Situação:' />
                        {situacoes.map((item, index) => {
                            return (
                                <TextoMultiplo textoMultiplo={item.TB_SITUACAO.TB_SITUACAO_DESCRICAO} key={index} />
                            )
                        })}
                    </div>}
                {traumas.length !== 0 &&
                    <div style={styles.Conjunto3}>
                        <TextoComum textoTitulo='Trauma:' />
                        {traumas.map((item, index) => {
                            return (
                                <TextoMultiplo textoMultiplo={item.TB_TRAUMA.TB_TRAUMA_DESCRICAO} key={index} />
                            )
                        })}
                    </div>}
                {select.TB_ANIMAL_CUIDADO_ESPECIAL &&
                    <div style={styles.Conjunto3}>
                        <TextoComum textoTitulo='Cuidado:' />
                        <TextoMultiplo textoMultiplo={select.TB_ANIMAL_CUIDADO_ESPECIAL} />
                    </div>}
                <div style={styles.Conjunto4}>
                    {select.TB_ANIMAL_CASTRADO == 'SIM' &&
                        <TextoOpcional textosOpcionais='Castrado(a)' />}
                    {select.TB_ANIMAL_VERMIFUGADO == 'SIM' &&
                        <TextoOpcional textosOpcionais='Vermifugado(a)' />}
                    {select.TB_ANIMAL_MICROCHIP == 'SIM' &&
                        <TextoOpcional textosOpcionais='Microchipado(a)' />}
                </div>
                <div style={styles.GroupBox} className="groupBox">
                    <p style={styles.Titulo}>Descrição</p>
                    <TextoMenor textoDescricao={select.TB_ANIMAL_DESCRICAO} />
                    <TextoMenor textoTitulo='Local do resgate:' textoDescricao={select.TB_ANIMAL_LOCAL_RESGATE} />
                </div>
                <div style={styles.GroupBox} className="groupBox">
                    <p style={styles.Titulo}>Localização</p>
                    <div style={styles.GroupBox2}>
                        <p style={styles.TextoClaro}>{select.TB_ANIMAL_LOCALIZACAO_CIDADE}</p>
                        <p style={styles.TextoEscuro}>{select.TB_ANIMAL_LOCALIZACAO_UF}</p>
                    </div>
                    <div style={styles.GroupBox2}>
                        <p style={styles.TextoClaro}>{select.TB_ANIMAL_LOCALIZACAO_BAIRRO},</p>
                    </div>
                    <div style={styles.GroupBox2}>
                        <p style={styles.TextoClaro}>{select.TB_ANIMAL_LOCALIZACAO_RUA}</p>
                    </div>
                </div>
                <div style={styles.ConjuntoBotao}>
                    <BotaoCadastrar onClick={() => window.location.href = '/'} texto='Adotar' />
                </div>
            </div>
        </div>
    )
}

const styles = ({
    ContainerMain: {
        width: '100%',
        backgroundColor: corFundo,
    },
    Container: {
        width: '90%',
        margin: 'auto'
    },
    Conjunto1: {
        justifyContent: "space-between",
        flexDirection: "row",
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        display: 'flex',
    },
    Conjunto2: {
        borderColor: corBordaBoxCad,
        display: 'flex',
        borderWidth: 2,
        borderRadius: 20,
        justifyContent: "space-around",
        flexDirection: "row",
        margin: 16,
    },
    Conjunto3: {
        marginTop: 2,
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10,
        flexWrap: "wrap"
    },
    Conjunto4: {
        marginTop: 2,
        justifyContent: "space-around",
        flexDirection: "row",
        display: 'flex',
        alignItems: "center",
        padding: 20,
        marginLeft: 40,
        marginRight: 40,
        flexWrap: "wrap"
    },
    GroupBox: {
        padding: 10,
        borderRadius: 10,
        margin: 20,
        marginBottom: 30,
        position: 'relative',
    },
    Titulo: {
        marginLeft: '8%',
        fontSize: 20,
        color: "#096D82",
        position: 'absolute',
        top: -17,
        marginBottom: 16,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: corFundo,
    },
    Barras: {
        flex: 0.5,
        borderLeftWidth: 2,
        alignItems: "center",
        borderRightWidth: 2,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: "row",
    },
    GroupBox2: {
        margin: '1%',
        marginHorizontal: '2%',
        flexDirection: "row",
        flexWrap: "wrap",
        display: 'flex',
    },
    TextoClaro: {
        color: '#299FB8',
        fontSize: 16,
        marginRight: 7,
        marginLeft: 7
    },
    TextoEscuro: {
        color: '#096D82',
        fontSize: 16,
        paddingRight: 5
    },
    ConjuntoBotao: {
        display: 'flex',
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
    }
});

export default Ficha