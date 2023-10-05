import React from 'react'
import { ACTION } from './UseReducer'

const List = ({ todoArray, dispatch }) => {
    return (
        <ul>
            {todoArray.map((todo, i) => (
                <li key={todo.id}
                    className={todo.complete ? "text-decoration-line-through" : ""}>{todo.name}
                    <button onClick={() => dispatch({ type: ACTION.COMPLETE_TODO, getId: todo.id })}>COMPLETE</button>
                    <button onClick={() => dispatch({ type: ACTION.DELETE_TODO, getId: todo.id })}>DELETE</button>
                </li>
            ))}
        </ul>
    )
}

export default List
