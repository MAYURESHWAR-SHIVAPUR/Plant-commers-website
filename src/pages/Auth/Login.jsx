import React, { useState } from 'react'
import '../../styles/global.css'
import Left from '../../components/Left Panel/Left'
import { useUserOperations } from '../../controller/userOperations'
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";

const Login = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const { userLogin } = useUserOperations();
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: "",
        isSubmiting: false,
        Error: ""
    });

    async function loginUser(data) {

        const updatedUser = {
            ...user,
            email: data.email,
            password: data.password
        };

        setUser(updatedUser);

        await userLogin(updatedUser, setUser);

        navigate("/Profile/info");
    }

    return (
        <div className='h-screen w-screen overflow-hidden flex items-center justify-center'>

            <Left value={"Register here"} link={"/Register"} />

            <div className='h-full w-2/3 bg-white'>

                <h1 className='text-5xl font-bold mt-10 text-center'>
                    Sign In
                </h1>

                <p className='text-red-500 mt-15 text-center'>
                    {user.Error}
                </p>

                {/* Form */}
                <form
                    onSubmit={handleSubmit(loginUser)}
                    className='pl-[30%] h-full w-full'
                >

                    {/* Email */}
                    <label
                        htmlFor="email"
                        className='block ml-5 text-lg transform translate-y-3'
                    >
                        Email
                    </label>

                    <input
                        type="email"
                        id="email"
                        className='block w-2/3 h-15 rounded-md pl-5 mb-2 bg-[#D9D9D9]'
                        {
                        ...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /@gmail\.com$/,
                                message: "Email must end with @gmail.com"
                            }
                        })
                        }
                    />

                    {
                        errors.email &&
                        <p className='text-red-500 mb-5 ml-2'>
                            {errors.email.message}
                        </p>
                    }

                    {/* Password */}
                    <label
                        htmlFor="password"
                        className='block ml-5 text-lg transform translate-y-3'
                    >
                        Password
                    </label>

                    <input
                        type="password"
                        id="password"
                        className='block w-2/3 h-15 rounded-md pl-5 mb-2 bg-[#D9D9D9]'
                        {
                        ...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message: "Password must be at least 6 characters"
                            }
                        })
                        }
                    />

                    {
                        errors.password &&
                        <p className='text-red-500 mb-5 ml-2'>
                            {errors.password.message}
                        </p>
                    }

                    {/* Social Media Buttons */}
                    <div className='w-2/3 flex items-center justify-around'>

                        <div className='h-[60px] w-[60px] rounded-full bg-[#D9D9D9] flex items-center justify-center text-2xl hover:bg-white hover:border-5 border-black transition duration-300'>
                            <i className="fa-brands fa-google"></i>
                        </div>

                        <div className='h-[60px] w-[60px] rounded-full bg-[#D9D9D9] flex items-center justify-center text-2xl hover:bg-white hover:border-5 border-black transition duration-300'>
                            <i className="fa-brands fa-facebook-f"></i>
                        </div>

                        <div className='h-[60px] w-[60px] rounded-full bg-[#D9D9D9] flex items-center justify-center text-2xl hover:bg-white hover:border-5 border-black transition duration-300'>
                            <i className="fa-brands fa-twitter"></i>
                        </div>

                    </div>

                    {/* Submit Button */}
                    <button
                        type='submit'
                        className='bg-[#C1DCDC] text-black py-2 h-15 text-xl mt-5 rounded-md w-2/3 hover:bg-black hover:text-white transition duration-300'
                        disabled={user.isSubmiting}
                    >
                        {user.isSubmiting ? "Signing In..." : "Sign In"}
                    </button>

                </form>

            </div>

        </div>
    )
}

export default Login