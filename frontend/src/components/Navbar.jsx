// import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="flex justify-around items-center font-[Poppins] shadow-md h-20 border-b border-gray-300">
    <div>
        <h1 className="text-3xl font-bold">
            ELECTROMART
        </h1>
    </div>
    <div className="flex items-center justify-center text-gray-700 gap-10 text-xl">
        <a className="hover:text-black hover:underline" href="">Home</a>
        <a className="hover:text-black hover:underline" href="">Contact</a>
        <a className="hover:text-black hover:underline" href="">About</a>
        <a className="hover:text-black hover:underline" href="">Signup</a>
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