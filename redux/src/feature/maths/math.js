import { createSlice } from "@reduxjs/toolkit"

export const mathOperation = createSlice({
    name: "math",
    initialState: {
        value: 1
    },
    reducers: {
        increment: (state, action) => {
            state.value += 1;
        },
        decrement: (state, action) => {
            state.value -= 1;
        }
    }
})

export const  { increment, decrement } = mathOperation.actions;

export default mathOperation.reducer;