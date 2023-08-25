import React, { useState } from 'react';

const ConditionalRendering = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogin = () => {
        setIsLoggedIn(true)
    };
    return(
        <div>
            <h3>Condition Rendering App</h3>
            {isLoggedIn ? (
                <p>Welcome, User!</p>
            ) : (
                <button onClick={handleLogin}>Login</button>
            )}
        </div>
    )
}
export default ConditionalRendering;