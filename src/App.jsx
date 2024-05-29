import { MyFavFood } from "./components/MyFavFood";
import UserProfile from "./components/UserProfile";

function App() {
    const user = {
        username: 'John Doe',
        email: "john@gmail.com",
        age: 35,
    }
    const num = 20;
    return (
        <>
            {num >= 20 && <p>Number is greater equal than 20</p>}
            <hr />
            <UserProfile userdata={user} />
            <hr />
            <MyFavFood />
        </>

    )
}
export default App;