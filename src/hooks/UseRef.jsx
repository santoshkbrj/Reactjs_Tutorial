import { useRef } from 'react';

export default function Counter() {
    const inputRef = useRef(null);

    console.log(inputRef.current)

    const handleClick = () => {
        inputRef.current.focus();
    }

    return (
        <>
            <input type="text" ref={inputRef} />
            <button onClick={handleClick}>Focus on input field</button>
        </>
    );
}
