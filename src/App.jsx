import { MyFavFood } from "./components/MyFavFood";
import UserProfile from "./components/UserProfile";

function App() {
    const user = {
        username: 'John Doe',
        email: "john@gmail.com",
        age: 35,
    }
    return (
        <div>
            <h1>App component</h1>
            <hr />
            <UserProfile userdata={user} />
            <hr />
            <MyFavFood />
        </div>

    )
}
export default App;