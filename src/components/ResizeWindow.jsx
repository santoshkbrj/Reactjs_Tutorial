import { useEffect } from "react";

useEffect

export default function ResizeWindow() {
    useEffect(() => {
        const resizeHandler = (e) => {
            console.log("window/viewport Resized");
        }
        window.addEventListener('resize', resizeHandler);

        return () => {
            window.removeEventListener('resize', resizeHandler);
            console.log('Component did unmount');
        }
    }, [])
    return (
        <div>

        </div>
    )
}
