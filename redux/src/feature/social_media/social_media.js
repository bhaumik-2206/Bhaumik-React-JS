import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    posts: []
};

const social_media = createSlice({
    name: "social_media",
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.posts.unshift({ ...action.payload, id: nanoid() });
        }
    }
})

export const { addPost } = social_media.actions;

export default social_media.reducer;