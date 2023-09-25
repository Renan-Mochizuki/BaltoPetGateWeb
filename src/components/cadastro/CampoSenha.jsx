import { useState } from 'react';
import { corDicaCad, corFundoCampoCad, corPlaceholderCad, valorBordaCampoCad } from '../../constants';
import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa';

const CampoSenha = (props) => {
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [textoDica, setTextoDica] = useState(false);
    return (
        <div style={styles.containercampo}>
            <div style={styles.containercamposenha}>
                <div style={styles.caixacampo}>
                    <input
                        onChange={(text) => props.set1(text.target.value)}
                        placeholder={"Senha"}
                        style={styles.campo}
                        type={mostrarSenha ? 'text' : 'password'}
                    />
                    <button
                        onClick={() => setMostrarSenha(!mostrarSenha)}
                        style={styles.botaoSenha}
                    >
                        {mostrarSenha ? (
                            <FaRegEyeSlash color="grey" size={30} />
                        ) : (
                            <FaRegEye color="grey" size={30} />
                        )}
                    </button>
                    {!props.opcional && <p style={styles.asterisco}>*</p>}
                </div>
            </div>
            <div style={styles.containercamposenha}>
                <div style={styles.caixacampo}>
                    <input
                        onChange={(text) => props.set2(text.target.value)}
                        placeholder={"Confirmação de senha"}
                        style={styles.campo}
                        type={mostrarSenha ? 'text' : 'password'}
                    />
                    <button
                        onClick={() => setMostrarSenha(!mostrarSenha)}
                        style={styles.botaoSenha}
                    >
                        {mostrarSenha ? (
                            <FaRegEyeSlash color="grey" size={30} />
                        ) : (
                            <FaRegEye color="grey" size={30} />
                        )}
                    </button>
                    {!props.opcional && <p style={styles.asterisco}>*</p>}
                </div>
            </div>
            {textoDica && <p style={styles.dica}>A senha deve possuir no mínimo 8 caracteres, um número e uma letra maíscula</p>}
        </div>
    )
}

const styles = ({
    containercampo: {
        display: "flex",
        flexDirection: "column",
        width: "95%",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    containercamposenha: {
        display: "flex",
        padding: 5,
        flexDirection: "row",
        width: "100%",
        height: 45,
        justifyContent: "flex-start",
        alignItems: "center",
        columnGap: 10,
    },
    campo: {
        flex: 1,
        fontSize: 18,
        height: "100%",
        paddingLeft: 12,
        backgroundColor: corFundoCampoCad,
        borderRadius: 20,
        color: '#000'
    },
    caixacampo: {
        display: "flex",
        flexDirection: "row",
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        borderRadius: 20,
        height: "100%",
        backgroundColor: corFundoCampoCad,
    },
    botaoSenha: {
        marginRight: 10,
    },
    mensagem: {
        color: 'red',
    },
    dica: {
        fontSize: 14,
        color: corDicaCad,
        textAlign: 'center',
    },
    asterisco: {
        fontSize: 25,
        color: 'red',
        marginRight: 10,
    },
});

export default CampoSenha