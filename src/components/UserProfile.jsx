import Login from "./Login";

function UserProfile({ userdata }) {
    const isLogin = true;
    return (
        <div>
            <p style={{ color: "#000", fontSize: "18px", fontWeight: "bold", backgroundColor: "green" }}>Name: {userdata.username}</p>
            <p>Age: {userdata.age}</p>
            <p>Email: {userdata.email}</p>
            <hr />
            <Login login={isLogin} />
        </div>
    )
}
export default UserProfile;