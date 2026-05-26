// InputField.jsx

import React from 'react'

const InputField = ({
    label,
    type = "text",
    id,
    register,
    validation = {},
    error,
    defaultValue = "",
    className = "",
    ...rest
}) => {
    return (
        <>
            <label
                htmlFor={id}
                className='block ml-5 text-lg transform translate-y-3'
            >
                {label}
            </label>

            {
                type === "textarea" ? (
                    <textarea
                        id={id}
                        defaultValue={defaultValue}
                        className={`block w-full h-15 rounded-md pl-5 mb-2 bg-[#D9D9D9] ${className}`}
                        {...register(id, validation)}
                        {...rest}
                    />
                ) : (
                    <input
                        type={type}
                        id={id}
                        defaultValue={defaultValue}
                        className={`block w-full h-15 rounded-md pl-5 mb-2 bg-[#D9D9D9] ${className}`}
                        {...register(id, validation)}
                        {...rest}
                    />
                )
            }

            {
                error &&
                <p className='text-red-500 text-sm ml-2 mb-2'>
                    {error.message}
                </p>
            }
        </>
    )
}

export default InputField