import { useEffect } from "react"
import DecodificarToken from "../../utils/DecodificarToken";

let TB_PESSOA_IDD;

const Animal = () => {

  const Selecionar = async () => {
    const decodedToken = await DecodificarToken();
    TB_PESSOA_IDD = decodedToken.TB_PESSOA_IDD;
  }
  useEffect(()=>{
    Selecionar();
  })
  return (
    <div>Animal</div>
  )
}

export default Animal