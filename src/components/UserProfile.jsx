import Login from "./Login";

function UserProfile({ userdata }) {
    const isLogin = true;
    return (
        <div>
            <p>Name: {userdata.name}</p>
            <p>Age: {userdata.age}</p>
            <p>Email: {userdata.email}</p>
            <hr />
            <Login login={isLogin} />
        </div>
    )
}
export default UserProfile;