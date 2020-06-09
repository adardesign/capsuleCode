import React from 'react'

export default function Login({onLogin}) {
    const onSubmit = (e) => {
        e.preventDefault();
        // get values..
        // call onLogin
        const values = {
            // access natively 
        }
        onLogin(values);
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input  name="username" placeholder="username"/>
                <input type="password" name="password" placeholder="password"/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
