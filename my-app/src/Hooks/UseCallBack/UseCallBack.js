import React, { useCallback, useState } from 'react'
import Child from './Child'

const UseCallBack = () => {
    const [count, setCount] = useState(0)
    const [toggle, setToggle] = useState(false)
    const getItem = useCallback((value) => {
        console.log("first");
        return count * value;
    }, [count]);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>CLICK</button>
            <h1 className={`${toggle ? "text-dark bg-white" : "text-white bg-dark"}`}>Show diff. colour</h1>
            <button onClick={() => setToggle(!toggle)}>change coloue</button>
            <Child getItem={getItem} />
        </div>
    )
}

export default UseCallBack
