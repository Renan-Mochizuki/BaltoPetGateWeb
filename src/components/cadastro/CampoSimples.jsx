import { corFundoCampoCad, corPlaceholderCad } from "../../constants";

const CampoSimples = (props) => {

    return (
        <div style={style.containercampo}>
            <div style={style.caixacampo}>
                <input onChange={(text) => props.set(text.target.value)} style={style.campo} value={props.val} placeholder={props.placeholder} type={props.type} />
                {!props.opcional && <p style={style.asterisco}>*</p>}
            </div>
        </div>
    )
}
const style = ({
    containercampo: {
        display: "flex",
        flexDirection: "column",
        width: "95%",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 5,
        marginBottom: 5,
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
        width: "100%",
    },
    campo: {
        flex: 1,
        fontSize: 18,
        paddingLeft: 12,
        backgroundColor: corFundoCampoCad,
        borderRadius: 20,
        color: '#000',
        paddingTop: 10,
        paddingBottom: 10,
    },
    asterisco: {
        fontSize: 25,
        color: 'red',
        marginRight: 10,
    },
});
export default CampoSimples