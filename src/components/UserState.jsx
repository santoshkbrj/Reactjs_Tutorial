import React, { useState } from 'react'
import UserDetails from './UserDetails';

export default function UserState() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [counter, setCounter] = useState(3)
    const [users, setUsers] = useState([
        {
            id: 1,
            username: 'santosh',
            email: 'santosh@gmail.com'
        },
        {
            id: 2,
            username: 'anson',
            email: 'anson@gmail.com'
        }
    ]);
    return (
        <div>
            {
                users.map((user, index) => (
                    <UserDetails key={index} user={user} setUsers={setUsers} />)
                )
            }
            <form onSubmit={(e) => {
                e.preventDefault();
                //console.log(username, email)
                const newUser = {
                    id: counter,
                    username,
                    email
                };
                setCounter((currentCounter) => currentCounter + 1);
                setUsers((currentUsersState) => [...currentUsersState, newUser])

            }}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type='text' name="username" value={username} onChange={(e) => {
                        setUsername(e.target.value)
                    }} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type='email' name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <button>Add User</button>
            </form>

        </div>
    )
}
