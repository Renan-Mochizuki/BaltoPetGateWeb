const TextoMultiplo = (props) => {
    return(
        <div style={styles.Container}>
            <p style={styles.Descricao}>
                {props.textoMultiplo}
            </p>
        </div>
    )
}

const styles = ({
    Container:{
        backgroundColor:'#fff',
        marginLeft: 5,
        borderColor: '#82D7E9',
        borderWidth: 2,
        borderRadius: 12,
        padding: 6
    },
    Descricao:{
        color: '#299FB8',
        fontSize: 15,
        marginRight: 7,
        marginLeft: 7
    }
});

export default TextoMultiplo;