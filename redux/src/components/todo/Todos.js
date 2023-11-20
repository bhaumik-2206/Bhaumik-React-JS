import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { editTodos, removeTodos } from '../../feature/todo/todo';

const Todos = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch();

    const [newText, setNewText] = useState('');
    const handleEdit = (id, text) => {
        dispatch(editTodos({ id, text }));
    }
    
    return (
        <>
            <h1>TODOS</h1>
            {todos.map((todo, index) => (
                <div key={index}>
                    {todo.text}
                    <button onClick={() => dispatch(removeTodos(todo.id))}>DELETE</button>
                    <input
                        type="text"
                        value={newText}
                        onChange={(e) => setNewText(e.target.value)}
                    />
                    <button onClick={() => handleEdit(todo.id, newText)}>EDIT</button>
                </div>
            ))}
        </>
    )
}

export default Todos
