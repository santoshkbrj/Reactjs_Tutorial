
export default function Login({ login }) {
    return (
        <div>
            {login ? <div>John is login</div> : <div>{name} John is not login</div>}
        </div>
    )
}
