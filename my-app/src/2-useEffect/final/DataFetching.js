import React, {useState,useEffect} from 'react';

const FetchDataFromAPI = () => {

    
    const listStyle = {
        listStyleType: 'none',
        color: 'red',
        display: 'inline-block',
      };

    const [data,setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        //fetch data from an API

        fetch('http://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            setData(data);
            setLoading(false);
        })
        .catch((error)=> {
            console.log(error);
            setLoading(false);
        })
    }, []); //Empty Dependency array means the effect runs once after the initial render
    if(loading) {
        return <div>Loading....</div>
    }
    return(
        <div>
            <h1>Data from API</h1>
            <ul>
                {data.map(item => (
                    <li key={item.id} style={listStyle}>
                        <div>{item.title}</div>
                        <div>{item.body}</div>
                        
                        
                        </li>
                    
                ))}
            </ul>
        </div>
    )
}

export default FetchDataFromAPI;