import { useEffect } from "react";
import { useState } from "react";

function App() {
    const [counter, setCounter] = useState(0);
    const [sync, setSync] = useState(false)

    useEffect(() => {
        console.log('rendering....');
        document.title = "React tutorial " + counter
    }, [sync])

    return (
        <>
            <div>You click button {counter} times</div>
            <button onClick={() => setCounter((count) => count + 1)} >Click Me</button>
            <button onClick={() => setSync((currentState) => !currentState)} >Sync Me</button>
        </>
    )
}
export default App;