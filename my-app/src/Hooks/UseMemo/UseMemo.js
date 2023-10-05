import React, { useEffect, useMemo, useState } from 'react';

const UseMemo = () => {
    const [count, setCount] = useState(0)
    const [change, setChange] = useState(false)
    // let dblNumber = myFunc(count);
    // console.log("first")
    let dblNumber = useMemo(() => {
        return myFunc(count);
    }, [count]);


    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(pre => pre + 1)}>CLICK</button>
            <h2 className={change ? "bg-dark text-white" : "bg-white text-dark"}>{dblNumber}</h2>
            <button onClick={() => setChange(!change)}>Change Theme</button>
        </div>
    )
}
export default UseMemo;


function myFunc(num) {
    for (let index = 0; index < 1000000000; index++) { }
    return num + 1;
}