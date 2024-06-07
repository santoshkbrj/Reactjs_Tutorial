
import { useState } from "react";
import ResizeWindow from "./components/ResizeWindow";


function App() {
    const [toggle, setToggle] = useState(false)

    return (
        <>
            <button onClick={() => setToggle((currentState) => !currentState)}>Toggle</button>
            {toggle && <ResizeWindow />}
        </>
    )
}
export default App;