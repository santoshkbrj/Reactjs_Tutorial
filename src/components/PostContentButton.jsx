import React, { useContext } from 'react'
import { UserContext } from '../utils/Context/UserContext'

function PostContentButton() {
    const userContextData = useContext(UserContext)
    return (
        <div>{userContextData.displayName}</div>
    )
}

export default PostContentButton