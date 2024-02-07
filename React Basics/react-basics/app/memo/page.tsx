'use client';

import React, { useState, useMemo } from 'react';

function factorial(n: number) {
    console.log(`Calculating factorial of ${n}`);
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

function MemoExample() {
    const [number, setNumber] = useState(5);
    const [flag, setFlag] = useState(false);

    const memoizedFactorial = useMemo(() => factorial(number), [number]);

    const toggleFlag = () => {
        setFlag((prevFlag) => !prevFlag);
    };

    return (
        <div>
            <h2>Factorial of {number}: {memoizedFactorial}</h2>
            <button onClick={toggleFlag}>Toggle Flag</button>
            <p>Flag is {flag ? 'true' : 'false'}</p>
        </div>
    );
}

export default MemoExample;