import { useState } from "react"
import {Link} from "react-router-dom"

const Navbar = () => {
    const [user,setUser] = useState(false)
  return (
    <nav className="flex justify-around items-center font-[Poppins] shadow-md h-20  border-b border-gray-300">
    <div>
        <h1 className="text-3xl font-bold">
            ELECTROMART
        </h1>
    </div>
    <div className="flex items-center justify-center text-gray-700 gap-10 text-xl">
        
        <Link className="hover:text-black hover:underline" to="/">Home</Link>
        <Link className="hover:text-black hover:underline" to="/contact">Contact</Link>
        <Link className="hover:text-black hover:underline" to="/about">About</Link>
        {user?(
            <Link className="hover:text-black hover:underline" to="/login">Cart</Link>
        ):(
            <Link className="hover:text-black hover:underline" to="/signup">Signup/Login</Link>
        )}
    </div>
    <div>
        <input
            className="bg-gray-300 p-2 rounded-md"
            placeholder="What are you looking for?"
            type="text"
        />
    </div>
</nav>

  )
}

export default Navbar