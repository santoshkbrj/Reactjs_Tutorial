import React, { useState } from 'react'

export default function UserDetails({ user, setUsers }) {
    const [isEditing, setIsEditing] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    return (
        <div>
            <div>
                <p>ID: <span>{user.id}</span></p>
                <p>Username: {isEditing ? (<input name='username' id="username" value={username} onChange={(e) => { setUsername(e.target.value) }} />)
                    : (<span>{user.username}</span>)}</p>
                <p>Email: {isEditing ? (<input name="email" id="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />) :
                    (<span>{user.email}</span>)}</p>
                <button onClick={() => { setIsEditing((currentState) => !currentState) }}>Edit</button>
                <button onClick={() => {
                    setUsers((currentUsersState) => currentUsersState.filter(
                        (currentUser) => currentUser.id !== user.id
                    ))
                }}>Delete</button>
                {isEditing && <button onClick={() => {
                    setUsers((currentUsersState) => currentUsersState.map((currentUser) => currentUser.id === user.id
                        ? { ...currentUser, username, email } : currentUser)

                    );
                    setIsEditing(false)
                }}>Save</button>}
            </div>
        </div>
    )
}
