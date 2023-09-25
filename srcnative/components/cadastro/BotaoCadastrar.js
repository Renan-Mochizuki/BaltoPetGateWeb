import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const BotaoCadastrar = (props) => {
    return (
        <TouchableOpacity {...props} style={styles.botaocadastro}>
            <Text style={styles.textocadastro}>{props.texto ? props.texto : 'Cadastrar'}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    botaocadastro: {
        width: '80%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#E0A8A8",
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 35,
        elevation: 5,
    },
    textocadastro: {
        color: "#fff",
        fontSize: 20,
    },
});

export default BotaoCadastrar