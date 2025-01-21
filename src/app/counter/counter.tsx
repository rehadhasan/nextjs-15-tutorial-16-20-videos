"use client"
import {useState} from "react";

export default function Counter() {
    const [increment, setIncrement] = useState(0)
    return (
        <>
            <h1>{increment}</h1>
            <button onClick={() => setIncrement(increment + 1)}>Increment</button>
        </>
    )
}