import style from '../styles/Login.module.css';

export default function Login({ login }) {
    return (
        <div>
            {login ? <div className={style.login}>John is login</div> : <div className={style.login}> John is not login</div>}
        </div>
    )
}
