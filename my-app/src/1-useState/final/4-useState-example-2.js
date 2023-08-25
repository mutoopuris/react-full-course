import React, { useState } from 'react';

const Index = () => {

    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const changeFirstName = (e) => {
    //     console.log(e.target.value)
    //     setFirstName(e.target.value);
    // }

    // const changeEmail = (e) => {
    //     setEmail(e.target.value);
    // }

    // const changePassword = (e) => {
    //     setPassword(e.target.value);
    // }

    const handleInputChange = (e, name) => {
        if(name === 'firstName') {
            setFirstName(e.target.value);
        } else if(name === 'email') {
            setEmail(e.target.value);
        } else if(name === 'password') {
            setPassword(e.target.value);
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        let userObj = {
            firstname: firstName,
            email: email,
            password:password
        }
        console.log(userObj)
    }
    return (
        <div>
        <form onSubmit ={handleSubmit}>
            <div className="form-content">
                <input
                type="text"
                name="firstname"
                id="firstname"
                value={firstName}
                placeholder="Enter your name"
                //onChange ={changeFirstName}
                onChange = {(e) => handleInputChange(e,'firstName')}
                />
            </div>
            <div className="form-content">
                <input
                type="email"
                name="email"
                id="email"
                value={email}
                placeholder="Enter your email"
                // onChange = {changeEmail}
                onChange = {(e)=> handleInputChange(e,'email')}
                />
            </div>
            <div className="form-content">
                <input
                type="password"
                id="password"
                value={password}
                placeholder="Enter your password"
                // onChange = {changePassword}
                onChange= {(e)=> handleInputChange(e, 'password')}
                // onChange = {(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="form-button">
                <button type="submit">Submit</button>
            </div>
        </form>
        </div>
    )
}
export default Index;