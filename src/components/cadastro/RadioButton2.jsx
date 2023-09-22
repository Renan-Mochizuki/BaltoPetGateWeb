import { useState } from 'react';
import { corBotaoCad, corPlaceholderCad } from '../../constants';

const RadioButton2 = (props) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionPress = (option) => {
        props.set(option)
        setSelectedOption(option)
    };

    return (
        <div style={styles.container}>
            <button
                style={[styles.optionButton, selectedOption === true && styles.selectedOption]}
                onClick={() => handleOptionPress(true)}>
                <p style={[styles.optionText, selectedOption === true && styles.selectedText]}>Saudável</p>
            </button>
            <button
                style={[styles.optionButton, selectedOption === false && styles.selectedOption]}
                onClick={() => handleOptionPress(false)}
            >
                <p style={[styles.optionText, selectedOption === false && styles.selectedText]}>Não Saudável</p>
            </button>
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
        color: corPlaceholderCad
    },
    selectedOption: {
        backgroundColor: corBotaoCad,
    },
    selectedText: {
        color: '#FFF'
    }
});

export default RadioButton2;
