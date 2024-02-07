'use client';
import Link from "next/link";
import { useEffect, useState } from "react";

function Counter() {

    const [counter, setCounter] = useState<number>(0);

    const increment = () => {
        setCounter(counter + 1);
    };

    const decrement = () => {
        setCounter(counter - 1);
    };


    useEffect(() => {
        console.log('Counter is changed . . . ');
    }, [counter]);

    console.log("Triggered Render");

    return (
        <div>
            <h1>
                Counter Page
            </h1>
            <div>
                <div>Counter: {counter}</div>
                <button onClick={increment}>Increment</button>
                <br />
                <button onClick={decrement}>Decrement</button>
            </div>
            <Link href={'/'}>Go to Home</Link>
        </div>
    );
}

export default Counter;