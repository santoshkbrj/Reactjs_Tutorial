import React from 'react'
import useLocalStorage from '../context/custom hook/useLocalStorage'

function CustomeHook() {
    const [name, setName] = useLocalStorage('username', '')
    const [id, setId] = useLocalStorage('userid', '')
    return (
        <div>
            <h1>{name}</h1>
            <input type="text" placeholder='Enter your name'
                value={name} onChange={(e) => setName(e.target.value)} />
            <hr />
            <h1>{id}</h1>
            <input type="number" placeholder='Enter your Id'
                value={id} onChange={(e) => setId(e.target.value)} />
        </div>
    )
}

export default CustomeHook