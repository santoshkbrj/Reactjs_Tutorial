import { useState } from "react";

function App() {
    const [username, setUsername] = useState('');
    const [password, setPasword] = useState('');
    const [users, setUsers] = useState([]);


    return (
        <>
            <form>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} onChange={(e) => setPasword(e.target.value)} />
                </div>
                <button onClick={(e) => {
                    e.preventDefault();
                    const newUser = {
                        username,
                        password
                    }
                    setUsers((currUser) => [...currUser, newUser])
                    console.log(users)
                }}>Add User</button>

            </form>
            <p>Username: {username}</p>
            <p>Password: {password}</p>
        </>
    )
}
export default App;