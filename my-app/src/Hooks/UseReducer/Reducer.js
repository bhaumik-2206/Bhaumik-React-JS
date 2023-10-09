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




// import React, { useReducer } from 'react'

// const reducer = (state, { initialValue, goTo }) => {
//     if (state >= goTo) {
//         return initialValue;
//     } else {
//         return state + 1;
//     }
// }

// const UseReducer = () => {
//     const [state, dispatch] = useReducer(reducer, 0);
//     return (
//         <div>
//             <button onClick={() => dispatch({ initialValue: 2, goTo: 8 })}>{state}</button>
//         </div>
//     )
// }
// export default UseReducer;



import React, { useReducer } from 'react'
import { ChildReducerComo1, ChildReducerComo2 } from './ChildReducerComo'
function reducer(state, action) {
    if (action.type === "getData") {
        return { data: action.payload }
    } else {
        return state;
    }
}
function reducer2(state, action) {
    if (action.type === "getData") {
        return { data: action.payload }
    } else {
        return state;
    }
}
const Reducer = () => {
    const [state, dispatch] = useReducer(reducer, { data: '' });
    const [state2, dispatch2] = useReducer(reducer2, { data: '' });
    const changeData = (data) => {
        dispatch({ type: 'getData', payload: data });
    };
    const changeDataInOnChange = (data) => {
        dispatch2({ type: 'getData', payload: data });
    };
    return (
        <div>
            <ChildReducerComo1 changeData={changeData} />
            <h1>{state.data}</h1>
            <ChildReducerComo2 changeData={changeDataInOnChange} />
            <h1>{state2.data}</h1>
        </div>
    )
}
export default Reducer;