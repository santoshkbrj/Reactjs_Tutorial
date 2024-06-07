import PostContainer from "./components/PostContainer";
import { UserContext } from "./utils/Context/UserContext"

function App() {


    return (
        <UserContext.Provider value={
            {
                id: 1,
                username: 'Rakesh',
                email: "anson@gmail.com",
                displayName: "Rakesh Sah"
            }}>
            <div>
                <PostContainer />
            </div>

        </UserContext.Provider>
    )
}
export default App;