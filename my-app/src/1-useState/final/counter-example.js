import React, {useState} from 'react';

const CounterFinal = () => {
    const [count,setCount] = useState(0);
    const incrementData = () => {
        setCount((prevCount) => {
            return prevCount + 1;
        })
    }

    const decrementData = () => {
        setCount((prevCount)=> {
            return prevCount - 1;
        })
    }

    return(
        <div>
            <h1>Counter example: {count}</h1>
            <button onClick={incrementData}>Increment</button>
            <button onClick={decrementData}>Decrement</button>
        </div>
    )
}
export default CounterFinal;