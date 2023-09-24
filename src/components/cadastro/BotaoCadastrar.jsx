const BotaoCadastrar = (props) => {
    return (
        <button style={styles.botaocadastro} {...props}>
            {props.texto ? props.texto : 'Cadastrar'}
        </button>
    )
}

const styles = ({
    botaocadastro: {
        width: '80%',
        minHeight: 50,
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#E0A8A8",
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 35,
        elevation: 5,
        color: "#fff",
        fontSize: 20,
    }
});

export default BotaoCadastrar