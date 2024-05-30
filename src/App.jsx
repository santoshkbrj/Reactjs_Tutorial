import UserData from "./components/UserData"
function App() {
    const mockUsers = [
        {
            id: 1,
            username: "anson",
            email: "anson@gmail.com"
        },
        {
            id: 2,
            username: "michael",
            email: "michael@gmail.coms"
        }
    ]
    const callme = () => {
        console.log('hello')
    }
    return (
        <>
            <div>
                {
                    mockUsers?.map((data) => (
                        <div key={data.id}>
                            <UserData data={data} />
                        </div>
                    ))
                }
            </div>
        </>
    )
}
export default App;