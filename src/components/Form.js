import React, { useState } from 'react';

const Form = (props) => {

    const handleChange = evt => {
        const { name, value } = evt.target;
        props.change(name, value);
    }
    const handleSubmit = evt => {
        evt.preventDefault();
        props.submit()
    }
    return (
        <form onSubmit={handleSubmit}>
            <label> Name
                <input 
                    placeholder='name'
                    value={props.values.name}
                    name='name'
                    onChange={handleChange}
                />
            </label>
            <label> Email
                <input 
                     placeholder='Enter your email here'
                     value={props.values.email}
                     name='email'
                     onChange={handleChange}
                />
            </label>
            <label> Role
                <input 
                    placeholder='Whats your Role?'
                    value={props.values.role}
                    name='role'
                    onChange={handleChange}
                />
                <button type='submit'>Create your team</button>
            </label>
        </form>
    )
}

export default Form;