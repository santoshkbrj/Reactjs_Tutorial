import React, { useContext } from 'react'
import PostContent from './PostContent';
import { UserContext } from '../utils/Context/UserContext'

export default function PostContainer() {
    const userContextData = useContext(UserContext);
    return (
        <div>
            <PostContent />
            {userContextData.id}<br />
            {userContextData.name}<br />
            {userContextData.email}<br />

        </div>
    )
}
