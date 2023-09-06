import React, {useRef, useState} from 'react';

const ExampleRefComponent = () =>{
    const [count, setCount] = useState(0);
    const buttonRef = useRef('Click Me');
    console.log(buttonRef);

    const handleButtonClick = () => {
        setCount(count + 1);
        buttonRef.current = 'Clicked!'
        console.log(buttonRef.current);
    }
    return(
        <>
        <h1>Example of useRef Component. {count}</h1>
    <h2>useRef Updated {buttonRef.current}</h2>
    <button onClick={handleButtonClick}>{buttonRef.current}</button>
    <h2>useRef Updated {buttonRef.current}</h2>

        </>
    )
}

export default ExampleRefComponent;