import { useEffect } from "react";
import { useState } from "react";

function App() {
    const [counter, setCounter] = useState(0);
    const [sync, setSync] = useState(false)

    useEffect(() => {
        console.log('rendering....');
        document.title = "React tutorial " + counter
    }, [sync])

    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //         .then((response) => {
    //             return response.json();
    //         })
    //         .then((data) => {
    //             console.log(data)
    //         })
    //         .catch((err) => {
    //             console.log(message.err)
    //         })

    // })

    useEffect(() => {
        const controller = new AbortController();

        try {
            const fetchapi = async () => {
                const data = await fetch("https://jsonplaceholder.typicode.com/users", { signal: controller.signal });
                const res = await data.json();
                console.log(res)
                console.log(controller.signal)
            }
            fetchapi()
        }
        catch (err) {
            console.log(err)
        }
        return () => {
            controller.abort();
            console.log(controller.signal)
        }

    })


    return (
        <>
            <div>You click button {counter} times</div>
            <button onClick={() => setCounter((count) => count + 1)} >Click Me</button>
            <button onClick={() => setSync((currentState) => !currentState)} >Sync Me</button>
        </>
    )
}
export default App;