import { useState } from 'react';
import { corBotaoCad, corPlaceholderCad } from '../../constants';

const RadioButton3 = (props) => {
    const options = ['SIM', 'NAO', 'INDEFINIDO'];
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionPress = (option) => {
        props.set(option);
        setSelectedOption(option);
    };

    return (
        <div style={styles.container}>
            {options.map((option) => (
                <button key={option}
                    style={[styles.optionButton, selectedOption === option && styles.selectedOption]}
                    onClick={() => handleOptionPress(option)}>
                    <p style={[styles.optionText, selectedOption === option && styles.selectedText]}>
                        {option === 'SIM' ? 'Sim' : option === 'NAO' ? 'Não' : 'Não sei informar'}
                    </p>
                </button>
            ))}
        </div>
    );
};

const styles = ({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    optionButton: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 15,
        margin: 5,
        backgroundColor: '#FFF',
    },
    optionText: {
        fontSize: 18,
        color: corPlaceholderCad,
    },
    selectedOption: {
        backgroundColor: corBotaoCad,
    },
    selectedText: {
        color: '#FFF',
    },
});

export default RadioButton3;