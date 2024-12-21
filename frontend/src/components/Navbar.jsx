import { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    const [user, setUser] = useState(true)
    return (
        <nav className="flex justify-around items-center font-[Poppins] shadow-md h-20  border-b border-gray-300">
            <div>
                <Link to="/" className="text-3xl font-bold">
                    ELECTROMART
                </Link>
            </div>
            <div className="flex items-center justify-center text-gray-700 gap-10 text-xl">

                <Link className="hover:text-black hover:underline" to="/">Home</Link>
                <Link className="hover:text-black hover:underline" to="/contact">Contact</Link>
                <Link className="hover:text-black hover:underline" to="/about">About</Link>
                {user ? (
                    <Link className="hover:text-black hover:underline" to="/cart">Cart</Link>
                ) : (
                    <Link className="hover:text-black hover:underline" to="/signup">Signup/Login</Link>
                )}
            </div>
            <div>
                <div className="flex items-center border bg-gray-500  w-64 rounded-md">
                    <input
                        className=" p-2 w-full rounded-l-sm bg-gray-300 focus:outline-none"
                        placeholder="What are you looking for?"
                        type="text"
                    />
                    <button className="p-2  bg-gray-500  rounded-r-md">
                        <img src="/image/search.png" alt="Search" className=" " />
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar