// import React, { useReducer } from 'react'

// const reducer = (state, action) => {
//     console.log(state)
//     console.log(action)
//     if (action.type === "increment") {
//         return state + 1;
//     } else if (action.newType === "decrement") {
//         return state - 1;
//     } else {
//         return state;
//     }
// }

// const setInitialValue = () => 10

// const Reducer = () => {
//     const [state, dispatch] = useReducer(reducer, 0, setInitialValue);

//     return (
//         <div>
//             {state}
//             <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
//             <button onClick={() => dispatch({ newType: "decrement", id: "none" })}>Decrement</button>
//         </div>
//     )
// }

// export default Reducer




import React, { useReducer } from 'react'

const reducer = (state, { initialValue, goTo }) => {
    if (state >= goTo) {
        return initialValue;
    } else {
        return state + 1;
    }
}
const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            <button onClick={() => dispatch({ initialValue: 2, goTo: 8 })}>{state}</button>
        </div>
    )
}

export default UseReducer;