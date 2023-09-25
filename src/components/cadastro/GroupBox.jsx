import { corBordaBoxCad, corFundoCad, corTituloBoxCad } from "../../constants";

const GroupBox = (props) => {
  return (
    <div style={style.groupBox} className="groupBox">
      <p style={style.titulo}>{props.titulo}</p>
      {props.children}
    </div>
  )
}
const style = ({
  groupBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '50%',
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
    position: 'relative',
  },
  titulo: {
    fontSize: 22,
    color: corTituloBoxCad,
    position: 'absolute',
    top: -20,
    marginBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: corFundoCad,
  },
});
export default GroupBox