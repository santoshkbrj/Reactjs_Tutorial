import React from 'react'

function Header() {
    console.log("header render")
    return (
        <div>
            <h2>Header</h2>
        </div>
    )
}

export default React.memo(Header);