import React from 'react'
import Items from '../../components/Items/Items'
import Search from '../../Imported/Search/Search'
import Order from '../../Imported/Order/Order'

const Cart = () => {
    return (
        <main className='flex items-center justify-center h-[90vh] w-screen overflow-hidden bg-[#F0F2F5]'>
            <section className=' rounded-md lg:h-[80%] lg:w-4/5 md:h-full md:w-full lg:flex items-center justify-between lg:overflow-hidden overflow-scroll shadow-[0px_0_40px_20px_#dddddd]'>

                {/* This is Left Cart */}
                <section className='lg:w-2/3 w-full   h-full bg-[#fffff] p-3'>
                    <h1 className='font-bold text-2xl Aldrich my-5'>Shopping Cart</h1>

                    <section className='h-[85%] w-full  flex items-start justify-center gap-4 flex-wrap overflow-scroll px-10'>
                        <Items Name={"Cacturs"} Type={"Green Plant"} Price={500} />
                        <Items Name={"Cacturs"} Type={"Green Plant"} Price={500} />
                        <Items Name={"Cacturs"} Type={"Yellow Plant"} Price={500} />
                        <Items Name={"Cacturs"} Type={"Pink Plant"} Price={500} />
                        <Items Name={"Cacturs"} Type={"dark Green Plant"} Price={500} />
                        <Items Name={"Cacturs"} Type={"Yellow Plant"} Price={500} />
                        <Items Name={"Cacturs"} Type={"Yellow Plant"} Price={500} />
                        <Items Name={"Cacturs"} Type={"Green Plant"} Price={500} />
                        <Items Name={"Cacturs"} Type={"Pink Plant"} Price={500} />
                    </section>

                </section>

                {/* This is Right Bill */}
                <section className='lg:w-1/3 w-full h-full bg-[#C1DCDC]  p-3'>
                    <h3 className='font-bold text-2xl Aldrich my-5'>Order Summary</h3>
                    <section className='h-[85%] w-full  flex items-center  justify-start gap-4 flex-col overflow-hidden '>
                        <article className='w-full h-fit p-3 flex items-center justify-between '>
                            <div className=''>
                                <p>Items</p>
                                <p>Shipping</p>
                            </div>
                            <div className='text-end'>
                                <p>₹ 500000</p>
                                <select className='bg-white border border-black rounded-md outline-none p-4 py-2 text-sm' name="" id="Delivery">
                                    <option value="">Standard Delivery - ₹50</option>
                                    <option value="">Premium Delivery - ₹150</option>
                                    <option value="">Eco Friendly Delivery - ₹0</option>
                                </select>
                            </div>
                        </article>
                        <Search />
                        {/* <br /> */}
                        <hr className='text-black w-full' />
                        <article className='w-full h-fit p-3 flex items-center justify-between text-xs'>
                            <div className=''>
                                <p>Shopping Cost</p>
                                <p>Discount</p>
                                <p>All Taxes</p>
                                <p>Delivery</p>
                            </div>
                            <div className='text-end'>
                                <p>₹ 500</p>
                                <p>₹ 549</p>
                                <p>₹ 50</p>
                                <p>₹ 100</p>
                            </div>
                        </article>
                        <hr className='text-black w-full' />
                        <article className='w-full h-fit px-3 flex items-center justify-between font-bold'>
                            <div className=''>
                                <p>Total Cost</p>
                            </div>
                            <div className='text-end'>
                                <p>₹ 5000.54</p>
                            </div>
                        </article>
                        <Order />
                    </section>
                </section>

            </section>
        </main>
    )
}

export default Cart