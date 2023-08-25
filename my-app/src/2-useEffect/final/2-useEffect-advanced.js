import React, { useEffect, useState } from 'react';

const FinalAdvance = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount((prevCount) => {
            return prevCount + 1
        })
    }

    const [pageWidth, setPageWidth] = useState(window.innerWidth);
    useEffect(() => {
        const resizeHandler = () => {
            setPageWidth(window.innerWidth)
        };
        window.addEventListener("resize", resizeHandler);
        console.log("I am coming from useEffect Advance");
        
    },[])
    return (
        <>
        <h1>I am comming from useEffect Advance</h1>
        <h1>{pageWidth}</h1>
        <span>{count}</span>
        <button onClick={incrementCount}>+</button>

        </>
    );
} 

export default FinalAdvance;