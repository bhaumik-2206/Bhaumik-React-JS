import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "Bhaumik" }]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            let newTodo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(newTodo);
        },
        removeTodos: (state, action) => {
            state.todos = state.todos.filter(ele => ele.id !== action.payload);
        },
        editTodos: (state, action) => {
            const { id, text } = action.payload;
            const editTodo = state.todos.find(todo => todo.id === id);
            if (editTodo) {
                editTodo.text = text;
            }
        }
    }
})

export const { addTodo, removeTodos, editTodos } = todoSlice.actions;

export default todoSlice.reducer