import { useEffect, useState } from "react";
import PostContainer from "./components/PostContainer";
import { UserContext } from "./utils/Context/UserContext"
import { useFetchUser } from "./utils/hooks/useFetchUser";

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

    useEffect(() => {
        if (!loading && !error && user) setUserData(user)
    }, [loading, error, user])

    return (
        <UserContext.Provider value={{ ...userData, setUserData }}>
            <div>
                {
                    loading ? "Loding..." : <PostContainer />
                }

            </div>

        </UserContext.Provider>
    )
}
export default App;