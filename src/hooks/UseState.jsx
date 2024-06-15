import React, { useState } from 'react'

function UseState() {
    const [color, setColor] = useState('red');
    const [car, setCar] = useState({
        name: "foxwagon",
        color: "red",
        model: 2024
    })
    const [count, setCount] = useState(0)
    return (
        <div>
            <p>This is {color} color</p>
            <button onClick={() => setColor("blue")}>Change Color</button>
            <hr />
            <p>We have a {car.name} car which is in {car.color} and is {car.model} model</p>
            <button onClick={() => setCar((prev) => ({ ...prev, color: "blue" }))}> show Details</button>
            <hr />
            <p>{count}</p>
            <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
        </div>
    )
}

export default UseState