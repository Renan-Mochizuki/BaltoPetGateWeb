const TextoOpcional = (props) => {
    return(
        <div style={styles.Container}>
            <p style={styles.Descricao}>
                {props.textosOpcionais}
            </p>
        </div>
    )
}

const styles = ({
    Container:{
        backgroundColor:'#FAF1F1',
        marginLeft: 5,
        borderColor: '#CE7272',
        borderWidth: 2,
        borderRadius: 12,
        padding: 6
    },
    Descricao:{
        color: '#CE7272',
        fontSize: 18,
        margin: 3
    }
});

export default TextoOpcional;