// // import React, { useReducer } from 'react'

// // const reducer1 = (state, action) => {
// //     if (action.type === "increment") {
// //         return { count: state.count + 1 }
// //     } else if (action.type === "decrement") {
// //         return { count: state.count - 1 }
// //     } else {
// //         return state;
// //     }
// // }

// // const reducer2 = (state, action) => {
// //     if (action.type === "increment") {
// //         return { count: state.count + 1 }
// //     } else if (action.type === "decrement") {
// //         return { count: state.count - 1 }
// //     } else {
// //         return state;
// //     }
// // }

// // const UseReducer = () => {
// //     const [state1, dispatch1] = useReducer(reducer1, { count: 0 });
// //     const [state2, dispatch2] = useReducer(reducer2, { count: 0 });
// //     return (
// //         <div>
// //             <h1>{state1.count}</h1>
// //             <button onClick={() => dispatch1({ type: "increment" })}>Increment</button>
// //             <button onClick={() => dispatch1({ type: "decrement" })}>Increment</button>

// //             <h1>{state2.count}</h1>
// //             <button onClick={() => dispatch2({ type: "increment" })}>Increment</button>
// //             <button onClick={() => dispatch2({ type: "decrement" })}>Increment</button>
// //         </div>
// //     )
// // }
// // export default UseReducer;





import React, { useReducer, useState } from 'react'
import List from './List'

// Global Non changing variable
export const ACTION = {
    ADD_TODO: 'add-todos',
    DELETE_TODO: 'delete-todos',
    COMPLETE_TODO: 'complete-todos',
}

const reducer = (todo, action) => {
    if (action.type === ACTION.ADD_TODO) {
        return [...todo, addData(action.data)]
    } else if (action.type === ACTION.DELETE_TODO) {
        return todo.filter(ele => ele.id !== action.getId)
    } else if (action.type === ACTION.COMPLETE_TODO) {
        console.log(todo)
        return todo.map(ele => ele.id === action.getId ? ({ ...ele, complete: !ele.complete }) : ele)
    } else {
        return todo;
    }
}

const addData = (data) => {
    return { id: Date.now(), name: data, complete: false }
}


const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, []);
    const [data, setData] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: ACTION.ADD_TODO, data: data });
        setData("");
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
                <button type="submit">Add</button>
            </form>
            <List todoArray={state} dispatch={dispatch} />
        </div>
    )
}

export default UseReducer
