import { useState, useEffect } from "react";
import axios from "axios";
import { corBotaoCad, corDicaCad, corFundoCampoCad, corTextoBotaoCad, valorBordaCampoCad } from "../../constants";
import CampoSimples from "./CampoSimples";

let opcional;

const CampoEndereco = (props) => {
    opcional = props.opcional;
    const [cep, setCep] = useState('');
    const [uf, setUf] = useState('');
    const [cidade, setCidade] = useState('');
    const [bairro, setBairro] = useState('');
    const [rua, setRua] = useState('');

    const ufs = [
        { label: 'AC', value: 'AC' },
        { label: 'AL', value: 'AL' },
        { label: 'AP', value: 'AP' },
        { label: 'AM', value: 'AM' },
        { label: 'BA', value: 'BA' },
        { label: 'CE', value: 'CE' },
        { label: 'DF', value: 'DF' },
        { label: 'ES', value: 'ES' },
        { label: 'GO', value: 'GO' },
        { label: 'MA', value: 'MA' },
        { label: 'MT', value: 'MT' },
        { label: 'MS', value: 'MS' },
        { label: 'MG', value: 'MG' },
        { label: 'PA', value: 'PA' },
        { label: 'PB', value: 'PB' },
        { label: 'PR', value: 'PR' },
        { label: 'PE', value: 'PE' },
        { label: 'PI', value: 'PI' },
        { label: 'RJ', value: 'RJ' },
        { label: 'RN', value: 'RN' },
        { label: 'RS', value: 'RS' },
        { label: 'RO', value: 'RO' },
        { label: 'RR', value: 'RR' },
        { label: 'SC', value: 'SC' },
        { label: 'SP', value: 'SP' },
        { label: 'SE', value: 'SE' },
        { label: 'TO', value: 'TO' },
    ];
    const [cidades, setCidades] = useState([]);

    const BuscarEndereco = async (cep) => {
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            const endereco = response.data;
            await ListarCidades(endereco.uf);
            setUf(endereco.uf)
            setCidade(endereco.localidade);
            setBairro(endereco.bairro);
            setRua(endereco.logradouro);
            props.set2(endereco.uf);
            props.set3(endereco.localidade);
            props.set4(endereco.bairro);
            props.set5(endereco.logradouro);

            if (endereco.erro) {
                console.error('erro')
            }
        } catch (error) {
            alert('CEP inválido. Certifique-se de que o CEP está correto.');
        }
    };

    let tentativa = 0;

    const ListarCidades = async (uf) => {
        try {
            const response = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`);
            const cidadesData = response.data.map(city => ({
                label: city.nome,
                value: city.nome,
            }));
            setCidades(cidadesData);
        } catch (error) {
            if (tentativa === 0) {
                await new Promise(resolve => setTimeout(resolve, 1000));
                tentativa += 1;
                await ListarCidades(uf);
            } else {
                console.error('erro ao buscar cidade')
            }
        }
    };

    const [textoDica, setTextoDica] = useState(false);

    const [texto, setTexto] = useState('');
    const formatarTextoCampo = (text) => {
        const dataFormatadaCampo = text.replace(/[\D.\-a-zA-Z]/g, '');
        setCep(dataFormatadaCampo);
        if (props.set1)
            props.set1(1);

        if (dataFormatadaCampo.length <= 5) {
            setTexto(dataFormatadaCampo);
        } else {
            const dataFormatada = `${dataFormatadaCampo.slice(0, 5)}-${dataFormatadaCampo.slice(5, 8)}`;
            setTexto(dataFormatada);
            if (props.set1 && dataFormatadaCampo.length == 8)
                props.set1(dataFormatadaCampo);
        }
    };

    useEffect(() => {
        if (props.set1 && props.val1) {
            formatarTextoCampo(props.val1)
        }
        setUf(props.val2 || '');
        ListarCidades(props.val2 || '');
        setCidade(props.val3 || '');
        setBairro(props.val4 || '');
        setRua(props.val5 || '');
    }, [])


    return (
        <div style={style.containercampo}>
            {opcional && <p style={style.titulocampo}>Localização (Opcional):</p>}
            <div>
                <CampoSimples set={formatarTextoCampo} val={texto} maxLength={9} placeholder={opcional ? "CEP (Opcional)" : "CEP"} onFocus={() => setTextoDica(true)} onBlur={() => setTextoDica(false)} type='numeric' />
            </div>
            {textoDica && <p style={style.dica}>Insira apenas números</p>}
            <button onClick={() => BuscarEndereco(cep)} className="botaoCadastro" style={style.botaopesquisar}>
                <p style={style.textocadastro}>Pesquisar CEP</p>
            </button>
            <div style={style.subcontainer}>
                <CampoSimples placeholder='UF' set={props.set2} val={uf} />
            </div>
            <div>
                <CampoSimples placeholder='Cidade' set={props.set3} val={cidade} />
            </div>
            <div>
                <CampoSimples placeholder='Bairro' set={props.set4} val={bairro} />
            </div>
            <div>
                <CampoSimples placeholder='Rua' set={props.set5} val={rua} />
            </div>
            {props.set1 && <>
                <div>
                    <input onChange={text => props.set6(text.target.value)} placeholder={"Número"} type='numeric' style={style.campo} />
                    {!opcional && <p style={style.asterisco}>*</p>}
                </div>
                <input onChange={text => props.set7(text.target.value)} placeholder={"Complemento"} style={style.campo} />
            </>}

        </div>
    )
}

const style = ({
    containercampo: {
        width: '95%',
        color: '#000',
    },
    subcontainer: {
        margin: 'auto'
    },
    titulocampo: {
        fontSize: 18,
        marginBottom: 5,
        color: '#fff',
        textAlign: 'center',
    },
    selecionar: {
        width: '100%',
        backgroundColor: corFundoCampoCad,
        borderRadius: valorBordaCampoCad,
        marginTop: 5,
        marginBottom: 5,
    },
    picker: {
        fontSize: 18,
    },
    campo: {
        width: '100%',
        fontSize: 18,
        paddingLeft: 10,
        paddingRight: 10,
        padding: 5,
        backgroundColor: corFundoCampoCad,
        borderRadius: valorBordaCampoCad,
        marginTop: 5,
        marginBottom: 5,
    },
    dica: {
        fontSize: 14,
        color: corDicaCad,
        textAlign: 'center',
    },
    botaopesquisar: {
        width: '95%',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: corBotaoCad,
        borderRadius: valorBordaCampoCad,
        elevation: 5,
        marginTop: 5,
        marginBottom: 15,
    },
    textocadastro: {
        color: corTextoBotaoCad,
        fontSize: 18,
    },
    asterisco: {
        position: 'absolute',
        fontSize: 25,
        color: 'red',
        right: 10,
        bottom: 5,
    },
});

export default CampoEndereco