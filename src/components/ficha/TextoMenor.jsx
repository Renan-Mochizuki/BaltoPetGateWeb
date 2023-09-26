const TextoMenor = (props) => {
    return(
        <div style={styles.Container}>
            <p style={styles.Titulo}>
                {props.textoTitulo}
            </p>
            <p style={styles.Descricao}>
                {props.textoDescricao}
            </p>
        </div>
    )
}

const styles = ({
    Container:{
        flexDirection: 'row',
        padding: 6,
        display: 'flex',
    },
    Titulo:{
        color: '#096D82',
        fontSize: 16,
        paddingRight: 5
    },
    Descricao:{
        color: '#299FB8',
        fontSize: 16
    }
});

export default TextoMenor;