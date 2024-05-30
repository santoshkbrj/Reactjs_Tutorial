import { useState } from "react";
import { Color } from "./components/Color";

function App() {
    const [UIcolor, setUIColor] = useState('#000')

    // Our callback function
    const getColor = (color) => {
        setUIColor(color)
    }
    //console.log(`Color: ${UIcolor}`)
    return (
        <>
            <div style={{ width: "450px", height: "300px", backgroundColor: `${UIcolor}` }}></div>
            <Color getColor={getColor} />
        </>
    )
}

export default App;