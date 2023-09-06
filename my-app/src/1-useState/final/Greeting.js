import React, { useState } from 'react';

const Greeting = ({props}) =>{
    
    const [index, setIndex] = useState(0);
    const handleClick = () => {
        const nextIndex = index === greetings.length -1 ? 0 : index + 1
        setIndex(nextIndex);
    }
    const greetings = ['Hello', 'Hola', 'Bonjour'];
    return (
        <main>
           <h1>{greetings[index]}, {props}</h1> 
           <button onClick={handleClick}>Next Greeting</button>
        </main>
    )
};

export default Greeting;