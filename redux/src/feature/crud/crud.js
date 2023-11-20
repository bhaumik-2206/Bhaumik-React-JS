import { createSlice } from "@reduxjs/toolkit";

const crudSlice = createSlice({
    name: "crud",
    initialState: [],
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload);
        },
        deleteUser: (state, action) => {
            return state.filter(user => user.id !== action.payload)
        },
        updateUser: (state, action) => {
            const { isEditData, values } = action.payload;
            let editData = state.findIndex(user => user.id === isEditData);
            if (editData !== -1) {
                state[editData] = values;
            }
        },
        setUser: (state, action) => action.payload,
    }
})

// console.log(crudSlice)

export const { addUser, deleteUser, updateUser, setUser } = crudSlice.actions;
export default crudSlice.reducer;