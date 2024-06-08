import React, { useContext } from 'react'
import { UserContext } from '../utils/Context/UserContext'
import PostContentButton from './PostContentButton'

export default function PostContent() {
    const userContextData = useContext(UserContext)
    return (
        <div>
            {userContextData.id}<br />
            <button onClick={() => {
                setUserData((currentState) =>
                    ({ ...currentState, name: "Updated display Name" }))
            }}>Click me</button>
            <PostContentButton />
        </div>
    )
}
