import React from 'react'
import '../../styles/global.css'
import Left from '../../components/Left Panel/Left'

const Login = () => {
    return (
        <div className='h-screen w-screen overflow-hidden flex items-center justify-center'>
            <Left value={"Register here"} link={"/Register"} />
            <div className='h-full w-2/3 bg-white'>
                <h1 className='text-5xl font-bold mt-10 text-center'>Sign In</h1>
                <p className='text-red-500 mt-15 text-center'>Error</p>
                <form action="" className=' pl-[30%] h-full w-full'>
                    <label htmlFor="email" className='block ml-5 text-lg transform translate-y-3 '>Email</label>
                    <input type="email" id="email" className='block w-2/3 h-15 rounded-md pl-5 mb-8 bg-[#D9D9D9]' />
                    <label htmlFor="password" className='block ml-5 text-lg transform translate-y-3 '>Password</label>
                    <input type="password" id="password" className='block  w-2/3 h-15 rounded-md pl-5  mb-5 bg-[#D9D9D9]' />
                    <div className='w-2/3 flex items-center  justify-around'>
                        <div className='h-[60px] w-[60px] rounded-full bg-[#D9D9D9] flex items-center justify-center text-2xl hover:bg-white hover:border-5 border-black transition duration-300'>
                            <i class="fa-brands fa-google"></i>
                        </div>
                        <div className='h-[60px] w-[60px] rounded-full bg-[#D9D9D9] flex items-center justify-center text-2xl hover:bg-white hover:border-5 border-black transition duration-300'>
                            <i class="fa-brands fa-facebook-f"></i>
                        </div>
                        <div className='h-[60px] w-[60px] rounded-full bg-[#D9D9D9] flex items-center justify-center text-2xl hover:bg-white hover:border-5 border-black transition duration-300'>
                            <i class="fa-brands fa-twitter"></i>
                        </div>
                    </div>
                    <button type='submit' className='bg-[#C1DCDC] text-black py-2 h-15 text-xl mt-5 rounded-md w-2/3 hover:bg-black hover:text-white transition duration-300'>Sign In</button>
                </form>
            </div>
        </div>
    )
}

export default Login
