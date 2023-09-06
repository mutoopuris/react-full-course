import React, { useState } from  "react";

const Index2 = () => {
    const initialArray = [
        {   
            id: 1234,
            firstName: 'Sai',
            lastName: 'Mutoopuri',
            age: 45
        },
        {
            id: 24994,
            firstName: 'Ajitha',
            lastName: 'Gampa',
            Age: 35
        },
        {
            id: 8999,
            firstName: 'Don',
            lastName: 'Seenu',
            Age: 40
        }
    ];
        const [data,setData] = useState(initialArray);
        console.log(data);

        const handleDelete = (comingId) => {
            const filterData = data.filter((item)=> {
                return item.id !== comingId;
            });
            setData(filterData);
        }

    return (
        <>
        <ul>
            {data.map((eachItem,index) => {
                const {firstName,lastName,age, id} = eachItem
                return (
                    <li key={index}>
                        <div>
                            my firstName <strong>{firstName}</strong>
                        </div>
                        <div>
                my lastName <strong>{lastName}</strong>
                        </div>
                        <div>
                my age <strong>{age}</strong>
                        </div>
                        <button onClick={()=> handleDelete(id)}>Delete me</button>
                    </li>
                )
            })}
        </ul>
        </>
    );
}
export default Index2;