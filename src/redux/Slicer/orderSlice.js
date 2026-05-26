import { createSlice } from "@reduxjs/toolkit";


const initialState =
{
    orders: [],
    loading: false,
    error: null
}


const orderSlicer = createSlice({
    name: "orderSlicer",
    initialState: initialState,
    reducers: {
        ToggleLoading: (state) => {
            state.loading = true
        }
    }
})

export const { ToggleLoading } = orderSlicer.actions

export default orderSlicer.reducer