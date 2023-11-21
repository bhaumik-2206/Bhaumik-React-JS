import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    values: Array(9).fill(null),
    winning_posibility: [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
        [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6],
    ],
    winner: null
}

const ticTacToeSlice = createSlice({
    name: "ticTacToe",
    initialState,
    reducers: {
        changeValues: (state, action) => {
            state.values[action.payload.index] = action.payload.value
        },
        checkWinner: (state, action) => {
            let winner = state.winning_posibility.find(value => value.every(ele => state.values[ele] === "⭕") || value.every(ele => state.values[ele] === "✖️"));
            if (winner)
                state.winner = state.values[winner[0]];
            if (state.values.every(value => value))
                state.winner = "draw"
        },
        restartGame: () => {
            return initialState;
        }
    }
})

export const { changeValues, checkWinner, restartGame } = ticTacToeSlice.actions;

export default ticTacToeSlice.reducer;