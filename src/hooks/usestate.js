import { useState } from "react";

let Result = () => {
    const [count, setCount] = useState(0);
    const [sub, setSub] = useState(false);

    let subscribe = () => {
        setSub(!sub);
    };

    let increment = () => {
        setCount(count + 1);
    };

    let decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }
    let reset=()=>{
        setCount(0)
    };

    return (
        <>
            <button onClick={subscribe}>
                {sub ? "Unsubscribe" : "Subscribe"}
            </button>

            {sub && (
                <>
                    <h1>{count}</h1>
                    <button onClick={increment}>Increment</button>
                    <button onClick={decrement}>Decrement</button>
                    <button onClick={reset}>reset</button>
                </>
            )}
        </>
    );
};
export default Result;
