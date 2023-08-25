/**
 * You can use useState to manage lists that can be dynamically updated.
 */
import React, { useState } from 'react';


const ComplexState = () => {
    const fruits =['Apple', 'Banana', 'Orange']
    const [items, setItem] = useState(fruits);

    const addItem = () => {
        const newItem = prompt('Enter a new item:');
        if(newItem) {
            setItem([...items,newItem])
        }
    }
    return(
        <div>
            <h3>Fruits Info</h3>
            <ul>
                {items.map((item,index)=> (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <button onClick={addItem}>Add Item</button>
        </div>
    )
}

export default ComplexState;