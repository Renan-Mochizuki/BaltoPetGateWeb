import { corFundoCad } from "../../constants";

const ContainerCadastro = (props) => {
  return (
    <div style={style.container} className="ContainerCadastro">
      <img style={style.imagem} src="./img/Logo.png" />
      <p style={style.titulo}>{props.titulo}</p>
      {props.children}
    </div>
  );
};
const style = ({
  container: {
    width: '100%',
    // height: '100%',
    backgroundColor: corFundoCad,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  imagem: {
    height: 150,
    width: 150,
    marginTop: 50,
  },
  titulo: {
    fontSize: 25,
    color: "#5D8366",
    marginBottom: 15,
    marginTop: 5,
  },
});

export default ContainerCadastro