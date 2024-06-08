import { useEffect, useState } from "react";
import PostContainer from "./components/PostContainer";
import { UserContext } from "./utils/Context/UserContext"
import { useFetchUser } from "./utils/hooks/useFetchUser";
import { Link, Outlet, useNavigate } from "react-router-dom";

function App() {
    const { user, loading, error } = useFetchUser(2);
    console.log(user, loading, error)

    const [userData, setUserData] = useState(
        {
            id: 1,
            username: 'anson',
            email: "anson@gmail.com",
            name: "anson Doe"
        }
    )

    const navigate = useNavigate();

    useEffect(() => {
        if (!loading && !error && user) setUserData(user);
    }, [loading, error, user])

    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/users">Users</Link></li>
                    <li><Link to="/blog-posts">Blog</Link></li>
                </ul>
            </nav>

            <div>
                <label htmlFor="data">Enter Data</label>
                <input type="text" id="data" onChange={(e) => {
                    if (e.target.value.length > 10) {
                        navigate("/blog-posts", {
                            posts: [
                                {
                                    id: 1,
                                    title: "hello world",
                                    content: "Welcome to my fisrt post"
                                },
                            ],
                        });
                    }
                }}
                />

            </div>
            <UserContext.Provider value={{ ...userData, setUserData }}>
                <div>
                    {
                        loading ? "Loding..." : <PostContainer />
                    }

                </div>

            </UserContext.Provider>
            <Outlet />
        </>
    )
}
export default App;