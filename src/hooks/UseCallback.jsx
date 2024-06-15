import React, { useCallback, useState } from 'react';
import Header from '../components/Header';

function UseCallback() {
    const [count, setCount] = useState(0);

    const newFn = useCallback(() => { }, [])


    return (
        <div>
            <Header newFn={newFn} />
            <h1>{count}</h1>
            <button onClick={() => setCount((prev) => prev + 1)}>Click here</button>
        </div>
    )
}

export default UseCallback