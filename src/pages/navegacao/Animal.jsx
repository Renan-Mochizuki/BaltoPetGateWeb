import { useEffect, useState } from "react"
import DecodificarToken from "../../utils/DecodificarToken";

let TB_PESSOA_IDD;

const Animal = () => {
  const [autorizado, setAutorizado] = useState(false);

  const Selecionar = async () => {
    const decodedToken = await DecodificarToken();
    if (!decodedToken) {
      window.location.replace('/Login');
    } else {
      setAutorizado(true);
    }
    TB_PESSOA_IDD = decodedToken.TB_PESSOA_IDD;

  }
  useEffect(() => {
    Selecionar();
  })
  return (<>
    {!autorizado ?
      <></>
      :

      <div>Animal</div>}
  </>
  )
}

export default Animal