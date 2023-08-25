import React, { useState } from "react";

const Index = () => {
    const [count,setCount] = useState(0);
    //console.log(useState());

    console.log(count)
    
    const incrementCount = () => {
        //setCount(count + 1);
        setCount((prevCount) => {
            return prevCount + 1;
        })
    }
    const decrementCount = () => {
        //setCount( count - 1);
        setCount((prevCount) => {
            return prevCount - 1;
        })
    }

    return (
        <>
        <button onClick={decrementCount}> - </button>
        <span>{count}</span>
        <button onClick={incrementCount}> + </button>
        </>
    )

}

export default Index;