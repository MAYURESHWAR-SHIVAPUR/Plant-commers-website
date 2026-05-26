import { createSlice } from "@reduxjs/toolkit";
import Address from "../../components/Profile/Address";

const initialState = {
    name: "Unknown",
    email: "",
    password: "",
    phone: "",
    address: {
        Street: "",
        City: "",
        State: "",
        PinCode: ""
    }
}


const userSlice = createSlice({
    name: "userSlicer",
    initialState: initialState,
    reducers: {
        RegisterUser: (state, action) => {
            state.name = action.payload.name
            state.email = action.payload.email
            state.password = action.payload.password
        },
        userLogin: (state, action) => {
            state.email = action.payload.email
            state.password = action.payload.password
        },
        changeName: (state, action) => {
            state.name = action.payload.name
        },

        AddressUpdate: (state, action) => {
            state.name = action.payload.name
            state.phone = action.payload.phone
            state.address.Street = action.payload.Street
            state.address.City = action.payload.City
            state.address.State = action.payload.State
            state.address.PinCode = action.payload.PinCode
        }
    }
})

export const { RegisterUser, userLogin, changeName, AddressUpdate } = userSlice.actions
export default userSlice.reducer