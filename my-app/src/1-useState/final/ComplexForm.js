import React, { useState } from 'react';

const ComplexForm = () => {
    const formField = {
        name: '',
        email: '',
        age: ''
    };

    const [formData, setFormData] = useState(formField);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div>
            <h3>Complex form Component</h3>
            <div>
                <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}/>
            </div>
        </div>
    )
}

export default ComplexForm;