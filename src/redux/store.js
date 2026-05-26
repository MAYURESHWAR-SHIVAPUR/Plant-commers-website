import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./Slicer/cartSlice";
import orderReducer from "./Slicer/orderSlice";
import userReducer from "./Slicer/userSlice";



export const store = configureStore({
    reducer: {
        user: userReducer,
        orders: orderReducer,
        cart: cartReducer,
    },
});