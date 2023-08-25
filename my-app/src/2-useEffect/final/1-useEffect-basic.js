import React, {useEffect, useState} from 'react';

const Final5 = () => {
    const [count, setCount] = useState(0);



    useEffect(() => {
            console.log("Hello I am coming from useEffect", count);
    },[count]);
    return (
        <div>
            <h1> I am coming from useEffect</h1>
            <h2>{count}</h2>
            <button onClick={()=>{setCount(count + 1);
            }}> + </button>
        </div>
    )
}

export default Final5;