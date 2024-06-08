import React from 'react'
import { useLocation } from 'react-router-dom'

function BlogPostsPage() {
    const routerLocation = useLocation();
    console.log(routerLocation)
    return (
        <div>BlogPostsPage</div>
    )
}

export default BlogPostsPage