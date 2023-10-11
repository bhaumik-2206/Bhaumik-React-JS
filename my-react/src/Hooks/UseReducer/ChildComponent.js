import React, { useReducer } from 'react'

// const reducer = (state, action) => {
//     if (action.type === "myValue") {
//         return { value: action.value }
//     }
// }

const ChildComponent = ({ dispatch }) => {
    // const [state, dispatch2] = useReducer(reducer, { value: "" })

    const handleChange = (e) => {
        dispatch({ value: e.target.value });
        // dispatch2({ type: "myValue", value: e.target.value });
    }

    return (
        <div>
            {/* <input type="text" value={state.value} onChange={handleChange} /> */}
            <input className='form-control w-50 bg-black text-white' type="text" onChange={handleChange} />
        </div>
    )
}

export default ChildComponent;