'use client';
import { HTMLInputTypeAttribute, useRef } from "react";

function Focus() {

    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    type eventType = {
        target: { value: any; };
    };
    
    // Print the content of the input field every time you change it
    const handleChange = (e: eventType) => {
        console.log(e.target.value);
    };

    return (
        <main>
            <input type="text" ref={inputRef} onChange={handleChange} />
            <button onClick={handleClick}>Click to focus on the input</button>
        </main>
    );
}

export default Focus;