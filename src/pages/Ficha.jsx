import { useParams } from "react-router-dom";

const Ficha = () => {
  const { id } = useParams();
  return (
    <div>Ficha</div>
  )
}

export default Ficha