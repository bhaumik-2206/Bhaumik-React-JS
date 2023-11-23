import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    user1: [],
    user2: [],
};

const chatting_appSlice = createSlice({
    name: "chating_app",
    initialState,
    reducers: {
        sendChat: (state, action) => {
            const { message, user } = action.payload;
            if (user === 1) {
                state.user1.push({ send: message, id: nanoid() })
                state.user2.push({ receive: message, id: nanoid() })
            } else if (user === 2) {
                state.user1.push({ receive: message, id: nanoid() })
                state.user2.push({ send: message, id: nanoid() })
            }
        },
        editMessage: (state, action) => {
            const { message, user, id } = action.payload;
            if (user === 1) {
                let findUser = state.user1.findIndex(p => p.id === id);
                state.user1[findUser].send = message;
                state.user2[findUser].receive = message;
            } else if (user === 2) {
                let findUser = state.user2.findIndex(p => p.id === id);
                state.user2[findUser].send = message;
                state.user1[findUser].receive = message;
            }
        },
    }
})

export const { sendChat, editMessage } = chatting_appSlice.actions;

export default chatting_appSlice.reducer;