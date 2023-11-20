import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../feature/maths/math';

const Math = () => {
    const dispatch = useDispatch();
    const value = useSelector(state => state.value);
    return (
        <>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <b>{value}</b>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </>
    )
}

export default Math;