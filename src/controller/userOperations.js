import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin as Login, RegisterUser as Register, changeName, AddressUpdate } from "../redux/Slicer/userSlice";



export const useUserOperations = () => {
    const { name, email } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    let timer = useRef(null);

    const profile = (user, setUser) => {
        clearTimeout(timer.current);

        setUser((pre) => ({
            ...pre,
            isSubmiting: true,
        }));

        timer.current = setTimeout(() => {

            dispatch(changeName(user.name));

            setUser((pre) => ({
                ...pre,
                isSubmiting: false,
            }))

        }, 2000);
    }

    const userLogin = (user, setUser) => {

        setUser((pre) => ({
            ...pre,
            isSubmiting: true,
        }));

        dispatch(Login({
            email: user.email,
            password: user.password,
        }));


        localStorage.setItem("token", JSON.stringify({
            name: user.name,
            email: user.email
        }));

        setUser((pre) => ({
            ...pre,
            isSubmiting: false,
        }));

    }

    const RegisterUser = (data) => {

        dispatch(Register({
            name: data.name,
            email: data.email,
            password: data.password,
        }));



        localStorage.setItem("token", JSON.stringify({
            name: data.name,
            email: data.email
        }));
    }

    const Address = (data) => {
        dispatch(AddressUpdate({
            name: data.name,
            phone: data.phone,
            Street: data.Street,
            City: data.City,
            State: data.State,
            PinCode: data.PinCode
        }))
    }

    return { profile, userLogin, RegisterUser, Address }
}