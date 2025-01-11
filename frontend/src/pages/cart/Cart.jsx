import React from 'react'
import CartCard from '../../components/CartCard'

import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import {  clearCart } from '../../features/cart/cartSlice';


const Cart = () => {
    // console.log(cardData);

    const { items, totalQuantity, totalPrice } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart())
        
    }


    return (
        <div>
            <div className='w-[80%] mx-auto mt-10 mb-10'>
                <div className='flex w-[100%] justify-around items-end py-6 shadow-3xl' >
                    <h1>Product</h1>
                    <h1>Price</h1>
                    <h1>Quantity</h1>
                    <h1>Subtotal</h1>
                    <h1 className='w-[8%]'></h1>
                </div>
                {items.map(card => (
                    <CartCard key={card.id} cardData={card} />
                ))}
                <div className='flex mt-10 justify-between'>
                    <Link to="/allproducts" className='hover:bg-red-500 hover:text-white border px-5 rounded-sm py-2 border-gray-400' >Return To Shop</Link>
                    <button className=' hover:bg-red-500 hover:text-white border px-5 rounded-sm py-2 border-gray-400'
                        onClick={handleClearCart} >Clear Card</button>
                </div>

                <div className='mt-10 w-full flex justify-between items-start'>
                    <div className='flex gap-5 w-[40%]  items-center'>
                        <input type="text" className=' px-5 py-2 placeholder:text-gray-500 outline-2 outline rounded-sm' placeholder='Coupon Code' />
                        <button className=' hover:bg-red-600 bg-red-500 text-white  px-5 rounded-sm py-2 ' >Apply Coupon</button>
                    </div>
                    <div className='border-2 flex flex-col  w-[35%] rounded'>
                        <div className='w-[95%] mt-5 mb-2 mx-auto'>

                            <h1 className='font-semibold'>Cart Total</h1>
                            <div className='flex mt-5 mb-2 justify-between items-center'>
                                <h2>Subtotal:</h2>
                                <h2>${totalPrice}</h2>
                            </div>
                            <hr />
                            <div className='flex mt-5 mb-2 justify-between items-center'>
                                <h2>Shipping:</h2>
                                <h2>Free</h2>
                            </div>
                            <hr />
                            <div className='flex mt-5 mb-2 justify-between items-center'>
                                <h2>Total:</h2>
                                <h2>${totalPrice}</h2>
                            </div>
                        </div>

                        <Link to='/checkout' className=' w-[50%]  mt-2 mb-5 mx-auto hover:bg-red-600 bg-red-500 text-white  px-5 rounded-sm py-2 ' >Proceed to Checkout</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart