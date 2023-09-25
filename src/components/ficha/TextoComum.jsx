const TextoComum = (props) => {
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
        display: 'flex',
        padding: 10
    },
    Titulo:{
        color: '#096D82',
        fontSize: 20,
        paddingRight: 7  
    },
    Descricao:{
        color: '#299FB8',
        fontSize: 20
    }
});

export default TextoComum;