import React, { useContext } from 'react'
import { UserContext } from '../utils/Context/UserContext'
import PostContentButton from './PostContentButton'

export default function PostContent() {
    const userContextData = useContext(UserContext)
    return (
        <div>
            {userContextData.email}
            <PostContentButton />
        </div>
    )
}
