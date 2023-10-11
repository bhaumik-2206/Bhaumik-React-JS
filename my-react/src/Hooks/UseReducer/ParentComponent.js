import React, { useReducer } from 'react'
import ChildComponent from './ChildComponent'

const reducer = (state, action) => {
    return { childValue: action.value }
}

const ParentComponent = () => {
    const [state, dispatch] = useReducer(reducer, { childValue: "" },)
    return (
        <div>
            <h1>Text is:{state.childValue}</h1>
            <ChildComponent dispatch={dispatch} />
        </div>
    )
}

export default ParentComponent
