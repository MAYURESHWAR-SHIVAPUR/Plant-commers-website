import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import InputField from '../Inputs/InputField';
import { State, City } from 'country-state-city'
import Submit from '../Inputs/Submit';

const states = State.getStatesOfCountry("IN");


const Address = () => {
    const user = useSelector((state) => state.user);

    const [selectedState, setSelectedState] = useState("");
    const cities = City.getCitiesOfState("IN", selectedState);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const submit = (data) => {
        console.log(data);
    };

    return (
        <div onSubmit={handleSubmit(submit)} className='w-full h-fit overflow-hidden '>

            <form className=' pl-[30%] h-full  w-3/4 focus:outline-none mt-5 '>

                <InputField
                    label="Full Name"
                    type="text"
                    id="name"
                    register={register}
                    validation={{
                        required: "Name is required",
                        minLength: {
                            value: 3,
                            message: "Name must be at least 3 characters"
                        },
                    }}
                    error={errors.name}
                    defaultValue={user.name}
                />


                {/* Phone Number */}
                <InputField
                    label="Phone Number"
                    type="tel"
                    id="phone"
                    register={register}
                    validation={{
                        required: "Phone number is required",
                        pattern: {
                            value: /^[0-9]{10}$/,
                            message: "Please enter a valid 10-digit phone number"
                        }
                    }}
                    error={errors.phone}
                    defaultValue={user.phone}
                />

                {/* street */}
                <label htmlFor="street" className='block ml-5 text-lg transform translate-y-3 '>address line(house / street)</label>
                <textarea
                    type="text"
                    id="street"
                    className='block  w-full h-15 rounded-md pl-5  mb-2 bg-[#D9D9D9]'
                    defaultValue={user.address.street}
                    {
                    ...register("street", {
                        required: "Street address is required",
                        minLength: {
                            value: 5,
                            message: "House address must be at least 5 characters"
                        }
                    })
                    }
                />

                {/* State */}
                <label htmlFor="State" className='block ml-5 text-lg transform translate-y-3 '>State</label>
                <select
                    onChange={(e) => setSelectedState(e.target.value)}
                    type="text"
                    id="State"
                    className='block  w-full h-15 rounded-md pl-5  mb-2 bg-[#D9D9D9]'
                    defaultValue={user.address.State || ""}
                    {
                    ...register("State", {
                        required: "State is required",
                    })
                    }
                >
                    <option value="">Select State</option>

                    {states.map((state) => (
                        <option
                            key={state.isoCode}
                            value={state.isoCode}
                        >
                            {state.name}
                        </option>
                    ))}
                </select>

                {/* City */}
                <label htmlFor="City" className='block ml-5 text-lg transform translate-y-3 '>City</label>
                <select
                    placeholder="Select a city"
                    id="City"
                    className='block  w-full h-15 rounded-md pl-5  mb-2 bg-[#D9D9D9]'
                    defaultValue={user.address.City}
                    {
                        ...register("City", {
                            required: "City is required",
                        })
                    }
                >
                    <option value="">Select City</option>
                    {cities.map((city) => (
                        <option
                            key={city.name}
                            value={city.name}
                        >
                            {city.name}
                        </option>
                    ))}
                </select>

                {/* Pincode */}
                <InputField
                    label="Pincode"
                    type="text"
                    id="PinCode"
                    register={register}
                    validation={{
                        required: "Pincode is required",
                        pattern: {
                            value: /^[0-9]{6}$/,
                            message: "Please enter a valid 6-digit pincode"
                        }
                    }}
                    error={errors.PinCode}
                    defaultValue={user.address.PinCode}
                />

                <Submit val={"Save & Update"} />
            </form>
        </div>
    )

}

export default Address
