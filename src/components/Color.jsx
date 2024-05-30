import { useState } from "react";

export function Color({ getColor }) {
    const [activeColor, setActiveColor] = useState('')

    const changeHandler = (e) => {
        const { value } = e.target;
        //console.log(`value: ${value}`)
        setActiveColor(value);
        getColor(value);
    }

    return (
        <>
            <input type="color" value={activeColor} onChange={changeHandler} />
        </>
    )
}
