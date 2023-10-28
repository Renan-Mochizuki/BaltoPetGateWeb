import { useState, useEffect } from 'react'

const Imagem = (props) => {
    const [imageExists, setImageExists] = useState(true);

    const ChecarImagem = async () => {
        try {
            const response = await fetch(props.url);
            setImageExists(response.ok);
            if (props.setResult) props.setResult(response.ok)
        } catch (error) {
            setImageExists(false);
            if (props.setResult) props.setResult(false)
        }
    };

    useEffect(() => {
        ChecarImagem();
    }, [props.url]);

    return (
        <>
            {imageExists ?
                <img src={props.url} alt={props.alt} />
                :
                !props.remove &&
                <img src={'https://via.placeholder.com/100'} alt={props.alt} />
            }
        </>
    )
}

export default Imagem