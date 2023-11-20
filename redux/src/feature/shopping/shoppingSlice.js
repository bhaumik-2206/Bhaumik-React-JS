import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    item: [],
    totalAmount: 0
}

const shoppingSlice = createSlice({
    name: "shopping",
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.item.push({ ...action.payload, qty: 1, total_amount: action.payload.price });
            state.totalAmount = state.totalAmount + action.payload.price;
        },
        changeQty: (state, action) => {
            const { type, id } = action.payload;
            let item = state.item.find(ele => ele.id === id);
            if (!item) return
            if (type === "increment") {
                if (item.qty === 5) {
                    window.alert("Maximum quantity")
                } else {
                    item.qty += 1;
                    item.total_amount = item.total_amount + item.price;
                }
                state.totalAmount = state.totalAmount + item.price;
            } else if (type === "decrement") {
                if (item.qty === 1) {
                    state.item = state.item.filter(item => item.id !== id)
                } else {
                    item.qty -= 1;
                    item.total_amount = item.total_amount - item.price;
                }
                state.totalAmount = state.totalAmount - item.price;
            }
        },
        removeItem: (state, action) => {
            const { type } = action.payload;
            if (type) {
                state.item = [];
                state.totalAmount = 0;
            } else {
                let a = state.item.findIndex(ele => ele.id === action.payload);
                state.totalAmount = state.totalAmount - state.item[a].total_amount;
                state.item.splice(a, 1);
            }
        },
    }
})

export const { addItem, removeItem, changeQty } = shoppingSlice.actions;

export default shoppingSlice.reducer;