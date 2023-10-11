import React, { useContext } from 'react'
import { Context } from './DifferentContextComponent';

const AnotherChild = () => {
    let { a, b } = useContext(Context);
    return (
        <div>
            <h1>{a} {b}</h1>
        </div>
    )
}

export default AnotherChild
