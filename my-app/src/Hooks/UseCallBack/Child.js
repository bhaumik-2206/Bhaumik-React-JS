import React, { useEffect, useState } from 'react'

const Child = ({ getItem }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        setCount(getItem(5));
    }, [getItem]);

    return (
        <div>
            <h1>Child Data : {count}</h1>
        </div>
    )
}

export default Child