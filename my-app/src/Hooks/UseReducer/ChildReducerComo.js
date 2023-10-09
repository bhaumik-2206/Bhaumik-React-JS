import React, { useReducer } from 'react'

export const ChildReducerComo1 = ({ changeData }) => {
    const [state, dispatch] = useReducer(reducer1, "");
    function reducer1(state, action) {
        return action.value;
    }
    const handleClick = () => {
        changeData(state);
    }
    return (
        <div>
            <input type="text" value={state} onChange={(e) => dispatch({ value: e.target.value })} />
            <button onClick={handleClick}>CLICK</button>
        </div>
    )
}



export const ChildReducerComo2 = ({ changeData }) => {
    const [state, dispatch] = useReducer(reducer2, "");
    function reducer2(state, action) {
        return action.value;
    }
    const handleChange = (e) => {
        changeData(state);
        dispatch({ value: e.target.value });
    }
    return (
        <div>
            <input type="text" value={state} onChange={handleChange} />
            {/* <button onClick={handleClick}>CLICK</button> */}
        </div>
    )
}