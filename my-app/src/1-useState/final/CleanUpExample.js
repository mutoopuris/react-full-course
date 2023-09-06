import React, { useState, useEffect } from 'react';

const CleanUpExample = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        if(loading) {

        }
    }, [])
    return(
        <>
        <div>
            {
            loading ? <p>loading...</p> : <p>Data: {data}</p>
            }
            <button onClick={()=> setLoading(false)}>Load Data</button>
        </div>
        </>
    )
}

export default CleanUpExample;