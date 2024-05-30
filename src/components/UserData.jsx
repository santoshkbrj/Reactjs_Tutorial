function UserData({ data }) {
    return (
        <>
            <p>Username: {data.username}</p>
            <p>Email: {data.email}</p>
        </>
    )
}
export default UserData;