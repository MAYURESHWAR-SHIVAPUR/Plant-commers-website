import { createSlice } from "@reduxjs/toolkit";


const initialState =
{
    items: [],
    totalPrice: 0,
    totalQuantity: 0
}


const cartSlice = createSlice({

    name: "cartSlice",
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },

    }
})

export const { increment } = cartSlice.actions

export default cartSlice.reducer
