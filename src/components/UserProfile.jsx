function UserProfile({ userdata }) {
    return (
        <div>
            <p>Name: {userdata.name}</p>
            <p>Age: {userdata.age}</p>
            <p>Email: {userdata.email}</p>
        </div>
    )
}
export default UserProfile;