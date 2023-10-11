import React, { useReducer } from 'react'

const reducer = (state, action) => {
    if (action.type === "increment") {
        return { count: state.count + 1 }
    } else if (action.type === "decrement") {
        return { count: state.count - 1 }
    } else if (action.type === "mulWithFive") {
        return { count: state.count * 5 }
    } else if (action.type === "mulWithThree") {
        return { count: state.count * 3 }
    } else if (action.type === "divideWithTwo") {
        return { count: state.count / 2 }
    } else if (action.type === "round") {
        return { count: Math.round(state.count) }
    } else {
        return state
    }
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 })

    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
            <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
            <button onClick={() => dispatch({ type: "mulWithFive" })}>Multiply With 5</button>
            <button onClick={() => dispatch({ type: "mulWithThree" })}>Multiply With 3</button>
            <button onClick={() => dispatch({ type: "divideWithTwo" })}>Divide With 2</button>
            <button onClick={() => dispatch({ type: "round" })}>Round The Number</button>
        </div>
    )
}

export default UseReducer;