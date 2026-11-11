import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItems: (state, action) => {
            // mutating the state over here
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {

            // RTK says either mutate the existing state or return a new state
            state.items.length = 0;
        }
    }
});

export const {addItems, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;