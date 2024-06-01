import React, { useState, useEffect } from 'react';
import './App.css'


function App() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(3);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                console.log(data)
                setUsers(data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = users.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredUsers = currentPosts.filter((user) => {
        // console.log(user.name)
        return (
            user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.username.toLowerCase().includes(searchQuery.toLowerCase())
        )
    });



    return (
        <div>
            <h1>Users</h1>
            <input type="search" value={searchQuery} onChange={handleSearch} placeholder="Search users" /> <br />

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>UserName</th>
                        <th>Phone</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                            <td>{user.phone}</td>
                            <td>{user.address.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div>
                {Array(Math.ceil(users.length / postsPerPage))
                    .fill(0)
                    .map((_, i) => (
                        <button key={i} onClick={() => paginate(i + 1)}>
                            {i + 1}
                        </button>
                    ))}
            </div>
        </div>
    );
}

export default App;