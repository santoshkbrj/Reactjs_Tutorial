import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount(count => count + 1)
        }, 1000)
    }, [count])

    return (
        <div>
            <p>I have render {count} times</p>
        </div>
    )
}
