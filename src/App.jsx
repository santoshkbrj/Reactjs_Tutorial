import { MyFavFood } from "./MyFavFood";
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
            <UserProfile userdata={user} />
            <MyFavFood />
        </div>

    )
}
export default App;