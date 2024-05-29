import Login from "./Login";
import '../styles/UserProfile.css'

function UserProfile({ userdata }) {
    const isLogin = true;
    return (
        <div>
            <p style={{ color: "#000", fontSize: "18px", fontWeight: "bold", backgroundColor: "green" }}>Name: {userdata.username}</p>
            <p className="age">Age: {userdata.age}</p>
            <p>Email: {userdata.email}</p>
            <hr />
            <Login login={isLogin} />
        </div>
    )
}
export default UserProfile;