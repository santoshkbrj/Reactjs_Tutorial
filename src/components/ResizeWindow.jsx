import { useEffect } from "react";
import { useDocumentClick } from "../utils/hooks/useDocumentClick";

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
    }, []);

    useDocumentClick();

    return (
        <div>

        </div>
    )
}
