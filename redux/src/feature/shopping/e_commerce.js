import { toast } from "react-toastify";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    products: [],
    cartData: [],
    totalAmount: 0,
    searchValue: [],
    category: [],
};

const e_commerceSlice = createSlice({
    name: "e_commerce",
    initialState,
    reducers: {
        setProductsValue: (state, action) => {
            state.products = action.payload;
            state.category = action.payload.map(e => e.category).reduce((acc, cur) => {
                if (!acc.includes(cur)) {
                    acc.push(cur);
                }
                return acc;
            }, [])
        },
        addToCart: (state, action) => {
            let item = state.products.find(p => p.id === action.payload);
            let cart_item = state.cartData.find(p => p.id === action.payload);
            if (item && !cart_item) {
                state.cartData.push({ ...item, quantity: 1 });
                state.totalAmount = state.totalAmount + item.price;
            } else {
                toast.info("Item already in cart")
            }
        },
        filterValue: (state, action) => {
            state.searchValue = [];
            const { category, start, end } = action.payload;
            // console.log(category, start, end);
            let cat = state.products.filter(item => item.category === category);
            state.searchValue = [...cat];
            let pri = [];
            if (start && end) {
                if (category) {
                    pri = cat.filter(item => end === "0" ? (item.price > start) : (item.price > start && item.price < end));
                    state.searchValue = pri.length > 0 ? [...pri] : ["No Data Found"];
                } else {
                    pri = state.products.filter(item => end === "0" ? (item.price > start) : (item.price > start && item.price < end));
                    state.searchValue = pri.length > 0 ? [...pri] : ["No Data Found"];
                }
            }
        },
        handleQuantityChange: (state, action) => {
            const { id, type } = action.payload;
            let changingItem = state.cartData.find(p => p.id === id);
            if (type === "increment") {
                if (changingItem.quantity === 5 && type === "increment") {
                    toast.error("Maximum quantity")
                } else {
                    changingItem.quantity = changingItem.quantity + 1;
                    state.totalAmount = state.totalAmount + changingItem.price
                }
            } else if (type === "decrement") {
                if (changingItem.quantity === 1 && type === "decrement") {
                    state.cartData = state.cartData.filter(p => p.id !== id);
                    toast.error("Item removed from cart")
                } else {
                    changingItem.quantity = changingItem.quantity - 1;
                }
                state.totalAmount = state.totalAmount - changingItem.price
            }
        },
        findProduct: (state, action) => {
            if (action.payload) {
                let filteredValue = state.products.filter(item => item.category.toLowerCase().trim().includes(action.payload.toLowerCase().trim()) || item.title.toLowerCase().trim().includes(action.payload.toLowerCase().trim()));
                state.searchValue = filteredValue;
            } else {
                state.searchValue = state.products
            }
        },
        removeItem: (state, action) => {
            const { type } = action.payload;
            if (type) {
                state.cartData = [];
            } else {
                state.cartData = state.cartData.filter(item => item.id !== action.payload);
            }
            toast.error("Item removed from cart")
        },
        placeOrder: (state, action) => {
            state.cartData = [];
        }
    }
});

export const { setProductsValue, addToCart, removeItem, handleQuantityChange, findProduct, filterValue, placeOrder } = e_commerceSlice.actions;
export default e_commerceSlice.reducer;