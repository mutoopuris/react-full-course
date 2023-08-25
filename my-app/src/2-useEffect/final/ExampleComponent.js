import React,{useState,useEffect} from 'react';

const ExampleComponent = () => {
    const [count,setCount] = useState(0);
    // This effect only runs when the count changes
    useEffect(() => {
        document.title = `count: ${count}`;
    })
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}
export default ExampleComponent;