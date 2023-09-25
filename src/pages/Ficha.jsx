import BotaoCadastrar from "../components/cadastro/BotaoCadastrar"
import TextoComum from "../components/ficha/TextoComum"
import TextoMultiplo from "../components/ficha/TextoMultiplo"
import TextoMenor from "../components/ficha/TextoMenor"
import TextoOpcional from "../components/ficha/TextoOpcional"
import {corFundo, corFundoCad, corFundoCampoCad, corPlaceholderCad, corTextoBotaoCad, corBordaBoxCad } from "../constants";

const Ficha = () => {
  return (
    <div>
    <div style={styles.Container}>
        {/* <img style={styles.Imagem} resizeMode='cover' source={require('../../assets/img/dog.png')} /> */}
        <div style={styles.Conjunto1}>
            <TextoComum textoTitulo='Nome:' textoDescricao='Nilsinho' />
            <TextoComum textoTitulo='Porte:' textoDescricao='Médio' />
        </div>
        <div style={styles.Conjunto2} className="groupBox">
            <TextoComum textoTitulo='12' textoDescricao='Kg' />
            <div style={styles.Barras} className="Barras">
                <TextoComum textoDescricao='Macho' />
            </div>
            <TextoComum textoTitulo='2' textoDescricao='Ano(s)' />
        </div>
        <div style={styles.Conjunto3}>
            <TextoComum textoTitulo='Temperamento:' />
            <TextoMultiplo textoMultiplo='Aaaaaa' />
        </div>
        <div style={styles.Conjunto3}>
            <TextoComum textoTitulo='Situação:' />
            <TextoMultiplo textoMultiplo='Aaaaaa' />
        </div>
        <div style={styles.Conjunto3}>
            <TextoComum textoTitulo='Trauma:' />
            <TextoMultiplo textoMultiplo='Aaaaaa' />
        </div>
        <div style={styles.Conjunto3}>
            <TextoComum textoTitulo='Cuidado:' />
            <TextoMultiplo textoMultiplo='Aaaaaa' />
        </div>
        <div style={styles.Conjunto4}>
            <TextoOpcional textosOpcionais='Castrado(a)' />
            <TextoOpcional textosOpcionais='Vermifugado(a)' />
            <TextoOpcional textosOpcionais='Microchipado(a)' />
        </div>
        <div style={styles.GroupBox} className="groupBox">
            <p style={styles.Titulo}>Descrição</p>
            <TextoMenor textoDescricao='Duis sed lacinia nisi, nec condimentum tellus. Mauris bibendum orci at malesuada tincidunt. Vivamus id finibus augue, non hendrerit risus. Etiam in nunc egestas, sagittis ex ac, dictum ex. Curabitur et pulvinar augue. Mauris nec porttitor felis. Aliquam in eros sed nunc pellentesque posuere...' />
            <TextoMenor textoTitulo='Cor(es):' textoDescricao='dhgfdyfgdfgdifgdfgdfgdufgd' />
            <TextoMenor textoTitulo='Local do resgate:' textoDescricao='Médio' />
        </div>
        <div style={styles.GroupBox} className="groupBox">
            <p style={styles.Titulo}>Localização</p>
            <div style={styles.GroupBox2}>
                <p style={styles.TextoClaro}>São Miguel do Gostoso</p>
                <p style={styles.TextoEscuro}>SP</p>
            </div>
            <div style={styles.GroupBox2}>
                <p style={styles.TextoClaro}>São Miguel do Gostoso</p>
                <p style={styles.TextoEscuro}>,</p>
                <p style={styles.TextoClaro}>São Miguel do Gostosok,k,k,j</p>
            </div>
        </div>
        <div style={styles.ConjuntoBotao}>
            <BotaoCadastrar />
        </div>
    </div>
</div>
  )
}


const styles = ({
    Container: {
        width: '100%',
        flex: 1,
        backgroundColor: corFundo,
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
        justifyContent: "space-between",
        flexDirection: "row",
        display: 'flex',
        alignItems: "center",
        padding: 20,
        marginLeft: 40,
        marginRight: 40,
        flexWrap: "wrap"
    },
    GroupBox: {
        margin: '2%',
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
    Imagem: {
        width: '100%'
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
        justifyContent: "space-between",
        flexDirection: "row",
        display: 'flex',
        alignItems: "center",
    }

});

export default Ficha