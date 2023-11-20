import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../feature/todo/todo';

const AddTodo = () => {
    const [input, setInput] = useState("")
    const dispatch = useDispatch();

    const handleAddTodo = (e) => {
        e.preventDefault();
        dispatch(addTodo(input))
        setInput("");
    }

    return (
        <form onSubmit={handleAddTodo}>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button type='submit'> Add</button>
        </form>
    )
}

export default AddTodo