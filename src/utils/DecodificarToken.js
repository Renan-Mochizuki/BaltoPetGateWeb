import { chaveToken } from "../constants";
import jwtDecode from "jwt-decode";

export default async function DecodificarToken() {
    try {
        const TokenUsuario = await localStorage.getItem('token');
        const decodedToken = jwtDecode(TokenUsuario);
        const { TB_PESSOA_IDD, TB_TIPO_IDD } = decodedToken;
        return { TB_PESSOA_IDD, TB_TIPO_IDD };
    } catch (erro) {
        console.error("Erro no token:", erro)
    }
}