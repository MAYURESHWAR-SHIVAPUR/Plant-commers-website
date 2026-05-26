import React from 'react'
import Left from '../../components/Left Panel/Left'
import { useForm } from 'react-hook-form'
import { useUserOperations } from '../../controller/userOperations'
import { useNavigate } from 'react-router-dom'


const Register = () => {
    const { register, watch, handleSubmit, formState: { errors }, isSubmitting } = useForm();
    const { RegisterUser } = useUserOperations();
    const navigate = useNavigate();


    const onSubmit = async (data) => {
        await RegisterUser(data);
        navigate("/");
    };

    const firstError = Object.values(errors)[0];

    return (
        <div className='h-screen w-screen overflow-hidden flex items-center justify-center'>
            <Left value={"Login here"} link={"/login"} />
            <div className='h-screen w-2/3 bg-white'>
                <h1 className='text-5xl font-bold mt-10 text-center'>Sign Up</h1>
                {firstError && (
                    <p className='text-red-500 mt-15 text-center'>{firstError.message}</p>
                )}
                <form onSubmit={handleSubmit(onSubmit)} className=' pl-[30%] h-full w-full focus:outline-none'>

                    {/* Full Name */}
                    <label htmlFor="name" className='block ml-5 text-lg transform translate-y-3 '>Full Name</label>
                    <input
                        type="text"
                        id="name"
                        className='block w-2/3 h-15 rounded-md pl-5 mb-5 bg-[#D9D9D9]'
                        {...register("name", {
                            required: "Name is required",
                            minLength: {
                                value: 3,
                                message: "Name must be at least 3 characters"
                            }
                        })
                        }
                    />
                    <label htmlFor="email" className='block ml-5 text-lg transform translate-y-3 '>Email</label>
                    <input type="email" id="email" className='block w-2/3 h-15 rounded-md pl-5 mb-5 bg-[#D9D9D9]'
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /@gmail\.com$/,
                                message: "Email must end with @gmail.com"
                            }
                        })}
                    />
                    <label htmlFor="password" className='block ml-5 text-lg transform translate-y-3 '>Password</label>
                    <input
                        type="password"
                        id="password"
                        className='block  w-2/3 h-15 rounded-md pl-5  mb-5 bg-[#D9D9D9]'
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message: "Password must be at least 6 characters"
                            }
                        })}
                    />
                    <label htmlFor="confirmPassword" className='block ml-5 text-lg transform translate-y-3 '>Confirm Password</label>
                    <input type="password" id="confirmPassword" className='block  w-2/3 h-15 rounded-md pl-5  mb-5 bg-[#D9D9D9]'
                        {...register("confirmPassword", {
                            required: "Please confirm your password",
                            validate: (value) => value === watch("password") || "Passwords do not match"
                        })}
                    />

                    <button type='submit' className='bg-[#C1DCDC] text-black py-2 h-15 text-xl mt-5 rounded-md w-2/3 hover:bg-black hover:text-white transition duration-300'>Register</button>
                </form>
            </div>
        </div>
    )
}

export default Register
