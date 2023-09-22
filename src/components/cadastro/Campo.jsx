const Campo = (props) => {
  return (
        <div>
            <input onChange={text => props.set(text.target.value)}  style={style.campo} {...props} />
            {props.opcional ? <></> : <p style={style.asterisco}>*</p>}
        </div>
  )
}
const style = ({
    campo: {
        flex: 1,
        fontSize: 18,
        paddingLeft: 10,
        paddingRight: 10,

    },
    asterisco: {
        position: 'absolute',
        fontSize: 25,
        color: 'red',
        right: -10,
        top: -5,
        bottom: 0,
    },
});
export default Campo