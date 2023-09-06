import React, { useState, useRef, useEffect } from 'react';

const ExampleUseRef = () => {
    const [firstName,setFirstName] = useState("");
    const renderCount = useRef(1);
    useEffect(()=> {
        renderCount.current = renderCount.current + 1;
    })
    return(
        <>
        <input type="text" name="firstName" id="firstName" onChange={(e)=>setFirstName(e.target.value)}/>
    <h3>Typing:{firstName}</h3>
        <h3>Counter render {renderCount.current} times</h3>
        </>
    )
}

export default ExampleUseRef;