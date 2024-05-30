import React, { useState } from 'react'

export default function RegisterForm() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('')
    // console.log(useState())

    const [formFields, setFormFields] = useState({
        username: '',
        password: '',
        displayName: ''
    })
    const isDisabled = !formFields.username || !formFields.password || !formFields.displayName;

    console.log(formFields);


    return (
        <div>
            <form>
                <div>
                    <label htmlFor="username">Usernaem</label>
                    <input type="text" value={formFields.username} onChange={(e) => setFormFields((currentState) => (
                        { ...currentState, username: e.target.value }))} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" value={formFields.password} onChange={(e) => setFormFields((currentState) => (
                        { ...currentState, password: e.target.value }))} />
                </div>
                <div>
                    <label htmlFor="password">Display Name</label>
                    <input type="text" value={formFields.displayName} onChange={(e) => setFormFields((currentState) => (
                        { ...currentState, displayName: e.target.value }))} />
                </div>
                <button type='submit' disabled={isDisabled}>Submit</button> <br />
            </form>

            <span>Username: {formFields.username}</span><br />
            <span>Password: {formFields.password}</span><br />
            <span>Display Name: {formFields.displayName}</span><br />
        </div >
    )
}
