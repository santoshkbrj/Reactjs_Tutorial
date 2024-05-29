import React from 'react'

function Panel({ children, title }) {
    return (
        <>
            <h1>{title}</h1>
            {children}
        </>
    )
}

export default Panel