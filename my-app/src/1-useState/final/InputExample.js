import React,{useState} from 'react';

const InputExample = () => {
    const [inputValue, setInputValue] = useState('');

    const changeInputValue = (e) => {
        setInputValue(e.target.value)
    }

    return(
        <div>
            <h3>This is Input example.</h3>
            <input type="text"
            value={inputValue}
            onChange={changeInputValue}/>
            <p>Input value: {inputValue}</p>

        </div>
    )
}

export default InputExample;