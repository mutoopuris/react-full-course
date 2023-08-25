import React, {useState, useEffect} from 'react';

const CleanupEffect = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() =>{
        console.log('Effect ran');

        return () => {
            console.log('Cleanup ran')
        }
    },[visible]);
    return(
        <div>
            <p>You can perform cleanup actions when the component unmounts or when the effects dependencies change.</p>
            <div>
                {visible ? <p>This will be unmounted</p>: null}
                <button onClick={()=> setVisible(!visible)}>Toggle</button>
            </div>
        </div>
    )
}
export default CleanupEffect;