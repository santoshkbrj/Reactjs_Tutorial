import React, { useEffect, useLayoutEffect } from 'react'

export default function UseLayout() {

    useEffect(() => {
        console.log("Message from useEffect")
    }, []);

    useLayoutEffect(() => {
        console.log("Message from useLayoutEffect")
    }, [])

    return (
        <>
            <div>UseLayout</div>
            {Array(40000).fill('').map((item, index) => (
                <li key={index}>{Math.random() * 10}</li>
            ))}
        </>
    )
}
