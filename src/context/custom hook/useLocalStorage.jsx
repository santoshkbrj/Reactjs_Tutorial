import React, { useEffect, useState } from 'react'

export default function useLocalStorage(key, initialValue) {
    const [name, setName] = useState(
        localStorage.getItem(key) ? localStorage.getItem(key) : ""
    )
    useEffect(() => {
        localStorage.setItem(key, name)
    }, [name, key])

    return [name, setName]
}
