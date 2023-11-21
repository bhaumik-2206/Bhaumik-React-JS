import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    input_value: [
        { id: 1, name: "Player 1", selectedNumber: null },
        { id: 2, name: "Player 2", selectedNumber: null },
        { id: 3, name: "Player 3", selectedNumber: null },
    ]
}

const inputSlice = createSlice({
    name: "input",
    initialState,
    reducers: {
        changeValue: (state, action) => {
            const { value, id } = action.payload;
            state.input_value = state.input_value.map(ele => ele.id === id ? { ...ele, selectedNumber: value } : ele)
        },
        resetValues: (state, action) => {
            return initialState;
        }
    },
})

export const { changeValue, resetValues } = inputSlice.actions;

export default inputSlice.reducer;