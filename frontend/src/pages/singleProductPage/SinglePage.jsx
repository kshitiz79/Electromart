import React, { useState } from 'react'
import Havit from "../../assets/Havit.png"

const SinglePage = () => {
    const [count, setCount] = useState(1);
    const [selectedColor, setSelectedColor] = useState("");

    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }

    const handleColorChange = (color) => {
        setSelectedColor(color);
    };

    return (
        <div className='w-[80%] mx-auto mt-20 mb-20 flex gap-10  '>
            <div className='w-[65%] flex gap-5' >
                <div className='w-[20%] flex flex-col gap-5 ' >
                    <img className='bg-gray-100' src={Havit} alt="" />
                    <img className='bg-gray-100' src={Havit} alt="" />
                    <img className='bg-gray-100' src={Havit} alt="" />
                    <img className='bg-gray-100' src={Havit} alt="" />
                </div>
                <div className='w-[80%]'>
                    <img src={Havit} className='h-[100%] w-[100%] bg-gray-100 ' alt="" />
                </div>
            </div>
            <div className='w-[35%]  '>
                <h1 className='font-semibold text-xl'>Havic HV G-92 Gamepad</h1>
                <h2 className='text-xl mb-5 mt-5'>$192.00</h2>
                <p className='text-sm mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, nemo itaque asperiores recusandae quisquam, accusantium fugiat dignissimos quod quos, facilis cum at quia aspernatur alias! Voluptatem culpa vitae illum ut.</p>
                <hr />
                <div className="mt-5 flex items-center gap-6">
                    <label>Colours:</label>
                    <div className="flex items-center gap-3">
                        {/* Blue Color */}
                        <label className="flex items-center">
                            <input
                                className="hidden"
                                type="radio"
                                value="blue"
                                name="color"
                                onChange={() => handleColorChange("blue")}
                                checked={selectedColor === "blue"}
                            />
                            <div
                                className={`h-6 w-6 rounded-full border-2 cursor-pointer ${selectedColor === "blue"
                                        ? "border-black"
                                        : "border-transparent"
                                    } bg-blue-400`}
                                onClick={() => handleColorChange("blue")}
                            ></div>
                        </label>
                        {/* Red Color */}
                        <label className="flex items-center">
                            <input
                                className="hidden"
                                type="radio"
                                value="red"
                                name="color"
                                onChange={() => handleColorChange("red")}
                                checked={selectedColor === "red"}
                            />
                            <div
                                className={`h-6 w-6 rounded-full border-2 cursor-pointer ${selectedColor === "red"
                                        ? "border-black"
                                        : "border-transparent"
                                    } bg-red-400`}
                                onClick={() => handleColorChange("red")}
                            ></div>
                        </label>
                    </div>
                </div>

                <div className='flex items-center justify-between'>
                    <div className='flex items-center  rounded-sm '>
                        <button className='px-2 border rounded-l-sm hover:border-black  hover:bg-red-400' onClick={decrement} >-</button>
                        <div className=' w-10 border-t border-b text-center'>{count}</div>
                        <button className='px-2 border rounded-r-sm hover:border-black hover:bg-red-400'  onClick={increment} >+</button>
                    </div>
                    <button>
                        Buy Now
                    </button>
                    <button>
                        whishlist
                    </button>
                </div>

                <div>
                    <div>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <div>
                            <h1>Free Delivery</h1>
                            <p>Enter your postal code for Delivery Availablity</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <div>
                            <h1>Return Delivery</h1>
                            <p>Enter your postal code for Delivery Availablity</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default SinglePage